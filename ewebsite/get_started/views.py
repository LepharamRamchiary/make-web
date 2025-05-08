from django.shortcuts import render

# Create your views here.
def get_started(request):
    return render(request, 'get_started/get_started.html')