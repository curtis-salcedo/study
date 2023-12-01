from django.contrib import admin

# Register your models here.
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

# admin.site.register(User)
admin.site.register(UserProfile)
admin.site.register(Tag)
admin.site.register(Subject)
admin.site.register(Category)
admin.site.register(Topic)
admin.site.register(Content)
admin.site.register(Note)
admin.site.register(Definition)
admin.site.register(Reference)
admin.site.register(Example)

