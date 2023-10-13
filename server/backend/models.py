from django.db import models
# from django.urls import reverse

from datetime import date

# Create your models here.
class User(models.Model):
    user_id = models.AutoField(primary_key=True)
    username = models.CharField(max_length=50)
    email = models.CharField(max_length=50)
    password = models.CharField(max_length=50)

    def __str__(self):
        return self.username
    
# Topic Model
class Topic(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()

# Tag Model
class Tag(models.Model):
    name = models.CharField(max_length=50)
    description = models.TextField(blank=True, null=True)

# Note Model (Updated)
class Note(models.Model):
    topic = models.ForeignKey(Topic, on_delete=models.CASCADE)
    content = models.TextField()
    tags = models.ManyToManyField(Tag)

# Code Example Model (Updated)
class CodeExample(models.Model):
    topic = models.ForeignKey(Topic, on_delete=models.CASCADE)
    title = models.CharField(max_length=255)
    description = models.TextField()
    code = models.TextField()
    tags = models.ManyToManyField(Tag)

# Word/Definition Model
class WordDefinition(models.Model):
    word = models.CharField(max_length=255)
    definition = models.TextField()
    notes = models.ManyToManyField(Note)

# User Notes and Highlights
class UserNote(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    note = models.ForeignKey(Note, on_delete=models.CASCADE)
    content = models.TextField()

# User Profile and Progress Tracking
class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    completed_notes = models.ManyToManyField(Note)