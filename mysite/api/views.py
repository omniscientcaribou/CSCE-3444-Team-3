from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
import pymongo
import environ
from bson import json_util
env = environ.Env()
environ.Env.read_env()
from . serializers import ItemSerializer
from .models import Item
# Create your views here.

@api_view(['GET'])
def apiOverview(request):
	api_urls = {
		'Menu':'/menu/',
        'Appetizers' : '/appetizers/',
        'Desserts' : '/desserts/',
        'Drinks' : '/drinks/',
        'entree' : '/entrees/',
        'sides' : '/sides/'
		}

	return Response(api_urls)



@api_view(['GET'])
def showMenu(request):
    i = Item()
    i.name = "TestInput33"
    i.description = "TestData33"
    i.group = "TestGrouping"
    i.save()
    print('Saved!')
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



    





    
