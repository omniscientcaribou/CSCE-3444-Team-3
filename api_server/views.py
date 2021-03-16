
from .models import Item, Employee, Table, Task, Aut
from . serializers import ItemSerializer, EmployeeSerializer, TableSerializer, TaskSerializer, AutSerializer
from rest_framework import viewsets
from django.db import connections
from django.http import HttpResponse, HttpResponseNotFound
import json
import io
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

class AutViewSet(viewsets.ModelViewSet):
    queryset = Aut.objects.all()
    serializer_class = AutSerializer

# Need to add a field check to guarantee write format
def get_order(request):
    wrapper = connections['default']
    params = wrapper.get_connection_params()
    db_connection = wrapper.get_new_connection(params) 

    data = json.loads(request.body)
    result = db_connection.orders.insert_one(data)
    return HttpResponse(result.inserted_id)







# Need to get JSON Payload
# I need to parse it
# Write each individual item from order into DB (queue)


