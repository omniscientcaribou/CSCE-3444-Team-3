from django.db import models

class Appetizers(models.Model):
    name = models.TextField()
    description = models.TextField()
    calories = models.CharField(max_length=5)
    protein = models.CharField(max_length=5)
    carbs = models.CharField(max_length=5)
    fat = models.CharField(max_length=5)
    date = models.DateTimeField(auto_now_add=True)
