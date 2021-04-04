from .models import *  # Item, Employee, Table, Task, Credential, Order
from .serializers import *  # ItemSerializer, EmployeeSerializer, TableSerializer, TaskSerializer, CredentialSerializer, OrderQueueQueueQueueQueueQueueSerializer
from rest_framework import viewsets
from rest_framework import mixins
from django.db import connection
from rest_framework import generics
from django.http import HttpResponse, HttpResponseNotFound, JsonResponse
from rest_framework.decorators import api_view
import json
from django.views.decorators.csrf import csrf_exempt
from rest_framework.response import Response
from django.db import connections
from django.http import JsonResponse
from django.forms.models import model_to_dict
from django.shortcuts import render
import datetime
import requests
# import psycopg2
# import os
# from os.path import join, dirname
# from dotenv import load_dotenv
# dotenv_path = join(dirname(__file__), '.env')
# load_dotenv(dotenv_path)
# import pandas as pd
# import pandas.io.sql as sqlio
# import plotly.express as px
# Create your views here.


class ItemViewSet(viewsets.ModelViewSet):
    queryset = Item.objects.all()
    serializer_class = ItemSerializer


class EmployeeViewSet(viewsets.ModelViewSet):
    queryset = Employee.objects.all()
    serializer_class = EmployeeSerializer


class TableViewSet(viewsets.ModelViewSet):
    queryset = Table.objects.all()
    serializer_class = TableSerializer


class TaskViewSet(viewsets.ModelViewSet):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer


class CredentialViewSet(viewsets.ModelViewSet):
    queryset = Credential.objects.all()
    serializer_class = CredentialSerializer


class OrderViewSet(viewsets.ModelViewSet):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer


class OrderContentViewSet(viewsets.ModelViewSet):
    queryset = OrderContent.objects.all()
    serializer_class = OrderContentSerializer

class PriceCalculationsViewSet(viewsets.ModelViewSet):
    queryset = PriceCalculations.objects.all()
    serializer_class = PriceCalculationsSerializer


@api_view(["GET"])
def kitchen_view(request, pk):
    lst = []
    query_data = OrderContent.objects.prefetch_related("item").filter(table_number=pk)
    for element in query_data:
        build_data = {
            "id": str(element.id),
            "order_id": str(element.order_id),
            "item_name": str(element.item),
            "group": str(element.item.group),
            "quantity": str(element.quantity),
            "table_number": str(element.table_number),
            "placed_at": str(element.placed_at),
            "state": str(element.state).upper(),
            "allergy_flag": str(element.allergy_flag),
            "comment": str(element.comment),
        }
        lst.append(build_data)
    return JsonResponse(lst, safe=False)


@api_view(["GET"])
def table_bill(request, pk):
    lst = []
    query_data = OrderContent.objects.prefetch_related("item").filter(table_number=pk)
    for element in query_data:
        summary_order = {
            "item": str(element.item),
            "quantity": str(element.quantity),
            "price": str(element.item.price),
            "order_total": str(element.quantity * element.item.price),
        }
        lst.append(summary_order)
    return JsonResponse(lst, safe=False)


@api_view(["GET"])
def table_total(request, pk):
    lst = []
    query_data = OrderContent.objects.prefetch_related("item").filter(table_number=pk)
    price = 0
    for element in query_data:
        if element.id != "PAID":
            price += element.item.price * element.quantity
    order_total = {
        "total": str(price),
    }
    lst.append(order_total)
    return JsonResponse(lst, safe=False)

@api_view(["GET", "POST"])
def wait_order(request, t_num, item_id, quantity, a_flag=False, s=""):

    url_one = "https://swe3444.herokuapp.com/api/ordercontent/"
    url_two = "https://swe3444.herokuapp.com/api/order/"

    create_order = {
        "table_number": t_num,
        "state": "Occupied",
    }

    headers = {}
    init_order = requests.post(url_two, data=create_order, headers=headers)
    data = json.loads(init_order.text)

    p_key = data["id"]

    serial_order = {
        "table_number": t_num,
        "placed_at": datetime.datetime.now(),
        "state": "ORDERED",
        "quantity": quantity,
        "order": p_key,
        "item": item_id,
        "allergy_flag": a_flag,
        "comment": s,
    }

    requests.post(url_one, data=serial_order, headers=headers)

    return JsonResponse({"Response": "Success"})


@api_view(["GET"])
def all_tables(request):
    price_dictionary = {}
    query_data = OrderContent.objects.prefetch_related("item")
    for element in query_data:
        if element.state != "PAID":
            price_dictionary[element.table_number] = price_dictionary.get(
                element.table_number, 0
            ) + (element.item.price * element.quantity)
    return JsonResponse(price_dictionary, safe=False)


@api_view(["GET", "PATCH"])
def get_table(request):
    url = "https://swe3444.herokuapp.com/api/table/"
    r = requests.get(url).json()

    for table in r:
        url_build = url + str(table["id"]) + "/"
        if table["state"] == False:
            table["state"] = True
            requests.patch(url_build, data=table)
            print(f" {url_build} {table}.")
            return JsonResponse(
                {"reservation_status": "Success", "data": table}, safe=False
            )

    return JsonResponse({"reservation_status": "Failed"}, safe=False)


@api_view(["GET", "PATCH"])
def release_table(request, table_num):
    url = "https://swe3444.herokuapp.com/api/table/"
    url_build = url + table_num + "/"

    table = {"state": False}

    requests.patch(url_build, data=table)
    return HttpResponse("Release")

@api_view(["GET"])
def log_in(request, user_name, password):
    employees = requests.get('https://swe3444.herokuapp.com/api/employee/').json()
    credentials = requests.get('https://swe3444.herokuapp.com/api/credential/').json()

    url_redirection = {
        "Customer"      : "customer_ui",
        "Kitchen"       : "kitchen_ui",
        "Wait Staff"    : "waitstaff_ui",
        "Manager"       : "manager_ui",
        "Developer"     : "developer_ui",
    }

    for employee in employees:
        if user_name == employee["name"]:
            for credential in credentials:
                if password == credential['enter_password']:
                    # print(f'{user_name} has been found with password: {password} and role {employee["role"]}')
                    redirect = {
                        "name" : user_name,
                        "role" : employee["role"],
                        "url"  : url_redirection[employee["role"]]
                    }
                    return JsonResponse(redirect, safe=False)
    return HttpResponse("Invalid credentials")


@api_view(["GET"])
def tickets(request):
    lst = []
    query_data = OrderContent.objects.prefetch_related("item").filter(state='ORDERED')
    for element in query_data:
        build_data = {
            "id": str(element.id),
            "order_id": str(element.order_id),
            "item_name": str(element.item),
            "group": str(element.item.group),
            "quantity": str(element.quantity),
            "table_number": str(element.table_number),
            "placed_at": str(element.placed_at),
            "state": str(element.state).upper(),
            "allergy_flag": str(element.allergy_flag),
            "comment": str(element.comment),
        }
        lst.append(build_data)
    return JsonResponse(lst, safe=False)


# def test_html(request):
#     con = psycopg2.connect(
#         host = os.getenv('POSTGRES_HOST'),
#         database = os.getenv('POSTGRES_DATABASE'),
#         user = (os.getenv('POSTGRES_USER')),
#         password = os.getenv('POSTGRES_PASSWORD')
#     )

#     # CONNECT TO DB
#     cur = con.cursor()

#     # EXECUTE QUERY & STORE RESULTS 
#     data = sqlio.read_sql(query, con)

#     # TERMINATE CONNECTION
#     con.close()

#     query = "select * from api_server_item;"
#     query_two = "select * from api_server_ordercontent;"

#     items , paid_orders = get_data_frame(query), get_data_frame(query_two)
#     items = items[['id', 'name', 'group', 'price']]
#     paid_orders = paid_orders[['id', 'placed_at', 'state', 'quantity', 'item_id', 'order_id']]
#     paid_orders = paid_orders[(paid_orders['state'] == "PAID") | (paid_orders['state'] == "COMPENSATED")]
#     df = pd.merge(items, paid_orders, left_on = 'id', right_on = 'item_id')
#     df = df[['order_id', 'item_id', 'name', 'group', 'quantity', 'price', 'placed_at', 'state']]

#     df.assign(col = 'profit')
#     df['profit'] = df['quantity'] * df['price']
#     print(df)
#     print(df.groupby(['group']).sum())

#     fig = px.pie(df, names = "group", values = "profit", title = "Daily Profit By Group")
#     fig.show()
#     fig.write_html("api_server/pie.html")

#     return render(request, "api_server/pie.html")

