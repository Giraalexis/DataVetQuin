# Generated by Django 3.1.2 on 2020-11-11 02:31

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('mascota', '0002_mascota_imagen'),
    ]

    operations = [
        migrations.RenameField(
            model_name='mascota',
            old_name='tipoRaza',
            new_name='razaMascota',
        ),
    ]
