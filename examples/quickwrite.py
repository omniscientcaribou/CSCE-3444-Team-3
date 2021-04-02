import requests
import json
import datetime


def make_tables():

    n = 5
    s = False
    st = [{"Test": 5, "Foo": False}]

    url = "http://0.0.0.0:5000/table/"
    res = requests.get(url)
    pay_load = {
        "number": 999,
        "state": s,
    }
    headers = {}
    res = requests.post(url, data=pay_load, headers=headers)
    print(f"{res} --> Done!")


# make_tables()


def test_write(t_num, item_id, quantity, s=""):

    url_one = "https://swe3444.herokuapp.com/api/ordercontent/"
    url_two = "https://swe3444.herokuapp.com/api/order/"

    create_order = {
        "table_number": t_num,
        "state": "Occupied",
    }

    # init_order = request.get(url_two)
    headers = {}
    init_order = requests.post(url_two, data=create_order, headers=headers)
    data = json.loads(init_order.text)

    p_key = data["id"]

    print(f"PK -> {p_key}.")
    status = "Ordered"
    serial_order = {
        "order": p_key,
        "table_number": t_num,
        "placed_at": datetime.datetime.now(),
        "state": status,
        "item": item_id,
        "quantity": quantity,
        "allergy_flag": False,
        "comment": "Test",
    }

    print(serial_order)

    try:
        r = requests.post(url_one, data=serial_order, headers=headers)
        r.raise_for_status()
    except requests.exceptions.HTTPError as e:
        print(e.response.text)


# test_write(2, 3, 4, "I am a cat")
