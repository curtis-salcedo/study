# from django.shortcuts import render
# from django.http import JsonResponse

# # Rest Framework imports
# from rest_framework.decorators import api_view
# from rest_framework.response import Response
# from rest_framework import viewsets, status, serializers

# import json

# # Serializer imports
# from .serializers import UserSerializer, UserProfileSerializer, TagSerializer, TopicSerializer, NoteSerializer, CodeExampleSerializer, WordDefinitionSerializer, CategorySerializer, AnalogySerializer

# # Model imports
# from .models import User, UserProfile, Tag, Topic, Note, CodeExample, WordDefinition, Category, Analogy

# class UserViewSet(viewsets.ModelViewSet):
#   serializer_class = UserSerializer
#   queryset = User.objects.all()

# class UserProfileViewSet(viewsets.ModelViewSet):
#   serializer_class = UserProfileSerializer
#   queryset = UserProfile.objects.all()

# class TopicViewSet(viewsets.ModelViewSet):
#   serializer_class = TopicSerializer
#   queryset = Topic.objects.all()

# class NoteViewSet(viewsets.ModelViewSet):
#   serializer_class = NoteSerializer
#   queryset = Note.objects.all()

# class CodeExampleViewSet(viewsets.ModelViewSet):
#   serializer_class = CodeExampleSerializer
#   queryset = CodeExample.objects.all()

# class WordDefinitionViewSet(viewsets.ModelViewSet):
#   serializer_class = WordDefinitionSerializer
#   queryset = WordDefinition.objects.all()

# class TagsViewSet(viewsets.ModelViewSet):
#   serializer_class = TagSerializer
#   queryset = Tag.objects.all()

# class CategoryViewSet(viewsets.ModelViewSet):
#   serializer_class = CategorySerializer
#   queryset = Category.objects.all()

# class AnalogyViewSet(viewsets.ModelViewSet):
#   serializer_class = AnalogySerializer
#   queryset = Analogy.objects.all()

# @api_view(['POST'])
# def add_categories(request):
#   print(request.data)
#   serializer = CategorySerializer(data=request.data)
#   if serializer.is_valid():
#     serializer.save()
#   return Response(serializer.data)

# @api_view(['POST'])
# def add_topics(request):
#     print(request.data)
#     category = Category.objects.get(category_id=request.data['category_id'])
#     new_topic = Topic.objects.create(name=request.data['name'], description=request.data['description'], category=category, url=request.data  ['url'])
#     new_topic.save()
#     return Response(TopicSerializer(new_topic).data)

# @api_view(['POST'])
# def add_tags(request):
#   print(request.data)
#   serializer = TagSerializer(data=request.data)
#   if serializer.is_valid():
#     serializer.save()
#   return Response(serializer.data)

# @api_view(['POST'])
# def add_notes(request):
#   print(request.data)
#   topic = Topic.objects.get(topic_id=request.data['topic'])
#   new_note = Note.objects.create(topic=topic, content=request.data['content'])
#   new_note.save()
#   return Response(NoteSerializer(new_note).data)

# @api_view(['POST'])
# def add_code_examples(request):
#   print(request.data)
#   serializer = CodeExampleSerializer(data=request.data)
#   if serializer.is_valid():
#     serializer.save()
#   return Response(serializer.data)

# @api_view(['POST'])
# def add_word_definitions(request):
#   print(request.data)
#   serializer = WordDefinitionSerializer(data=request.data)
#   if serializer.is_valid():
#     serializer.save()
#   return Response(serializer.data)

# @api_view(['POST'])
# def add_analogies(request):
#   print(request.data)
#   serializer = AnalogySerializer(data=request.data)
#   if serializer.is_valid():
#     serializer.save()
#   return Response(serializer.data)


import csv
from rest_framework import viewsets, status, serializers
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.http import JsonResponse

from .serializers import (
    # UserSerializer,
    UserProfileSerializer,
    TagSerializer,
    SubjectSerializer,
    CategorySerializer,
    TopicSerializer,
    ContentSerializer,
    NoteSerializer,
    DefinitionSerializer,
    ReferenceSerializer,
    ExampleSerializer,
)

from .models import (
    # User,
    UserProfile,
    Tag,
    Subject,
    Category,
    Topic,
    Content,
    Note,
    Definition,
    Reference,
    Example,
)

# class UserViewSet(viewsets.ModelViewSet):
#     serializer_class = UserSerializer
#     queryset = User.objects.all()

class UserProfileViewSet(viewsets.ModelViewSet):
    serializer_class = UserProfileSerializer
    queryset = UserProfile.objects.all()

class TagsViewSet(viewsets.ModelViewSet):
    serializer_class = TagSerializer
    queryset = Tag.objects.all()

class SubjectViewSet(viewsets.ModelViewSet):
    serializer_class = SubjectSerializer
    queryset = Subject.objects.all()
    
class CategoryViewSet(viewsets.ModelViewSet):
    serializer_class = CategorySerializer
    queryset = Category.objects.all()

class TopicViewSet(viewsets.ModelViewSet):
    serializer_class = TopicSerializer
    queryset = Topic.objects.all()

class ContentViewSet(viewsets.ModelViewSet):
    serializer_class = ContentSerializer
    queryset = Content.objects.all()

class NoteViewSet(viewsets.ModelViewSet):
    serializer_class = NoteSerializer
    queryset = Note.objects.all()

class DefinitionViewSet(viewsets.ModelViewSet):
    serializer_class = DefinitionSerializer
    queryset = Definition.objects.all()
    
class ReferenceViewSet(viewsets.ModelViewSet):
    serializer_class = ReferenceSerializer
    queryset = Reference.objects.all()

class ExampleViewSet(viewsets.ModelViewSet):
    serializer_class = ExampleSerializer
    queryset = Example.objects.all()

@api_view(['POST'])
def add_categories(request):
    serializer = CategorySerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'POST'])
def content_view(request):
    if request.method == 'GET':
        contents = Content.objects.all()
        serializer = ContentSerializer(contents, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = ContentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
@api_view(['POST'])
def add_topics(request):
    print(request.data)
    category = Category.objects.get(category_id=request.data['category_id'])
    print('category', category)
    new_topic = Topic.objects.create(name=request.data['name'], description=request.data['description'], category=category, url=request.data  ['url'])
    new_topic.save()
    return Response(TopicSerializer(new_topic).data)

# @api_view(['POST'])
# def add_topics(request):
#     # Remove category_id from data to replace with correct category object
#     category_id = request.data.pop('category_id')
#     print('request.data', request.data)
#     try:
#         category = Category.objects.get(category_id=category_id)
#         print('category found', category)
#     except Category.DoesNotExist:
#         return Response({"error": "Category does not exist"}, status=status.HTTP_404_NOT_FOUND)
#     new_topic = Topic.objects.create(category=category, **request.data)
#     if new_topic is None:
#         return Response({"error": "Topic could not be created"}, status=status.HTTP_400_BAD_REQUEST)
#     if new_topic is not None:
#         new_topic.save()
#         return Response(new_topic, status=status.HTTP_201_CREATED)
#     print('serializer', serializer)
#     serializer = TopicSerializer(new_topic)
#     if serializer.is_valid():
#         # Assign category to the serializer category field correctly
#         return Response(serializer.data, status=status.HTTP_201_CREATED)
#     return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# @api_view(['POST'])
# def add_topics(request):
#     serializer = TopicSerializer(data=request.data)
#     if serializer.is_valid():
#         serializer.save()
#         return Response(serializer.data)
#     return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def add_tags(request):
    serializer = TagSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def add_notes(request):
    serializer = NoteSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def add_examples(request):
    serializer = ExampleSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def add_definitions(request):
    serializer = DefinitionSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def import_data(request):
    if request.method == 'POST' and request.FILES.get('csv_file'):
        # Define the file being uploaded
        csv_file = request.FILES['csv_file']

        # Assuming the CSV file contains a header row
        decoded_file = csv_file.read().decode('utf-8').splitlines()
        data = csv.reader(decoded_file, delimiter=',')

        # Skip the header row
        next(data, None)

        for row in data:
            # Create a new definition object
            # Each array will contain, from the header of the files, the following:
            # 0: sub_category
                sub_category = row[0]
            # 1: word
                word = row[1]
            # 2: definition
                definition = row[2]
            # 3: notes
                notes = row[3]
            # 4: sources
                sources = row[4]

            # Check if the word already exists in the database
                existing_definition = Definition.objects.filter(word=word).first()

                if existing_definition:
                # If the word exists, check for changes in 'definition', 'notes', and 'sources'
                    if existing_definition.definition != definition or existing_definition.notes != notes or existing_definition.sources != sources:
                        # Update the fields with new values
                        print('existing notes', existing_definition.notes)
                        existing_definition.definition = definition
                        existing_definition.notes = notes
                        existing_definition.sources = sources
                        existing_definition.save()
                else:
                    # Create a new Definition object
                    new_definition = Definition.objects.create(
                        sub_category=sub_category,
                        word=word,
                        definition=definition,
                        notes=notes,
                        sources=sources
                    )

                    # Check if the definition was created successfully
                    if not new_definition:
                        return JsonResponse({'error': f'Definition for word "{word}" could not be created'})

        return JsonResponse({'message': 'CSV data processed successfully'})
    else:
        return JsonResponse({'error': 'No file or invalid request method'})