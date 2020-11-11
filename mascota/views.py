from django.shortcuts import render
from .forms import MascotaForm
from .models import Mascota
# Create your views here.

def registrarMascota(request):
    form = MascotaForm()
    if request.method == "POST":
        form = MascotaForm(request.POST, request.FILES)
        if form.is_valid():
            form_data = form.cleaned_data
            #registramos la mascota
            Mascota.objects.create(imagen=form_data.get("imagen"),
                                   nombre=form_data.get("nombre"),
                                   fecha_nac=form_data.get("fecha_nac"),
                                   tipoMascota=form_data.get("tipoMascota"),
                                   razaMascota=form_data.get("razaMascota"),
                                   dueño=form_data.get("dueño"))
            #limpiamos campos
            form = MascotaForm()

    return render(request,'registrarMascota.html',{'form':form})

def listarMascota(request):
    mascota = Mascota.objects.all()
    return render(request,'listarMascota.html',{'mascota':mascota})

