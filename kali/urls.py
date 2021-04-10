from django.urls import path
from . import views

urlpatterns = [
    path('api/kali/', views.RecordListCreate.as_view())
]
