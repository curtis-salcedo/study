from django.test import TestCase

from .models import Topic

# Create your tests here.
class UserViewSet(TestCase):
    def test_user_view_set(self):
        self.assertEqual(1, 1)

class TopicTestCase(TestCase):
    def test_create_model_topic(self):
        topic = Topic.objects.create(name="Test", description="Test")
        self.assertEqual(topic.name, "Test")
        self.assertEqual(topic.description, "Test")

    def test_update_model_topic(self):
        topic = Topic.objects.create(name="Test", description="Test")
        topic.name = "New Test"
        topic.description = "New Test"
        topic.save()
        self.assertEqual(topic.name, "New Test")
        self.assertEqual(topic.description, "New Test")

    def test_delete_model_topic(self):
        topic = Topic.objects.create(name="Test", description="Test")
        topic.delete()

        self.assertEqual(Topic.objects.count(), 0)