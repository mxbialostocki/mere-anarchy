from django.db import models


# Create your models here.
class Record(models.Model):
    title = models.CharField(max_length=150)
    author = models.CharField(max_length=150)
    created_at = models.DateTimeField(auto_now_add=True)
