
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
    
class SendOrderView(mixins.CreateModelMixin, viewsets.GenericViewSet):
    serializer_class = OrderSerializer

class OrderContent(viewsets.ModelViewSet):
    queryset = OrderContent.objects.all()
    serializer_class = OrderContentSerializer

# @api_view(['GET', 'POST']) 
# def test(request):
#     wrapper = connections['default']
#     params = wrapper.get_connection_params()
#     db_connection = wrapper.get_new_connection(params) 
#     data = json.loads(request.body)
#     # _status = data['status']
#     # for item in data['items']:
#     #     _id = item['id']
#     #     _count = item['count']
#     #     current_order = {
#     #         "state" : _status,
#     #         "item" : _id,
#     #         "quantity" : _count,
#     #         "table_number" : data['table_number'], 
#     #         "time" : "",
#     #     }
#     result = db_connection.api_server_order.insert_one(data)

#     collection = db_connection.api_server_order

#     print('####ORDER INFORMATION####')
#     for item in collection.find({"table_number" : 1}):
#         print(item)

#     return HttpResponse(result.inserted_id)




# Need to get JSON Payload
# I need to parse it
# Write each individual item from order into DB (queue)


