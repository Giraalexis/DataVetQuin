from django.shortcuts import render

# Create your views here.
def registrarAtencion(request):

    return render(request,'registrarAtencion.html')

def listarAtencion(request):

    return render(request,'listarAtencion.html')