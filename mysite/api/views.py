from .models import Item, Employee
from . serializers import ItemSerializer, EmployeeSerializer
from rest_framework import viewsets
# Create your views here.

class ItemViewSet(viewsets.ModelViewSet):
    queryset = Item.objects.all()
    print('#############################')
    print(type(Item.objects.all()[:1]))
    print('#############################')
    serializer_class = ItemSerializer


class EmployeeViewSet(viewsets.ModelViewSet):
    queryset = Employee.objects.all()
    serializer_class = EmployeeSerializer
