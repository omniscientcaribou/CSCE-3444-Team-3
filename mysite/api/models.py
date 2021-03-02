from django.db import models

class Item(models.Model):
    name = models.TextField()
    description = models.TextField()
    group = models.TextField()

    def __str__(self):
        return self.name
