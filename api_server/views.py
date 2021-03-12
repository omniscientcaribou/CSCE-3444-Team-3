
from .models import Item, Employee, Table, Task, Aut
from . serializers import ItemSerializer, EmployeeSerializer, TableSerializer, TaskSerializer, AutSerializer
from rest_framework import viewsets
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
