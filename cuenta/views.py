from django.shortcuts import render, redirect
from django.contrib.auth import logout as do_logout
# Create your views here.

def welcome(request):
    #Si el login fue exitoso
    if request.user.is_authentificated:
        #Si es administrador:
        if request.user.username == "admin":
            return render(request,'/admin/')
        #Si no es admin:      
        return render(request,'index_pro.html')
    #Si login falla:   
    return redirect('/login')


def register(request):

    return render(request,'')


def logout(request):
    #finalizamos al sesion
    do_logout(request)
    #redireccionamos al inicio
    return redirect('/')


def login(request):

    return render(request,'login.html')