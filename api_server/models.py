from django.db import models
import uuid
from django.contrib.postgres.fields import ArrayField
from django.http import HttpResponse

class Item(models.Model):
    id = models.IntegerField(primary_key=True, auto_created=True)
    name = models.TextField()
    description = models.TextField()
    group = models.TextField()
    calories = models.TextField()
    fat = models.TextField()
    protein = models.TextField()
    carbs = models.TextField()
    allergies = models.TextField()

    def __str__(self):
        return self.name

class Employee(models.Model):
    id = models.IntegerField(primary_key=True, auto_created=True)
    name = models.TextField()
    role = models.TextField()

    def __str__(self):
        return self.name

class Table(models.Model):
    id = models.IntegerField(primary_key=True, auto_created=True)
    number = models.IntegerField()
    state = models.BooleanField()

    def __str__(self):
        return self.number

class Task(models.Model):
    id = models.IntegerField(primary_key=True, auto_created=True)
    role = models.TextField(default='')

    # TABLE TASKS
    table_number = models.IntegerField(default=-1)  
    refill_request = models.BooleanField(default=False)
    drink_selections = models.TextField(blank=True) # Custom wrapper in future to turn to JSON probably  

    # MISC. TASKS
    call_waitstaff = models.BooleanField(default=False)
    call_manager = models.BooleanField(default=False)


    def __str__(self):
        return(self.role)

class Credential(models.Model):
    id = models.IntegerField(primary_key=True, auto_created=True)
    # role_choice = models.TextChoices('Table', 'Waitstaff', 'Kitchen', 'Manager')
    role_choice = models.TextField()
    enter_password = models.TextField()
    password = 'team3'

    def __str__(self):
        return self.role_choice

class Order(models.Model):
    id = models.IntegerField(primary_key=True, auto_created=True)
    table_number = models.IntegerField()
    state = models.TextField()
    # time = models.DateTimeField(auto_now=True)
    # items = models.ArrayField()
    quantity = models.IntegerField()

    



