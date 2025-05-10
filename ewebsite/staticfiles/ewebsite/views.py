from django.http import HttpResponse
from django.shortcuts import render

def home(request):
    # return HttpResponse("Hello, world, Home")
    return render(request, 'website/home.html')


def responsive(request):
    return render(request, 'features/responsive.html')

def load(request):
    return render(request, 'features/load.html')

def design(request):
    return render(request, 'features/design.html')