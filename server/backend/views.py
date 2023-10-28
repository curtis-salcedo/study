from django.shortcuts import render
from django.http import JsonResponse

# Rest Framework imports
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import viewsets, status

import json

# Serializer imports
from .serializers import UserSerializer, UserProfileSerializer, TagSerializer, TopicSerializer, NoteSerializer, CodeExampleSerializer, WordDefinitionSerializer, UserNoteSerializer, CategorySerializer

# Model imports
from .models import User, UserProfile, Tag, Topic, Note, CodeExample, WordDefinition, UserNote, Category

class UserViewSet(viewsets.ModelViewSet):
  serializer_class = UserSerializer
  queryset = User.objects.all()

class UserProfileViewSet(viewsets.ModelViewSet):
  serializer_class = UserProfileSerializer
  queryset = UserProfile.objects.all()

class TopicViewSet(viewsets.ModelViewSet):
  serializer_class = TopicSerializer
  queryset = Topic.objects.all()

class NoteViewSet(viewsets.ModelViewSet):
  serializer_class = NoteSerializer
  queryset = Note.objects.all()

class CodeExampleViewSet(viewsets.ModelViewSet):
  serializer_class = CodeExampleSerializer
  queryset = CodeExample.objects.all()

class WordDefinitionViewSet(viewsets.ModelViewSet):
  serializer_class = WordDefinitionSerializer
  queryset = WordDefinition.objects.all()

class TagsViewSet(viewsets.ModelViewSet):
  serializer_class = TagSerializer
  queryset = Tag.objects.all()

class UserNoteViewSet(viewsets.ModelViewSet):
  serializer_class = UserNoteSerializer
  queryset = UserNote.objects.all()

class CategoryViewSet(viewsets.ModelViewSet):
  serializer_class = CategorySerializer
  queryset = Category.objects.all()

class AnalogyViewSet(viewsets.ModelViewSet):
  serializer_class = UserNoteSerializer
  queryset = UserNote.objects.all()

@api_view(['POST'])
def add_category(request):
  print(request.data)
  serializer = CategorySerializer(data=request.data)
  if serializer.is_valid():
    serializer.save()
  return Response(serializer.data)

@api_view(['POST'])
def add_topic(request):
  print(request.data)
  serializer = TopicSerializer(data=request.data)
  if serializer.is_valid():
    serializer.save()
  return Response(serializer.data)

@api_view(['POST'])
def add_tag(request):
  print(request.data)
  serializer = TagSerializer(data=request.data)
  if serializer.is_valid():
    serializer.save()
  return Response(serializer.data)

@api_view(['POST'])
def add_note(request):
  print(request.data)
  serializer = NoteSerializer(data=request.data)
  if serializer.is_valid():
    serializer.save()
  return Response(serializer.data)

@api_view(['POST'])
def add_code_example(request):
  print(request.data)
  serializer = CodeExampleSerializer(data=request.data)
  if serializer.is_valid():
    serializer.save()
  return Response(serializer.data)

@api_view(['POST'])
def add_word_definition(request):
  print(request.data)
  serializer = WordDefinitionSerializer(data=request.data)
  if serializer.is_valid():
    serializer.save()
  return Response(serializer.data)

@api_view(['POST'])
def add_analogy(request):
  print(request.data)
  serializer = UserNoteSerializer(data=request.data)
  if serializer.is_valid():
    serializer.save()
  return Response(serializer.data)