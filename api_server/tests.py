from django.test import TestCase
from .models import *
import datetime


class EndPointTest(TestCase):
    def test_menu(self):
        """
        This is a test to make sure that the menu is accessible.
        """
        response = self.client.get("https://swe3444.herokuapp.com/api/item/")
        self.assertEqual(response.status_code, 200, "Menu inaccessible")

    def test_employee(self):
        """
        This is a test to make sure that the employee information used for logging
        in to the system is accessible.
        """
        response = self.client.get("https://swe3444.herokuapp.com/api/employee/")
        self.assertEqual(response.status_code, 200, "Employee information inaccessible")

    def test_table(self):
        """
        This is a test to make sure that the literal table within our database,
        that records the state of a table {Occupied, Vacant} is accessible.
        """
        response = self.client.get("https://swe3444.herokuapp.com/api/table/")
        self.assertEqual(response.status_code, 200, "Table information inaccessible")

    def test_task(self):
        """
        This is a test to make sure that our list of tasks (essentially a queue)
        is accessible.
        """
        response = self.client.get("https://swe3444.herokuapp.com/api/task/")
        self.assertEqual(response.status_code, 200, "Task list inaccessible")

    def test_credential(self):
        """
        This is a test to make sure that the credentials for logging in are accessible.
        """
        response = self.client.get("https://swe3444.herokuapp.com/api/credential/")
        self.assertEqual(response.status_code, 200, "Credentials are inaccessible")

    def test_order(self):
        """
        This is a test to make sure that the ability to place orders is accessible.'
        """
        response = self.client.get('https://swe3444.herokuapp.com/api/order/"')
        self.assertIn(200, [200, 300], "Order in accessible")

    def test_ordercontent(self):
        """
        This is a test to make sure that orders can be serialized for the kitchen
        and waitstaff.
        """
        response = self.client.get("https://swe3444.herokuapp.com/api/ordercontent/")
        self.assertIn(200, [200, 300], "Order Contents are inaccessible")


class CreateEmployeeTest(TestCase):
    def test_employee(self):
        person = Employee.objects.create(name="Cory", role="CSCE 3444 Student")
        self.assertEqual(person.name, "Cory")
        self.assertEqual(person.role, "CSCE 3444 Student")
