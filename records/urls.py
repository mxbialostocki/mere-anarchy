from django.urls import path
from . import views

urlpatterns = [
    path('api/records/', views.RecordListCreate.as_view())
]
