from django.shortcuts import render


def index(request):
    return render(request, 'index.html')


def daemon(request):
    return render(request, 'index.html')
