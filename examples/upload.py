import requests
import datetime
import random
import json
def write_menu(pay_load):
    url = 'https://swe3444.herokuapp.com/api/item/'
    res = requests.get(url)
    headers = {}
    res = requests.post(url, data=pay_load, headers=headers)

def drive_write_menu():
    with open('examples/menu.txt') as f:
        lst = list(f)

    start = 10
    for i in range(0, len(lst) - start, start):
        name = str(lst[i]).strip()
        description = str(lst[i+1]).strip()
        group = str(lst[i+2]).strip()
        calories = str(lst[i+3]).strip()
        fat = str(lst[i+4]).strip()
        protein = str(lst[i+5]).strip()
        carbs = str(lst[i+6]).strip()
        allergies =  str(lst[i+7]).strip()
        price =  str(lst[i+8]).strip()
        URL =  str(lst[i+9]).strip()
        pay_load = {
        'name' : name,
        'description' : description,
        'group' : group,
        'calories' : calories,
        'fat' : fat,
        'protein' : protein,
        'carbs' : carbs,
        'allergies' : allergies,
        'price' : price,
        'url' : URL,
        }

        write_menu(pay_load)
    # print(f'{pay_load} complete.')
        print('##########')
        for key in pay_load:
            print(f'{key} --> {pay_load[key]}')
        print('############')

def generate_orders():
    print(f'{datetime.datetime.now()}')
    for i in range(1, 13):
        order_number = random.randint(100,1000)
        number_item = random.randint(2,5)
        random_chosen_items = {}
        for _ in range(number_item):
            r = random.randint(1,35)
            random_chosen_items[r] = random.randint(1,3)
        status = ['Ordered' , 'In Progress', 'Ready to Deliver', 'Delivered', 'Paid']
        r_status = random.choice(status)
        order = {}
        second_payload = {}
        for key in random_chosen_items:
            order = {
                'table_number' : i,
                'placed_at' : datetime.datetime.now(),
                'state' : r_status,
                'quantity' : random_chosen_items[key],
                'order' : order_number,
                'item' : key,
            }

            second_payload = {
            'table_number' :i,
            'state' :'Occupied',
            }

        # print('##########################################################################')
        # print(order)
        # print(second_payload)
        # print('##########################################################################')


        url_one = 'https://swe3444.herokuapp.com/api/ordercontent/'
        url_two = 'https://swe3444.herokuapp.com/api/order/'
        
       
        res_f = requests.get(url_two)
        headers = {}
        res_f = requests.post(url_two, data = second_payload, headers = headers)
        data = json.loads(res_f.text)
        pk = data['id']

        order['order'] = pk


        res = requests.get(url_one)
        res = requests.post(url_one, data = order, headers = headers)

        # print('#############################################')
        # print(second_payload)
        # print(order)
        # print('#############################################')
        print('Order Uploaded')



generate_orders()
