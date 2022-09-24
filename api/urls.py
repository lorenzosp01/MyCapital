from django.urls import path
from django.urls import include

from .views import ListaMovimenti, ListaCategorie, CategorieTest, MovimentiTest

urlpatterns = [
    path('test/movimenti', MovimentiTest.as_view()),
    path('test/categorie', CategorieTest.as_view()),
    path('categorie', ListaCategorie.as_view()),
    path('movimenti', ListaMovimenti.as_view())
]
