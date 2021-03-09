from django.urls import path, include
from . import views
from rest_framework import routers

router = routers.DefaultRouter()
router.register(r'item', views.ItemViewSet)
router.register(r'employee', views.EmployeeViewSet)

urlpatterns = [
    path('', include(router.urls)),
]