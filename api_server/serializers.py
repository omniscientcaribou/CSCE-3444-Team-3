from rest_framework import serializers
from .models import * #Item, Employee, Table, Task, Credential, Order, OrderContent, PriceCalculations

"""
    A lot of this is boiler plate code I had to make. But the Serializers are an important part of the Django
    environment and are required for everything to work. Just know, that for each Class you make (Model) you 
    will have to make a Serializer for that class.
"""

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

class CustomerFeedBackSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomerFeedBack
        fields = "__all__"
