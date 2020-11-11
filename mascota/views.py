from django.shortcuts import render
from .forms import MascotaForm
from .models import Mascota
# Create your views here.

def registrarMascota(request):
    form = MascotaForm()
    if request.method == "POST":
        form = MascotaForm(data=request.POST)
        if form.is_valid():
            form_data = form.cleaned_data
            #registramos la mascota
            Mascota.objects.create(nombre=form_data.get("nombre"),
                                   fecha_nac=form_data.get("fecha_nac"),
                                   tipoMascota=form_data.get("tipoMascota"),
                                   razaMascota=form_data.get("razaMascota"),
                                   imagen=form_data.get("imagen"),
                                   dueño=form_data.get("dueño"))
            #limpiamos campos
            form = MascotaForm()

    return render(request,'registrarMascota.html',{'form':form})

def listarMascota(request):
    
    return render(request,'listarMascota.html')