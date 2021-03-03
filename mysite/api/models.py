from django.db import models

class Item(models.Model):
    # id = models.TextField()
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

