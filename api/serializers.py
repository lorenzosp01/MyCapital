from rest_framework import serializers

from .models import Movimento, Categoria


class MovimentoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Movimento
        fields = '__all__'


class CategoriaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Categoria
        fields = '__all__'

