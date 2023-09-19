from django.urls import path

from .views import posts, users, post, create_post

urlpatterns = [
    path("posts/", posts, name="posts"),
    path("posts/create/", create_post, name="create_post"),
    path("posts/<int:pk>/", post, name="post_detail"),
    path("users/", users, name="users"),
]
