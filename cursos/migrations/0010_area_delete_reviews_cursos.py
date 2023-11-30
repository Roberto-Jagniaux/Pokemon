# Generated by Django 4.1 on 2023-11-26 22:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cursos', '0009_alter_cursos_image'),
    ]

    operations = [
        migrations.CreateModel(
            name='Area',
            fields=[
                ('idA', models.AutoField(primary_key=True, serialize=False, verbose_name='ID Area')),
                ('nomA', models.CharField(max_length=30, verbose_name='Nombre del Área')),
                ('directorD', models.CharField(max_length=150, verbose_name='Director del Área')),
                ('descripcion', models.TextField(blank=True, null=True, verbose_name='Descripción del Área')),
                ('telefono_contacto', models.CharField(blank=True, max_length=20, null=True, verbose_name='Teléfono de Contacto')),
                ('correo_contacto', models.EmailField(blank=True, max_length=254, null=True, verbose_name='Correo de Contacto')),
                ('cursos', models.ManyToManyField(to='cursos.cursos', verbose_name='Cursos en el Área')),
            ],
            options={
                'verbose_name': 'Área',
                'verbose_name_plural': 'Áreas',
            },
        ),
        migrations.DeleteModel(
            name='Reviews_Cursos',
        ),
    ]