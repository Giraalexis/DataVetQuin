from django.shortcuts import render,redirect
from .forms import FormVacuna
from .models import Vacuna
# Create your views here.
def registrarVacuna(request,mascota,nombre):
    form = FormVacuna()
    if request.method == "POST":
        form = FormVacuna(data=request.POST)
        if form.is_valid():
            form_data = form.cleaned_data
            #registrar la Vacuna
            Vacuna.objects.create(idMascota=mascota,
                                  hora=form_data.get("hora"),
                                  fecha=form_data.get("fecha"),
                                  laboratorio=form_data.get("laboratorio"))
            #redireccionar a la lista de vacunas
            return redirect('/listarVacuna/'+str(mascota)+'/'+nombre)

    return render(request,'registrarVacuna.html',{'form':form})


def listarVacuna(request,masc_id,nombre):
    #datos para ser mostrados
    idMascota = masc_id
    nombreMascota = nombre
    #buscamos las vacunas de la mascota:
    vacuna = Vacuna.objects.filter(idMascota = masc_id)

    return render(request,'listarVacuna.html',{'vacuna':vacuna,'idMascota':idMascota,'nombreMascota':nombreMascota})

