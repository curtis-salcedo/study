# from django.db import models
# # from django.urls import reverse

# from datetime import date

# # Create your models here.
# class User(models.Model):
#     user_id = models.AutoField(primary_key=True)
#     username = models.CharField(max_length=50)
#     email = models.CharField(max_length=50)
#     password = models.CharField(max_length=50)
#     is_staff = models.BooleanField(default=False)

#     def __str__(self):
#         return self.username
    
# class Category(models.Model):
#     category_id = models.AutoField(primary_key=True)
#     name = models.CharField(max_length=50)
#     description = models.TextField(blank=True, null=True)

#     def __str__(self):
#         return self.name
    
# # Topic Model
# class Topic(models.Model):
#     topic_id = models.AutoField(primary_key=True)
#     name = models.CharField(max_length=255)
#     description = models.TextField(blank=True, null=True)
#     category = models.ForeignKey(Category, on_delete=models.CASCADE)
#     url = models.CharField(max_length=255, blank=True, null=True)

#     def __str__(self):
#         return self.category.name + " - " + self.name

# # Tag Model
# class Tag(models.Model):
#     tag_id = models.AutoField(primary_key=True)
#     name = models.CharField(max_length=50)
#     description = models.TextField(blank=True, null=True)

# # Note Model (Updated)
# class Note(models.Model):
#     title = models.CharField(max_length=255)
#     note_id = models.AutoField(primary_key=True)
#     topic = models.ForeignKey(Topic, on_delete=models.CASCADE)
#     content = models.TextField()
#     tags = models.ManyToManyField(Tag, blank=True)

# # Code Example Model (Updated)
# class CodeExample(models.Model):
#     code_id = models.AutoField(primary_key=True)
#     topic = models.ForeignKey(Topic, on_delete=models.CASCADE)
#     title = models.CharField(max_length=255)
#     description = models.TextField()
#     code = models.TextField()
#     tags = models.ManyToManyField(Tag)

# # Word/Definition Model
# class WordDefinition(models.Model):
#     word_id = models.AutoField(primary_key=True)
#     word = models.CharField(max_length=255)
#     definition = models.TextField()
#     notes = models.ManyToManyField(Note)

# # User Profile and Progress Tracking
# class UserProfile(models.Model):
#     user = models.OneToOneField(User, on_delete=models.CASCADE)
#     completed_notes = models.ManyToManyField(Note)

# class Analogy(models.Model):
#     analogy_id = models.AutoField(primary_key=True)
#     topic = models.ForeignKey(Topic, on_delete=models.CASCADE)
#     title = models.CharField(max_length=255)
#     description = models.TextField()

#     def __str__(self):
#         return self.title + " - " + self.topic.name


from django.db import models
from django.contrib.auth.models import User as AuthUser

class UserProfile(models.Model):
    user = models.OneToOneField(AuthUser, on_delete=models.CASCADE)
    completed_notes = models.ManyToManyField('Note')

class Category(models.Model):
    category_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=50)
    description = models.TextField(blank=True, null=True)

    def __str__(self):
        return self.name

class StudyPlan(models.Model):
    plan_id = models.AutoField(primary_key=True)
    date = models.DateField()

class Topic(models.Model):
    topic_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=255, blank=True, null=True)
    type = models.CharField(max_length=50, blank=True, null=True)
    duration = models.IntegerField(blank=True, null=True)
    description = models.TextField(blank=True, null=True)
    url = models.CharField(max_length=255, blank=True, null=True)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)

class Content(models.Model):
    content_id = models.AutoField(primary_key=True)
    topic = models.ForeignKey(Topic, on_delete=models.CASCADE)
    concept = models.CharField(max_length=255)
    details = models.TextField()

class Tag(models.Model):
    tag_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=50)
    description = models.TextField(blank=True, null=True)

class Note(models.Model):
    title = models.CharField(max_length=255)
    topic = models.ForeignKey(Topic, on_delete=models.CASCADE)
    content = models.TextField()
    tags = models.ManyToManyField(Tag, blank=True)
    
class CodeExample(models.Model):
    code_id = models.AutoField(primary_key=True)
    topic = models.ForeignKey(Topic, on_delete=models.CASCADE)
    title = models.CharField(max_length=255)
    description = models.TextField()
    code = models.TextField()
    tags = models.ManyToManyField(Tag)

class WordDefinition(models.Model):
    word_id = models.AutoField(primary_key=True)
    word = models.CharField(max_length=255)
    definition = models.TextField()
    notes = models.ManyToManyField(Note)

class Analogy(models.Model):
    analogy_id = models.AutoField(primary_key=True)
    topic = models.ForeignKey(Topic, on_delete=models.CASCADE)
    title = models.CharField(max_length=255)
    description = models.TextField()

    def __str__(self):
        return f"{self.title} - Analogy - {self.topic.title}"
    
class Definition(models.Model):
    definition_id = models.AutoField(primary_key=True)
    sub_category = models.CharField(max_length=255)
    word = models.CharField(max_length=255)
    definition = models.TextField()
    notes = models.TextField()
    sources = models.TextField()
    tags = models.ManyToManyField(Tag)


    def __str__(self):
        return f"{self.word} - Definition"