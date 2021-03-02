from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
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
	s = [0, 1, 2, 3, 4, 5]
	return Response(s)