# @api_view(["GET"])
# def table_total(request, pk):
#     """
#     This is an end point to show the total at a table, like table_bill, it takes a pk.
#     https://swe3444.herokuapp.com/api/table_total/<TABLENUMBER>
#     """
#     lst = []
#     query_data = OrderContent.objects.prefetch_related("item").filter(table_number=pk)
#     price = 0
#     for element in query_data:
#         if element.state != "PAID":
#             price += element.item.price * element.quantity
#     order_total = {
#         "total": str(price),
#     }
#     lst.append(order_total)
    
#     return JsonResponse(lst, safe=False)

import requests
import datetime
import time
import json
def get_order_content():
    pk = 7
    # Get information required
    url_order = 'https://swe3444.herokuapp.com/api/ordercontent/'
    r = requests.get(url_order).json()

    url_price = 'https://swe3444.herokuapp.com/api/pricecalculations/'
    p = requests.get(url_price).json()

    url_item = 'https://swe3444.herokuapp.com/api/item/'
    i = requests.get(url_item).json()

    # Create price dictionary
    pricing = {
        "SECRET MENU" : -1.00,
    }
    for item in p:
        pricing[item['group']] = item['price']
    
    # Create item dictionary
    items = {}
    for item in i:
        items[item["id"]] = item["group"]

    # Create list to store information and filter out anything that isn't paid
    day_of_week = ""
    lst = []
    for order in r:
        if order['state'] != 'PAID':
            lst.append(order)
            s = order['placed_at']
            s = s[:10]
            s = s.split('-')

            # Int to Day Conversion
            # Monday    =   1           
            # Tuesday   =   2
            # Wednesday =   3
            # Thursday  =   4
            # Friday    =   5
            # Saturday  =   6
            # Sunday    =   7

            day_of_week = datetime.date(int(s[0]), int(s[1]), int(s[2])).weekday()

    adult_count = 0 
    child_count = 0

    total_bill = 0
    for item in lst:
        group = items[item["item"]]
        price = pricing[group]
        total_bill += price * item['quantity']
        if group == "ENTREES":
            adult_count += 1
        if group == "KID'S MENU":
            child_count += 1

    if adult_count >= 1 and child_count >= 1 and day_of_week != 7:
            adjustment = 0
            if adult_count > child_count:
                adjustment = child_count
            if child_count > adult_count:
                adjustment = adult_count
            else:
                adjustment = adult_count

            
            # Deduct child items from meal, 1:1 (each adult entree is free child meal)        
            while adjustment > 0:
                print(f'adjusment = {adjustment}')
                for _ in range(3):
                    url_one = "https://swe3444.herokuapp.com/api/ordercontent/"
                    url_two = "https://swe3444.herokuapp.com/api/order/"

                    create_order = {
                        "table_number": pk,
                        "state": "Occupied",
                    }

                    headers = {}
                    init_order = requests.post(url_two, data=create_order, headers=headers)
                    data = json.loads(init_order.text)
                    # print(data)

                    p_key = data["id"]

                    status = "ORDERED"
                    serial_order = {
                        "order": p_key,
                        "table_number": pk,
                        "placed_at": datetime.datetime.now(),
                        "state": status,
                        "item": 43,
                        "quantity": 1,
                        "allergy_flag": False,
                        "comment": "Test",
                    }
                    r = requests.post(url_one, data=serial_order, headers=headers)
                adjustment -= 1
    else:
        order_total = {
            "total" : str(total_bill),
        }
        l = []
        lst.append(order_total)
        return JsonResponse(l, safe=False)





    
get_order_content()