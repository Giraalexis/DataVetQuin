from django import forms
from django.contrib.auth.forms import UserCreationForm

class LoginForm(forms.Form):
    username = forms.CharField(label="Ingrese Nombre",required = True, min_length=4,max_length=50,
    widget=forms.TextInput(attrs={'class':'form-control mb-3','placeholder':'Ingrese su nombre'}))

    password = forms.CharField(label="Ingrese Contraseña",required = True, min_length=4,max_length=50,
    widget=forms.TextInput(attrs={'class':'form-control mb-3','placeholder':'Ingrese su contraseña'}))

class RegisterForm(UserCreationForm):
    username = forms.CharField(label="Ingrese Nombre cuenta",required = True,
    widget=forms.TextInput(attrs={'class':'form-control mb-3','placeholder':'Ingrese Nombre'}))

    email = forms.EmailField(label="Ingrese su Correo",required = True,
    widget=forms.EmailInput(attrs={'class':'form-control mb-3','placeholder':'Ingrese su correo'}))

    password1 = forms.CharField(label="Ingrese Contraseña",required = True,
    widget=forms.TextInput(attrs={'class':'form-control mb-3','placeholder':'Ingrese contraseña'}))

    password2 = forms.CharField(label="Ingrese Contraseña",required = True,
    widget=forms.TextInput(attrs={'class':'form-control mb-3','placeholder':'Ingrese contraseña nuevamente'}))