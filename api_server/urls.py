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
from django.contrib.auth import views as auth_views
from rest_framework import routers
from . import views
from django.views.generic import TemplateView
from .views import *

router = routers.DefaultRouter()
router.register(r"item", views.ItemViewSet)
router.register(r"employee", views.EmployeeViewSet)
router.register(r"table", views.TableViewSet)
router.register(r"task", views.TaskViewSet)
router.register(r"credential", views.CredentialViewSet)
router.register(r"order", views.OrderViewSet)
router.register(r"ordercontent", views.OrderContentViewSet)
router.register(r"pricecalculations", views.PriceCalculationsViewSet)


urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/", include(router.urls)),
    path("api/kitchen_view/<str:pk>", kitchen_view, name="kitchen_view"),
    path("api/table_view/<str:pk>", table_bill, name="table_view"),
    path("api/table_total/<str:pk>", table_total, name="table_total"),
    path("api/pie_html/", test_html, name="pie_html"),
    path(
        "api/wait_order/<str:t_num>/<str:item_id>/<str:quantity>/<str:a_flag>/<str:s>",
        wait_order,
        name="wait_order",
    ),
    path("api/all_tables/", all_tables, name="all_tables"),
    path("api/get_table/", get_table, name="get_table"),
    path("api/release_table/<str:table_num>", release_table, name="release_table"),
    path("api/log_in/<str:user_name>/<str:password>", log_in, name="log_in"),
    path("api/tickets/", tickets, name="tickets"),
]
