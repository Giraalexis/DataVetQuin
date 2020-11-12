from django import forms
from mascota.models import Mascota


class FormVacuna(forms.Form):

    hora = forms.TimeField(label="Hora vacuna",required=True,
    widget=forms.TimeInput(attrs={'type':'time','class':'form-control mb-3'}))

    fecha = forms.DateField(label="Fecha vacuna",required=True,
    widget=forms.DateInput(attrs={'type':'date','class':'form-control mb-3'}))

    laboratorio = forms.CharField(label="nombre laboratorio",required=True,
    widget=forms.TextInput(attrs={'class':'form-control mb-3'}))
