from django.contrib import admin
from .models import Mascota
from .models import TipoMascota
from .models import RazaMascota
# Register your models here.
admin.site.register(Mascota)
admin.site.register(TipoMascota)
admin.site.register(RazaMascota)