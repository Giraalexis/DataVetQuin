from django import forms
from .models import TipoMascota
from .models import RazaMascota
from django.contrib.auth.models import User

class MascotaForm(forms.Form):

    imagen = forms.ImageField(label="Imagen de mascota",required=True)

    nombre = forms.CharField(label="Ingrese nombre mascota", required=True,
    widget=forms.TextInput(attrs={'class':'form-control mb-3','placeholder':'Ingrese Nombre Mascota'}))

    fecha_nac = forms.DateField(label="Ingrese fecha nacimiento", required=False,
    widget=forms.DateInput(attrs={'type':'date','class':'form-control mb-3'}))

    tipoMascota = forms.ModelChoiceField(queryset=TipoMascota.objects.all(),required=True,
    widget=forms.Select(attrs={'class':'form-control'}))

    razaMascota = forms.ModelChoiceField(queryset=RazaMascota.objects.all(),required=True,
    widget=forms.Select(attrs={'class':'form-control'}))

    dueño = forms.ModelChoiceField(queryset=User.objects.all(),required=False,
    widget=forms.Select(attrs={'class':'form-control'}))