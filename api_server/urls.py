"""api_server URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from . import views

I = views.ItemViewSet()

router = routers.DefaultRouter()
router.register(r'item', views.ItemViewSet)
router.register(r'employee', views.EmployeeViewSet)
router.register(r'table', views.TableViewSet)
router.register(r'task', views.TaskViewSet)
router.register(r'credential', views.CredentialViewSet)
router.register(r'Order', views.OrderViewSet)
# router.register('test_foo', views.SendOrderView, basename='test_foo')



urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    # path('test/', views.test, name='test')
]
