from django.db import models
import uuid
from django.contrib.postgres.fields import ArrayField
from django.http import HttpResponse


class Item(models.Model):
    name = models.TextField()
    description = models.TextField()
    group = models.TextField()
    calories = models.TextField()
    fat = models.TextField()
    protein = models.TextField()
    carbs = models.TextField()
    allergies = models.TextField()
    price = models.FloatField()
    url = models.TextField()

    def __str__(self):
        return self.name


class Employee(models.Model):
    name = models.TextField()
    role = models.TextField()

    def __str__(self):
        return self.name


class Table(models.Model):
    number = models.IntegerField()
    state = models.BooleanField()

    def __str__(self):
        return self.number


class Task(models.Model):
    role = models.TextField(default="")

    # TABLE TASKS
    table_number = models.IntegerField(default=-1)
    refill_request = models.BooleanField(default=False)
    drink_selections = models.TextField(
        blank=True
    )  # Custom wrapper in future to turn to JSON probably

    # MISC. TASKS
    call_waitstaff = models.BooleanField(default=False)
    call_manager = models.BooleanField(default=False)

    def __str__(self):
        return self.role


class Credential(models.Model):
    role_choice = models.TextField()
    enter_password = models.TextField()
    url = models.TextField()

    def __str__(self):
        return self.role_choice


class Order(models.Model):
    # id = models.IntegerField(primary_key=True)
    table_number = models.IntegerField()
    state = models.TextField()
    placed_at = models.DateTimeField(auto_now=True)


class OrderContent(models.Model):
    order = models.ForeignKey(Order, on_delete=models.CASCADE)
    table_number = models.IntegerField()
    placed_at = models.DateTimeField()
    state = models.TextField()
    item = models.ForeignKey(Item, on_delete=models.CASCADE)
    quantity = models.IntegerField()
    allergy_flag = models.BooleanField(default=False)
    comment = models.TextField()
