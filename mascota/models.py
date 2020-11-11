from django.db import models
from ckeditor.fields import RichTextField 

# Create your models here.
class Mascota(models.Model):
    imagen = models.ImageField(verbose_name="imagen mascota", upload_to='mascotas',null=True)
    nombre = models.CharField(verbose_name="nombre mascota", max_length=50)
    fecha_nac = models.DateField(verbose_name="fecha nacimiento",null=True, default=None)
    tipoMascota = models.CharField(verbose_name="tipo mascota", max_length=50)
    razaMascota = models.CharField(verbose_name="raza mascota", max_length=50)
    dueño = models.CharField(verbose_name="rut dueño", max_length=50)

    def __str__(self):
        return self.nombre

class TipoMascota(models.Model):
    descripcion = models.CharField(verbose_name="descripcion del tipo", max_length=50)

    def __str__(self):
        return self.descripcion

class RazaMascota (models.Model):
    descripcion = models.CharField(verbose_name="descripcion raza", max_length=50)

    def __str__(self):
        return self.descripcion