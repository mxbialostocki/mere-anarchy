from django.shortcuts import render
from .models import Record
from .serializers import RecordSerializer
from rest_framework import generics

# Create your views here.


class RecordListCreate(generics.ListCreateAPIView):
    queryset = Record.objects.all()
    serializer_class = RecordSerializer
