from django.urls import path, include
from . import views

urlpatterns = [
   path('', views.get_started, name='get_started'),
   path('feed/', views.feed, name='feed'),
]
