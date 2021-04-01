import requests
import datetime
import random
import json
def write_menu(pay_load):
    url = 'https://swe3444.herokuapp.com/api/item/'
    headers = {}
    res = requests.post(url, data=pay_load, headers=headers)
    print(f'PAYLOAD -> {pay_load["name"]} -- {res}.')


def drive_write_menu():
    with open('examples/menu.txt') as f:
        lst = list(f)

    url_dict = update_urls()


    for position in range(0, len(lst), 10):
        name            = str(lst[position]).strip().upper()
        description     = str(lst[position+1]).strip().upper()
        group           = str(lst[position+2]).strip().upper()
        calories        = str(lst[position+3]).strip().upper()
        fat             = str(lst[position+4]).strip().upper()
        protein         = str(lst[position+5]).strip().upper()
        carbs           = str(lst[position+6]).strip().upper()
        allergies       = str(lst[position+7]).strip().upper()
        price           = str(lst[position+8]).strip().upper()
        URL             = url_dict[name]

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

        print('Order Uploaded')


def update_urls():
    url_dict = {}
    f = open('examples/MenuPics.txt')
    for line in f:
        line_split = line.split('$')
        s_1 = line_split[0].upper()
        s_1 = s_1.strip()
        url_dict[s_1] = line_split[1]

    return url_dict



def get_table():
    url = 'https://swe3444.herokuapp.com/api/table/'
    r = requests.get(url).json()

    for table in r:
        if table['state'] == False:
            table['state'] = True
            use_table = {
                'table_number'  : table['number'],
                'primary key'   : table['id'],
                'success'       : 'Table Reserved'
            }
            return JsonResponse(use_table, safe=False)

get_table()

