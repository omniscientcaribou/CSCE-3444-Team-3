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

<<<<<<< HEAD
router = routers.DefaultRouter()
router.register(r'item', views.ItemViewSet)
router.register(r'employee', views.EmployeeViewSet)
=======
I = views.ItemViewSet()

router = routers.DefaultRouter()
router.register(r'item', views.ItemViewSet)
router.register(r'employee', views.EmployeeViewSet)
router.register(r'table', views.TableViewSet)
router.register(r'task', views.TaskViewSet)
router.register(r'credential', views.CredentialViewSet)
router.register(r'order', views.OrderViewSet)
router.register(r'ordercontent', views.OrderContentViewSet)
>>>>>>> cory-postgres-db


urlpatterns = [
    path('admin/', admin.site.urls),
<<<<<<< HEAD
    path('', include(router.urls)),
]
=======
    path('api/', include(router.urls)),
]
>>>>>>> cory-postgres-db
