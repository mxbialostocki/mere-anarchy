from django.db import models
from django.conf import settings


# Create your models here.
class Record(models.Model):
    title = models.CharField(
        max_length=150
    )
    author = models.CharField(
        max_length=150
    )
    created_at = models.DateTimeField(
        auto_now_add=True
    )
    posted_by = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        null=True,
        on_delete=models.CASCADE
    )


class Read(models.Model):
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE
    )
    record = models.ForeignKey(
        'records.Record',
        related_name='reads',
        on_delete=models.CASCADE
    )
