from rest_framework import serializers
from django.contrib.auth.models import User as AuthUser
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

class AuthUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = AuthUser
        fields = ['id', 'username', 'email', 'is_staff']

class UserProfileSerializer(serializers.ModelSerializer):
    user = AuthUserSerializer()
    class Meta:
        model = UserProfile
        fields = ['user', 'completed_notes']

class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = ['tag_id', 'name', 'description']

class SubjectSerializer(serializers.ModelSerializer):
    # Add a return field for the categories
    categories = serializers.SerializerMethodField()
    class Meta:
        model = Subject
        fields = ('created_at', 'updated_at', 'id', 'name', 'description', 'categories')
    def get_categories(self, obj):
        try:
            categories = Category.objects.filter(subject_id=obj)
            return CategorySerializer(categories, many=True).data
        except:
            return None

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'

class TopicSerializer(serializers.ModelSerializer):
    notes = serializers.SerializerMethodField()
    class Meta:
        model = Topic
        fields = '__all__'
    def get_notes(self, obj):
        try:
            notes = Note.objects.filter(topic_id=obj)
            print('notes in serializer area', notes)
            return NoteSerializer(notes, many=True).data
        except:
            return None

class ContentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Content
        fields = '__all__'

class NoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Note
        fields = '__all__'

class DefinitionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Definition
        fields = '__all__'

class ReferenceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Reference
        fields = '__all__'

class ExampleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Example
        fields = '__all__'