from rest_framework.generics import ListAPIView, CreateAPIView, ListCreateAPIView

from .models import Movimento, Categoria
from .serializers import MovimentoSerializer, CategoriaSerializer
from django.shortcuts import get_object_or_404

class ListaMovimenti(ListCreateAPIView):
    queryset = Movimento.objects.all()
    serializer_class = MovimentoSerializer

    def perform_create(self, serializer):
        categoria = get_object_or_404(Categoria, id=self.request.data['categoria'])
        return serializer.save(categoria=categoria)


class ListaCategorie(ListCreateAPIView):
    queryset = Categoria.objects.all()
    serializer_class = CategoriaSerializer




