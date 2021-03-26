
from .models import * #Item, Employee, Table, Task, Credential, Order
from .serializers import * #ItemSerializer, EmployeeSerializer, TableSerializer, TaskSerializer, CredentialSerializer, OrderQueueQueueQueueQueueQueueSerializer
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

@api_view(['GET'])
def kitchen_view(request, pk):
    lst = []
    query_data = OrderContent.objects.prefetch_related('item').filter(table_number = pk)
    for element in query_data:    
        build_data = {
            "id"            : str(element.id),
            "order_id"      : str(element.order_id),
            "item_name"     : str(element.item),
            "group"         : str(element.item.group),
            "quantity"      : str(element.quantity),
            "table_number"  : str(element.table_number),
            "placed_at"     : str(element.placed_at),
            "state"         : str(element.state),
            "customization" : "Customization goes here!",
        }
        lst.append(build_data)
    return JsonResponse(lst, safe=False)

@api_view(['GET'])
def table_bill(request, pk):
    lst = []
    query_data = OrderContent.objects.prefetch_related('item').filter(table_number=pk)
    for element in query_data:
        summary_order = {
            "item" : str(element.item),
            "quantity" : str(element.quantity),
            "price" : str(element.item.price),
            "order_total" : str(element.quantity * element.item.price),
        }
        lst.append(summary_order)
    return JsonResponse(lst, safe=False)

@api_view(['GET'])
def table_total(request, pk):
    query_data = OrderContent.objects.prefetch_related('item').filter(table_number=pk)
    price = 0
    for element in query_data:
        price += element.item.price
    order_total = {
        'total' : str(price),
    }
    return JsonResponse(order_total, safe = False)









