from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.contrib.auth.models import User
from .serializers import PostSerializer, CommentSerializer, LikeSerializer, UserSerializer
# Create your views here.

from .models import Post, Comment, Like


# Views for posts
@api_view(['GET'])
def posts(request):
    posts = Post.objects.all()
    serializer = PostSerializer(posts, many=True)
    return Response(serializer.data)



@api_view(['GET'])
def users(request):
    users = User.objects.all()
    serializer = UserSerializer(users, many=True)
    return Response(serializer.data)