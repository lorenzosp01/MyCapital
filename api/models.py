from django.db import models


class Categoria(models.Model):
    nome = models.CharField(max_length=50, null=False)
    descrizione = models.CharField(max_length=100)

    def __str__(self):
        return self.nome


class Movimento(models.Model):
    data = models.DateField(null=False)
    tipo = models.CharField(max_length=30, null=False)
    descrizione = models.CharField(max_length=100)
    costo = models.FloatField(null=False)
    categoria = models.ForeignKey(Categoria, on_delete=models.CASCADE)




