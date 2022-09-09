from django.urls import path
from django.urls import include

from .views import ListaMovimenti, ListaCategorie

urlpatterns = [
    path('movimenti', ListaMovimenti.as_view()),
    path('categorie', ListaCategorie.as_view())
]
