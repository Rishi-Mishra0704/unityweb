from django.urls import path
from django.contrib.auth import views as auth_views
from .forms import LoginForm
from . import views

urlpatterns = [
    path("", views.signup, name="signup"),
    path("login/", auth_views.LoginView.as_view(template_name="register/login.html",
         authentication_form=LoginForm), name="login"),
]
