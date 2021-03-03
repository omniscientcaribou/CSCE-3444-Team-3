from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
import pymongo
import environ
from bson import json_util
env = environ.Env()
environ.Env.read_env()
from .models import Item, Employee
from . serializers import ItemSerializer, EmployeeSerializer
# Create your views here.

@api_view(['GET'])
def apiOverview(request):
	api_urls = {
		'Show Menu Items' : 'show-menu/',
        'Get Specific Item' : 'get-item/<str:name>',
        'Add Items' : 'add-items/',
        'Update Items' : 'update-items/<str:name>',
        'Delete Items' : 'delete-item<str:name>'
		}

	return Response(api_urls)



@api_view(['GET'])
def showMenu(request):

    return Response('Test')


@api_view(['GET'])
def getItems(request):
    item = Item.objects.all()
    serializer = ItemSerializer(item, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getItem(request, pkey):
    # http://127.0.0.1:8000/api/get-item/Testinput22
    item = Item.objects.get(name=pkey)
    serializer = ItemSerializer(item, many=False)
    return Response(serializer.data)   

@api_view(['POST'])
def addMenuItem(request):
    serializer = ItemSerializer(data=request.data)
    print(f'->> {request.data}')
    if serializer.is_valid():
        serializer.save()

    return Response('Item Added!')

@api_view(['POST'])
def updateMenuItem(request, pkey):
    item = Item.objects.get(name=pkey)
    serializer = ItemSerializer(instance = item, data = request.data)
    if serializer.is_valid():
        serializer.save()
    return Response('Item Added!')

@api_view(['DELETE'])
def deleteMenuItem(request, pkey):
    # item = Item.objects.get(name=pkey)
    # item.delete()
    Item.objects.filter(name=pkey).delete()
    return Response('Item Deleted!')

@api_view(['POST'])
def addEmployee(request):
    serializer = EmployeeSerializer(data=request.data)
    print(f'Data -> {request.data}.')
    if serializer.is_valid():
        serializer.save()
        return Response('Correct')
    return Response('Wrong')

@api_view(['GET'])
def getEmployee(request, pkey):
    employee = Employee.objects.get(name=pkey)
    serializer = EmployeeSerializer(employee, many=False)
    return Response(serializer.data)

@api_view(['GET', 'POST'])
def employee_yeet(request, pkey=None):
    if request.method == 'GET':
        if pkey:
            employee = Employee.objects.get(name=pkey)
            serializer = EmployeeSerializer(employee, many=False)
        else:
            employee = Employee.objects.all()
            serializer = EmployeeSerializer(employee, many=True)
        return Response(serializer.data)
    
    elif request.method == 'POST':
        if pkey:
            return Response('Not done')
        else:
            name = request.POST.get("name")
            role = request.POST.get("role")
            emp = Employee(name, role)
            serializer = EmployeeSerializer(data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response('Employee added')
            else:
                return Response('Ya done goofed.')
    return Response(f'{pkey} {request.method}')

    # curl -X POST -d 'name=terry&role=saint' 127.0.0.1:8000/api/employee/





    





    
