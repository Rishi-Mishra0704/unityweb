from django.db import models
from django.contrib.auth.models import User
# Create your models here.

# Post Model


class Post(models.Model):
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    content = models.TextField()
    timestamp = models.DateTimeField(auto_now_add=True)
    likes = models.ManyToManyField(
        User, related_name='liked_posts', blank=True)

    def __str__(self):
        return f"Post by {self.author.username} at {self.timestamp}"


# Comment Model
class Comment(models.Model):
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    post = models.ForeignKey(
        Post, on_delete=models.CASCADE, related_name='comments')
    content = models.TextField()
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Comment by {self.author.username} on {self.post}"


# Like Model
class Like(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    post = models.ForeignKey(
        Post, on_delete=models.CASCADE, related_name='post_likes')
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Like by {self.user.username} on {self.post}"
