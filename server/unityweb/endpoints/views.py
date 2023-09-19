from rest_framework.response import Response
from rest_framework.decorators import api_view
from .serializers import PostSerializer
# Create your views here.

from .models import Post, Comment, Like


@api_view(['GET'])
def posts(request):
    posts = Post.objects.all()
    serializer = PostSerializer(posts, many=True)
    return Response(serializer.data)