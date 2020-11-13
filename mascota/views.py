from django.shortcuts import render
from .forms import MascotaForm
from .models import Mascota
from .forms import BuscarNombreMascota
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
    form2 = BuscarNombreMascota()
    #buscar Mascota
    if request.method == "POST": 
        form2 = BuscarNombreMascota(data=request.POST)
        nombreBuscar = request.POST.get("nombreBuscar")
        mascota = Mascota.objects.filter(nombre = nombreBuscar)
        print(nombreBuscar)
        if form2.is_valid():     
            return render(request,'listarMascota.html',{'mascota':mascota,'form2':form2})
    else:
        mascota = Mascota.objects.all()     
        return render(request,'listarMascota.html',{'mascota':mascota,'form2':form2})

