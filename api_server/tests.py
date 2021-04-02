from django.test import TestCase
from .models import *

class ViewsTestCase(TestCase):
    def test_load(self):
        response = self.client.get('https://swe3444.herokuapp.com/api/item/')
        self.assertEqual(response.status_code, 200)
        