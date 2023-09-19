from django.db import models
from django.contrib.auth.models import User
# Create your models here.

# Post Model


class Post(models.Model):
    name = models.CharField(max_length=100, null=True, blank=True)
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    content = models.TextField()
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Post by {self.author.username}"


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
