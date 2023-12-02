# from rest_framework import serializers

# from .models import User, Topic, Tag, Note, CodeExample, WordDefinition, UserProfile, Category, Analogy

# class UserSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = User
#         fields = ['user_id', 'url', 'username', 'email', 'is_staff']

# class UserProfileSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = UserProfile
#         fields = ['user', 'completed_notes']

# class TagSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Tag
#         fields = ['tag_id', 'name', 'description']

# class CategorySerializer(serializers.ModelSerializer):
#     topics = serializers.SerializerMethodField()
#     class Meta:
#         model = Category
#         fields = '__all__'
#     def get_topics(self, obj):
#         topics = Topic.objects.filter(category_id=obj)
#         return TopicSerializer(topics, many=True).data

# class TopicSerializer(serializers.ModelSerializer):
#     notes = serializers.SerializerMethodField()
#     class Meta:
#         model = Topic
#         fields = '__all__'
#     def get_notes(self, obj):
#         notes = Note.objects.filter(topic_id=obj)
#         print('notes in serializer area', notes)
#         return NoteSerializer(notes, many=True).data

# class NoteSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Note
#         fields = ['note_id', 'topic', 'title', 'content', 'tags']

# class CodeExampleSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = CodeExample
#         fields = ['code_id', 'topic', 'title', 'description', 'code', 'tags']

# class WordDefinitionSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = WordDefinition
#         fields = ['word_id', 'word', 'definition', 'notes']

# class AnalogySerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Analogy
#         fields = ['analogy_id', 'topic', 'title', 'description', 'analogy', 'tags']


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
    class Meta:
        model = Subject
        fields = '__all__'

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