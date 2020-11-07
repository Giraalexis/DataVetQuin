from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('home_prof/', views.home_pro, name="home_prof"),

]