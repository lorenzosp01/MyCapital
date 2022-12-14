# Generated by Django 3.0 on 2022-09-08 21:05

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Categoria',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nome', models.CharField(max_length=50)),
                ('descrizione', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='Movimento',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('data', models.DateTimeField()),
                ('tipo', models.CharField(max_length=30)),
                ('descrizione', models.CharField(max_length=100)),
                ('costo', models.FloatField()),
                ('categoria', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.Categoria')),
            ],
        ),
    ]
