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
    item = Item.objects.get(name=pkey)
    serializer = ItemSerializer(item, many=False)
    return Response(serializer.data)   

@api_view(['POST'])
def addMenuItem(request):
    item = Item()
    item.name = "Lasagna"
    item.description = "It's Lasagna!"
    item.group = "entree"
    item.save()
    return Response('Item Added!')





    
