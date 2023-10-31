from django.db import models
# from django.urls import reverse

from datetime import date

# Create your models here.
class User(models.Model):
    user_id = models.AutoField(primary_key=True)
    username = models.CharField(max_length=50)
    email = models.CharField(max_length=50)
    password = models.CharField(max_length=50)
    is_staff = models.BooleanField(default=False)

    def __str__(self):
        return self.username
    
class Category(models.Model):
    category_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=50)
    description = models.TextField(blank=True, null=True)

    def __str__(self):
        return self.name
    
# Topic Model
class Topic(models.Model):
    topic_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=255)
    description = models.TextField(blank=True, null=True)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    url = models.CharField(max_length=255, blank=True, null=True)

    def __str__(self):
        return self.category.name + " - " + self.name

# Tag Model
class Tag(models.Model):
    tag_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=50)
    description = models.TextField(blank=True, null=True)

# Note Model (Updated)
class Note(models.Model):
    note_id = models.AutoField(primary_key=True)
    topic = models.ForeignKey(Topic, on_delete=models.CASCADE)
    content = models.TextField()
    tags = models.ManyToManyField(Tag)

# Code Example Model (Updated)
class CodeExample(models.Model):
    code_id = models.AutoField(primary_key=True)
    topic = models.ForeignKey(Topic, on_delete=models.CASCADE)
    title = models.CharField(max_length=255)
    description = models.TextField()
    code = models.TextField()
    tags = models.ManyToManyField(Tag)

# Word/Definition Model
class WordDefinition(models.Model):
    word_id = models.AutoField(primary_key=True)
    word = models.CharField(max_length=255)
    definition = models.TextField()
    notes = models.ManyToManyField(Note)

# User Profile and Progress Tracking
class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    completed_notes = models.ManyToManyField(Note)

class Analogy(models.Model):
    analogy_id = models.AutoField(primary_key=True)
    topic = models.ForeignKey(Topic, on_delete=models.CASCADE)
    title = models.CharField(max_length=255)
    description = models.TextField()

    def __str__(self):
        return self.title + " - " + self.topic.name