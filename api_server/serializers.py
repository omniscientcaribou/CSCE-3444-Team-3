from rest_framework import serializers
from .models import * #Item, Employee, Table, Task, Credential, Order, OrderContent, PriceCalculations


class ItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Item
        fields = "__all__"


class EmployeeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Employee
        fields = "__all__"


class TableSerializer(serializers.ModelSerializer):
    class Meta:
        model = Table
        fields = "__all__"


class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = "__all__"


class CredentialSerializer(serializers.ModelSerializer):
    class Meta:
        model = Credential
        fields = "__all__"


class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = "__all__"


class OrderContentSerializer(serializers.ModelSerializer):
    class Meta:
        model = OrderContent
        fields = "__all__"

class PriceCalculationsSerializer(serializers.ModelSerializer):
    class Meta:
        model = PriceCalculations
        fields = "__all__"

class MealTimeSerializer(serializers.ModelSerializer):
    class Meta:
        model = MealTime
        fields = "__all__"
