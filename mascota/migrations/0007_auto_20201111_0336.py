# Generated by Django 3.1.2 on 2020-11-11 06:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mascota', '0006_auto_20201111_0048'),
    ]

    operations = [
        migrations.AlterField(
            model_name='mascota',
            name='imagen',
            field=models.ImageField(default=None, null=True, upload_to='mascotas', verbose_name='imagen mascota'),
        ),
    ]
