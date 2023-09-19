from django.urls import path

from .views import posts, users

urlpatterns = [
    path("posts/", posts, name="posts"),
    path("users/", users, name="users"),
]