from django.urls import path
from .views import LandingPage

urlpatterns = [
    path('', LandingPage.as_view()),
    path('categorie', LandingPage.as_view()),
    path('home', LandingPage.as_view()),
    path('movimenti', LandingPage.as_view()),
]
