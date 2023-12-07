from django.db import models
from django.contrib.auth.models import User as AuthUser
from django.urls import reverse

class UserProfile(models.Model):
    user = models.OneToOneField(AuthUser, on_delete=models.CASCADE)
    completed_notes = models.ManyToManyField('Note')

# Tags can help filter based on similiarities under all Subjects
class Tag(models.Model):
    name = models.CharField(max_length=20)
    description = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    def __str__(self):
        return f"{self.name} - Tag"

class Subject(models.Model):
    name = models.CharField(max_length=100)
    description = description = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    slug = models.SlugField(null=True)

    def __str__(self):
        return self.name
    def get_absolute_url(self):
        return reverse('subject-detail', kwargs={'slug': self.slug})

class Category(models.Model):
    subject = models.ForeignKey(Subject, on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    description = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    def __str__(self):
        return f"{self.title} - {self.title} - Category"

# Each Topic is in a Category
class Topic(models.Model):
    title = models.CharField(max_length=255, blank=True, null=True)
    type = models.CharField(max_length=50, blank=True, null=True)
    description = models.TextField(blank=True, null=True)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.category.name} - {self.title} - Topic"


# This will hold the Content for each Topic
# Each Topic can have many Content pieces or parts
class Content(models.Model):
    topic = models.ForeignKey(Topic, on_delete=models.CASCADE)
    title = models.CharField(max_length=255)
    details = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.topic.name} - {self.title} - Content"

class Note(models.Model):
    title = models.CharField(max_length=255)
    topic = models.ForeignKey(Topic, on_delete=models.CASCADE)
    summary = models.TextField()
    tags = models.ManyToManyField(Tag, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.title} - Note"
    
class BulletPoint(models.Model):
    note = models.ForeignKey(Note, on_delete=models.CASCADE, related_name='bullet_points')
    content = models.TextField()

    def __str__(self):
        return f"{self.note.title} - Bullet Point"
    
class Definition(models.Model):
    term = models.CharField(max_length=255)
    definition = models.TextField()
    tags = models.ManyToManyField(Tag)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.word} - Definition"
    
class Reference(models.Model):
    title = models.CharField(max_length=200)
    url = models.URLField(blank=True, null=True)
    details = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.title} - Reference"

# Examples could be code blocks, analogy, outside resources
class Example(models.Model):
    type = models.CharField(max_length=255)
    title = models.CharField(max_length=255)
    description = models.TextField(blank=True, null=True)
    code = models.TextField(blank=True, null=True)
    reference = models.ForeignKey(Reference, on_delete=models.CASCADE)
    tags = models.ManyToManyField(Tag)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.type + self.title