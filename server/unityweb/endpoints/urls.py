from django.urls import path

from .views import posts, users, post, create_post, comments, create_comment, delete_comment

urlpatterns = [
    path("posts/", posts, name="posts"),
    path("posts/create/", create_post, name="create_post"),
    path("posts/<int:pk>/", post, name="post_detail"),
    path("comments/", comments, name="comments"),
    path("comments/create/", create_comment, name="create_comment"),
    path("comments/<int:pk>/", delete_comment, name="delete_comment"),
    path("users/", users, name="users"),
]
