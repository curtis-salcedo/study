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
router.register(r'users', views.UserViewSet)
router.register(r'userprofiles', views.UserProfileViewSet)
router.register(r'topics', views.TopicViewSet)
router.register(r'tags', views.TagsViewSet)
router.register(r'notes', views.NoteViewSet)
router.register(r'codeexamples', views.CodeExampleViewSet)
router.register(r'worddefinitions', views.WordDefinitionViewSet)
router.register(r'category', views.CategoryViewSet)
router.register(r'analogy', views.AnalogyViewSet)

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    path('api/', include(router.urls)),
    path('admin/', admin.site.urls),

    # path('users/', include('users.urls')),
    path('auth/', include('rest_framework.urls', namespace='rest_framework')),

    # Category Paths
    path('api/add_category/', views.add_category),

    # Topic Paths
    path('api/add_topic/', views.add_topic),

    # Tag Paths
    path('api/add_tag/', views.add_tag),

    # Note Paths
    path('api/add_note/', views.add_note),

    # Code Example Paths
    path('api/add_code_example/', views.add_code_example),

    # Word Definition Paths
    path('api/add_word_definition/', views.add_word_definition),

    # Analogy Paths
    path('api/add_analogy/', views.add_analogy),
]
