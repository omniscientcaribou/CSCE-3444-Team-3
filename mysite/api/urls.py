from django.urls import path
from . import views

urlpatterns = [
	path('', views.apiOverview, name="api-overview"),
    path('show-menu/', views.showMenu, name="show-menu"),
    path('get-items/', views.getItems, name="get-items"),
    path('get-item/<str:pkey>', views.getItem, name="get-item"),
    path('add-items/', views.addMenuItem, name="add-item"),
    path('update-items/<str:pkey>/', views.updateMenuItem, name="update-item"),
    path('delete-item/<str:pkey>/', views.deleteMenuItem, name="delete-item")


]