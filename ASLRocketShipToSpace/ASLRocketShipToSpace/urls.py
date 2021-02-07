"""
Definition of urls for ASLRocketShipToSpace.
"""

from datetime import datetime
from django.urls import path
from django.contrib import admin
from django.contrib.auth.views import LoginView, LogoutView
from app import forms, views


urlpatterns = [
    path('', views.home, name='home'),
    path('flashcardmemorygame/', views.flashcardmemorygame, name='flashcardmemorygame'),
    path('mcqgame/', views.mcqgame, name='mcqgame'),
    path('draganddropgame/', views.draganddropgame, name='draganddropgame'),
    path('journey/', views.journey, name='journey'),
]
