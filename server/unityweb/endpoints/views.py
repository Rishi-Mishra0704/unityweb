from rest_framework.response import Response
from rest_framework import status
from django.http import HttpResponse
from rest_framework.decorators import api_view
from django.contrib.auth.models import User
from .serializers import PostSerializer, CommentSerializer, LikeSerializer, UserSerializer
# Create your views here.

from .models import Post, Comment, Like


# Views for posts
@api_view(['GET'])
def posts(request):
    response = HttpResponse()
    response["Access-Control-Allow-Origin"] = "*"
    posts = Post.objects.all()
    serializer = PostSerializer(posts, many=True)
    return Response(serializer.data)


@api_view(['POST'])
def create_post(request):
    response = HttpResponse()
    response["Access-Control-Allow-Origin"] = "*"
    serializer = PostSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
    else:
        print(serializer.errors)
    return Response(serializer.data)


@api_view(['GET', 'PUT', 'DELETE'])
def post(request, pk):
    response = HttpResponse()
    response["Access-Control-Allow-Origin"] = "*"
    try:
        post = Post.objects.get(id=pk)
    except Post.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = PostSerializer(post, many=False)
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = PostSerializer(post, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'DELETE':
        post.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


# Views for comments
@api_view(['GET'])
def comments(request):
    response = HttpResponse()
    response["Access-Control-Allow-Origin"] = "*"
    comments = Comment.objects.all().order_by('-timestamp')
    serializer = CommentSerializer(comments, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def create_comment(request):
    response = HttpResponse()
    response["Access-Control-Allow-Origin"] = "*"
    serializer = CommentSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
    else:
        print(serializer.errors)
    return Response(serializer.data)


@api_view(['DELETE'])
def delete_comment(request, pk):
    response = HttpResponse()
    response["Access-Control-Allow-Origin"] = "*"
    try:
        comment = Comment.objects.get(id=pk)
    except Comment.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    comment.delete()
    return Response(status=status.HTTP_204_NO_CONTENT)




# Views for likes
@api_view(['GET'])
def likes(request):
    response = HttpResponse()
    response["Access-Control-Allow-Origin"] = "*"
    likes = Like.objects.all()
    serializer = LikeSerializer(likes, many=True)
    return Response(serializer.data)



@api_view(['POST'])
def create_like(request):
    response = HttpResponse()
    response["Access-Control-Allow-Origin"] = "*"
    serializer = LikeSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
    else:
        print(serializer.errors)
    return Response(serializer.data)


# Views for users
@api_view(['GET'])
def users(request):
    response = HttpResponse()
    response["Access-Control-Allow-Origin"] = "*"
    users = User.objects.all()
    serializer = UserSerializer(users, many=True)
    return Response(serializer.data)
