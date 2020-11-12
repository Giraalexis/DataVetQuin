from django.db import models

# Create your models here.
class Vacuna(models.Model):
    idMascota = models.IntegerField(verbose_name="Id Mascota")
    hora = models.TimeField(verbose_name="Hora vacuna")
    fecha = models.DateField(verbose_name="Fecha vacuna")
    laboratorio = models.CharField(verbose_name="nombre laboratorio", max_length=50)

    def __str__(self):
        return self.nombre