from django.db import models
import uuid

class Item(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.TextField()
    description = models.TextField()
    group = models.TextField()

    def __str__(self):
        return self.name

class Employee(models.Model):
    name = models.TextField()
    role = models.TextField()

    def __str__(self):
        return self.name

class Table(models.Model):
    state = True

    def __str__(self):
        return self.name