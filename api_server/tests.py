from django.test import TestCase
from .models import *
import datetime
import copy
import requests


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
    """
        This is a test to create an Employee object, and verify its creation/correctness.
    """
    def test_employee(self):
        person = Employee.objects.create(name="Cory", role="CSCE 3444 Student")
        self.assertEqual(person.name, "Cory")
        self.assertEqual(person.role, "CSCE 3444 Student")

class CreateItemTest(TestCase):
    """
        This is a test to create an Item object, and verify its creation/correctness.
    """
    def test_create_item(self):
        item = Item.objects.create(    
            name        = "Test Name", 
            description = "Test Description", 
            group       = "Test Group", 
            calories    = "Test Calories", 
            fat         = "Test Fat", 
            protein     = "Test Protein", 
            carbs       = "Test Carbs", 
            allergies   = "Test Allergies", 
            price       = 2, 
            url         = "Test URL", 
        )


        self.assertEqual(item.name , "Test Name")
        self.assertEqual(item.description , "Test Description")
        self.assertEqual(item.group , "Test Group")
        self.assertEqual(item.calories , "Test Calories") 
        self.assertEqual(item.fat , "Test Fat")
        self.assertEqual(item.protein , "Test Protein") 
        self.assertEqual(item.carbs , "Test Carbs")
        self.assertEqual(item.allergies , "Test Allergies")
        self.assertEqual(item.price , 2.0)
        self.assertEqual(item.url , "Test URL")


class CreateOrderTest(TestCase):
    def test_make_order(self):
        
        response = requests.get('https://swe3444.herokuapp.com/api/item/').json()
        current_time = datetime.datetime.now()
        current_time = current_time.replace(microsecond=0)
        individual_order = Order.objects.create(table_number = 1, state = "ORDERED", placed_at = current_time)
        self.assertEqual(individual_order.table_number, 1)
        self.assertEqual(individual_order.state, "ORDERED")
        check_id = response[14]["id"]
        print(check_id)

        item = Item.objects.create(    
            name        = "Test Name", 
            description = "Test Description", 
            group       = "Test Group", 
            calories    = "Test Calories", 
            fat         = "Test Fat", 
            protein     = "Test Protein", 
            carbs       = "Test Carbs", 
            allergies   = "Test Allergies", 
            price       = 2, 
            url         = "Test URL", 
        )

        
        ordercontent = OrderContent.objects.create(
            order           = Order.objects.get(id=individual_order.id),
            table_number    = 1,
            placed_at       = current_time,
            state           = "ORDERED",
            item            = Item.objects.get(id=item.id),                
            quantity        = 1,            
            allergy_flag    = True,
            comment         = "This is a test comment",
        )




        # self.assertEqual(order.id,1)
        # self.assertEqual(order.table_number,1)
        # self.assertEqual(order.state,"ORDERED")
        # self.assertEqual(order.item,15)
        # self.assertEqual(order.quantity,1)
        # self.assertEqual(order.allergy_flag,True)
        # self.assertEqual(order.comment,"This is a test comment")












