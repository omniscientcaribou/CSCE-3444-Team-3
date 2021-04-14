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

"""
    The following view sets allow me to utilize query sets/serializers, which is an 
    abstraction that Django provides for querying. 
"""


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


class MealTimeViewSet(viewsets.ModelViewSet):
    queryset = MealTime.objects.all()
    serializer_class = MealTimeSerializer


class CustomerFeedBackViewSet(viewsets.ModelViewSet):
    queryset = CustomerFeedBack.objects.all()
    serializer_class = CustomerFeedBackSerializer


"""
    The following are API calls that our system uses. 
    For each of these functions look at the `urls.py` and see how the routing goes from a function, 
    to the actual linkage of the API. It will be come clear how they are connected, and how subsequent
    end points can be added. 
"""


@api_view(["GET"])
def kitchen_view(request, pk):
    """
    This is an end point that allows the kitchen to see specific orders.
    Notice, that the function takes in pk, or primary key which is the
    specific table number that the kitchen wishes to have information for.
    A call to this end point will look like:
    https://swe3444.herokuapp.com/api/kitchen_view/<TABLENUMBER>/
    """
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
    """
    This is an end point for the Wait Staff/Customer UI to render on their interfaces
    the items and cost for a table. You can make a call to this end point by using
    https://swe3444.herokuapp.com/api/table_view/<TABLENUMBER>
    """
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
    """
    This is an end point to show the total at a table, like table_bill, it takes a pk.
    https://swe3444.herokuapp.com/api/table_total/<TABLENUMBER>
    """
    lst = []
    query_data = OrderContent.objects.prefetch_related("item").filter(table_number=pk)
    price = 0
    for element in query_data:
        if element.state != "PAID":
            price += element.item.price * element.quantity
    order_total = {
        "total": str(price),
    }
    lst.append(order_total)
    return JsonResponse(lst, safe=False)


@api_view(["GET", "POST"])
def wait_order(request, t_num, item_id, quantity, a_flag=False, s="", s_2=""):
    """
    This is an end point for the Wait Staff to place an order on behalf of a customer.
    The only thing you need to know is the following when making a POST request.
    "table_number"    : Integer
    "state"           : Text set this to "ORDERED" casing is important
    "quantity"        : Set to 1 as you pass
    "order"           : Handled for you, don't mess with this.
    "item"            : This is an integer that correlates to an item in the Item database table
    "allergy_flag"    : True or False
    "comment"         : Text field
    "allergy_comment" : text Field

    It is necessary you pass at least these to the API (some of the other data pieces are included for you
    when you make this call).

    The mechanics of this are nearly identical to how an order is placed by a customer, see the posts in calls
    below for url_one, an url_two.
    """

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
        "allergy_comment": s_2,
    }

    requests.post(url_one, data=serial_order, headers=headers)

    return JsonResponse({"Response": "Success"})


@api_view(["GET"])
def all_tables(request):
    """
    An end point to roll up pricing for all tables, so you can quickly find out the total for each table.
    """
    price_dictionary = {}
    query_data = OrderContent.objects.prefetch_related("item")
    for element in query_data:
        if element.state != "PAID":
            price_dictionary[element.table_number] = price_dictionary.get(
                element.table_number, 0
            ) + (element.item.price * element.quantity)
    return JsonResponse(price_dictionary, safe=False)


@api_view(["GET", "PATCH"])
def get_table(request, pk):
    """
    Is an end point that "taps" a table as "occupied" this is important because it is used in our virtual hosting
    UI. When a customer touches the menu it should "tap" a table. So this should never be touched.
    """
    url = "https://swe3444.herokuapp.com/api/table/"
    r = requests.get(url).json()
    print(r)
    url_build = url + str(pk) + "/"
    pay_load = {"state": True}
    requests.patch(url_build, data=pay_load)

    return JsonResponse({"reservation_status": "Success"}, safe=False)


@api_view(["GET", "PATCH"])
def release_table(request, pk):
    """
    Like get_table, release_table actually sets the tables state back to false (vacant). This will auto update the
    virtual host UI and show that the table is now available. This is self serving and this is tied to the "pay" button
    for a table.
    """
    url = "https://swe3444.herokuapp.com/api/table/"
    r = requests.get(url).json()
    print(r)
    url_build = url + str(pk) + "/"
    pay_load = {"state": False}
    requests.patch(url_build, data=pay_load)
    return JsonResponse({"release_status": "Success"}, safe=False)


@api_view(["GET"])
def log_in(request, user_name, password):
    """
    An end point for the log in to redirect users to the appropriate interface.
    """
    employees = requests.get("https://swe3444.herokuapp.com/api/employee/").json()
    credentials = requests.get("https://swe3444.herokuapp.com/api/credential/").json()

    url_redirection = {
        "Customer": "https://customerui3444.herokuapp.com/customerui",
        "Kitchen": "https://swe3444.herokuapp.com/api/",
        "Wait Staff": "https://waitstaffcsce3444.herokuapp.com",
        "Manager": "https://theoldreader.com/kittens/",
    }

    for employee in employees:
        if user_name == employee["name"]:
            for credential in credentials:
                if password == credential["enter_password"]:
                    redirect = {
                        "name": user_name,
                        "role": employee["role"],
                        "url": url_redirection[employee["role"]],
                    }
                    return JsonResponse(redirect, safe=False)
    return HttpResponse("Invalid credentials")


@api_view(["GET"])
def tickets(request):
    """
    An end point for the kitchen so that they can view orders slightly differently. They use both, but
    this is necessary for rendering all information on their screen. No information is required to call this
    other than a GET to this end point.
    """
    lst = []
    query_data = OrderContent.objects.prefetch_related("item").filter(state="ORDERED")
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
            "allergy_comment": str(element.allergy_comment),
        }
        lst.append(build_data)
    return JsonResponse(lst, safe=False)
