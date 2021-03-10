from django.db import models
import uuid

class Item(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
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
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.TextField()
    role = models.TextField()

    def __str__(self):
        return self.name

class Table(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    number = models.IntegerField()
    state = models.TextField()

    def __str__(self):
        return str(self.number)