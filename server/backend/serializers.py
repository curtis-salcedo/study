from rest_framework import serializers

from .models import User, Topic, Tag, Note, CodeExample, WordDefinition, UserProfile, Category, Analogy

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['user_id', 'url', 'username', 'email', 'is_staff']

class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = ['user', 'completed_notes']

class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = ['tag_id', 'name', 'description']

class CategorySerializer(serializers.ModelSerializer):
    topics = serializers.SerializerMethodField()
    class Meta:
        model = Category
        fields = '__all__'
    def get_topics(self, obj):
        topics = Topic.objects.filter(category_id=obj)
        print('topic in serializer area', topics)
        return TopicSerializer(topics, many=True).data

class TopicSerializer(serializers.ModelSerializer):
    class Meta:
        model = Topic
        fields = ['topic_id', 'name', 'description', 'category_id', 'url']

class NoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Note
        fields = ['note_id', 'topic', 'content', 'tags']

class CodeExampleSerializer(serializers.ModelSerializer):
    class Meta:
        model = CodeExample
        fields = ['code_id', 'topic', 'title', 'description', 'code', 'tags']

class WordDefinitionSerializer(serializers.ModelSerializer):
    class Meta:
        model = WordDefinition
        fields = ['word_id', 'word', 'definition', 'notes']

class AnalogySerializer(serializers.ModelSerializer):
    class Meta:
        model = Analogy
        fields = ['analogy_id', 'topic', 'title', 'description', 'analogy', 'tags']