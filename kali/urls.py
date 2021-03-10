from django.urls import path
from . import views

urlpatterns = [
    path('api/kali/', views.BookListCreate.as_view())
]
