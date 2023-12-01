"""
URL configuration for server project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from django.contrib.auth.models import User
from rest_framework import routers, serializers, viewsets
from backend import views

# Routers provide an easy way of automatically determining the URL conf.
router = routers.DefaultRouter()
# router.register(r'users', views.UserViewSet)
router.register(r'userprofiles', views.UserProfileViewSet)
router.register(r'tags', views.TagsViewSet)
router.register(r'subjects', views.SubjectViewSet)
router.register(r'categoreis', views.CategoryViewSet)
router.register(r'topics', views.TopicViewSet)
router.register(r'contents', views.ContentViewSet)
router.register(r'notes', views.NoteViewSet)
router.register(r'definitions', views.DefinitionViewSet)
router.register(r'references', views.ReferenceViewSet)
router.register(r'examples', views.ExampleViewSet)

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    path('api/', include(router.urls)),
    path('admin/', admin.site.urls),

    # path('users/', include('users.urls')),
    path('auth/', include('rest_framework.urls', namespace='rest_framework')),

    # Category Paths
    path('api/add_categories/', views.add_categories),

    # Topic Paths
    path('api/add_topics/', views.add_topics),

    # Content Paths
    path('api/add_contents/', views.content_view),

    # Tag Paths
    path('api/add_tags/', views.add_tags),

    # Note Paths
    path('api/add_notes/', views.add_notes),

    # Code Example Paths
    path('api/add_examples/', views.add_examples),

    # Word Definition Paths
    path('api/add_definitions/', views.add_definitions),

    # Import Data Paths
    path('api/import_data/', views.import_data),
]
