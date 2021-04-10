from rest_framework import serializers
from .models import Record

"""
Serilaization: Transforming an object into another data format.
Once it's transformed it can be sent through a Network.
A Django Model is a Python Class.
How do you render a Python Class to a browser?
With a REST Serializer.
It works the other way around too: Converts JSON to a objects in Python.

This means you can:
 - display the Django objects in a browser by converting them to JSON
 - make CRUD requests with a JSON payload to an API
"""


class RecordSerializer(serializers.ModelSerializer):
    class Meta:
        model = Record
        fields = ('id', 'title', 'author')
