from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('registrarMascota/', views.registrarMascota, name="registrarMascota"),
    path('listarMascota/',views.listarMascota, name="listarMascota"),

]