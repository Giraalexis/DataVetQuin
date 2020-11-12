from django.db import models

# Create your models here.
class Atencion(models.Model):
    
    def __str__(self):
        return self.nombre