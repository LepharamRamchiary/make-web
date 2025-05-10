from django.shortcuts import render
from .models import Feed

# Create your views here.
def get_started(request):
    return render(request, 'get_started/get_started.html')

def feed(request):
    feeds = Feed.objects.all()
    return render(request, 'get_started/feed.html', {'feeds': feeds})