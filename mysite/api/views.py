from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
import pymongo
import environ
from bson import json_util
env = environ.Env()
environ.Env.read_env()
# from . serializers import TaskSerializer
# from .models import Task
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
    username = env('USER_N')
    password = env('USER_P')
    client = pymongo.MongoClient('mongodb+srv://' + username + ':' + password + env('DB_HALF'))
    db = client["restaurant"]
    col = db["appetizers"]
    lst = []
    for x in col.find():
        x['_id'] = str(x['_id'])
        lst.append(x)
    print(f'List is -> {(lst)}.')
    return Response((lst))

