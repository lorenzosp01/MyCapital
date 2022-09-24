from rest_framework.generics import ListAPIView, CreateAPIView, ListCreateAPIView
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Movimento, Categoria
from .serializers import MovimentoSerializer, CategoriaSerializer
from django.shortcuts import get_object_or_404


class MovimentiTest(ListCreateAPIView):
    queryset = Movimento.objects.all()
    serializer_class = MovimentoSerializer


class CategorieTest(ListCreateAPIView):
    queryset = Categoria.objects.all()
    serializer_class = CategoriaSerializer


class ListaMovimenti(APIView):
    serializer_class = MovimentoSerializer

    def get(self, request, format=None):
        movimenti = [MovimentoSerializer(movimento).data for movimento in Movimento.objects.all()]
        return Response(movimenti)


class ListaCategorie(APIView):
    pass



