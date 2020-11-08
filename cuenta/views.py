from django.shortcuts import render, redirect
from django.contrib.auth import logout as do_logout
from django.contrib.auth import login as do_login
from django.contrib.auth import authenticate
from django.contrib.auth.forms import AuthenticationForm
from django.contrib.auth.forms import UserCreationForm
from .forms import LoginForm
from .forms import RegisterForm
# Create your views here.

def welcome(request):
    #Si el login fue exitoso
    if request.user.is_authentificated:
        #Si es administrador:
        if request.user.username == "admin":
            return render(request,'/admin/')
        #Si no es admin:      
        return render(request,'home_pro.html')
    #Si login falla:   
    return redirect('/login')


def register(request):
    #creamos formulario:
    form = RegisterForm()
    if request.method == "POST":
        #añadir los datos recibidos al formulario
        form = RegisterForm(data=request.POST)
        #si el formulario es valido
        if form.is_valid():
            #crear nueva cuenta:
            user = form.save()
            username = form.cleaned_data['username']
            email = form.cleaned_data['email']
            password1 = form.cleaned_data['password1']
            password2 = form.cleaned_data['password2']
            #si se crea correctamente:
            if user is not None:
                #se realiza autologin
                do_login(request,user)
                return redirect('/')
    return render(request,'register.html',{'form':form})


def logout(request):
    #finalizamos al sesion
    do_logout(request)
    #redireccionamos al inicio
    return redirect('/')


def login(request):
    #crear formulario
    form = LoginForm()
    if request.method == "POST":
        #añadir datos del form
        form = LoginForm(data=request.POST)
        #si el formulario es valido:
        if form.is_valid():
            #tomamos los datos de usuario
            username = form.cleaned_data['username']
            password = form.cleaned_data['password']
            #verificar credencial existente:
            user = authenticate(username=username, password=password)
            #si el usuario existe:
            if user is not None:
                #login manual:
                do_login(request,user)
                #redireccionamos:
                if username == "admin":
                    return redirect('/admin')
                return redirect('home_pro.html')
            
    return render(request,'login.html',{'form': form})