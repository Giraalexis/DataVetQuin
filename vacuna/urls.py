from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('registrarVacuna/<int:mascota>/<nombre>', views.registrarVacuna, name="registrarVacuna"),
    path('listarVacuna/<int:masc_id>/<nombre>',views.listarVacuna, name="listarVacuna")

]