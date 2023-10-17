from django.shortcuts import render
from django.http import JsonResponse

# Rest Framework imports
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import viewsets, status

import json

# Serializer imports
from .serializers import UserSerializer, UserProfileSerializer, TagSerializer, TopicSerializer, NoteSerializer, CodeExampleSerializer, WordDefinitionSerializer, UserNoteSerializer

# Model imports
from .models import User, UserProfile, Tag, Topic, Note, CodeExample, WordDefinition, UserNote

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