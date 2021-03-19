
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
def foo_test(request):
    # bar = list(OrderContent.objects.filter(state="Ordered", table_number = 3).values())
    bar = OrderContent.objects.select_related('item').filter(item__id=11)
    test = {
        "id" : str(bar[0].id),
        "order_id" : str(bar[0].item_id), 
        "item_name" : str(bar[0].item),
        "table_number" : str(bar[0].table_number),
        "placed_at" : str(bar[0].placed_at),
        "state" : str(bar[0].quantity),
    }

    return JsonResponse(test, safe=False)

    # bar.item <-- name
    # bar.member