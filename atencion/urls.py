from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('registrarAtencion/', views.registrarAtencion, name="registrarAtencion"),
    path('listarAtencion/',views.listarAtencion, name="listarAtencion")

]