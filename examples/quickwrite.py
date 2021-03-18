import requests

def make_tables():


    n = 5
    s = False
    st =  [{'Test': 5, 'Foo': False}]

    url = 'http://0.0.0.0:5000/table/'
    res = requests.get(url)
    pay_load = {
    'number' : 999,
    'state' : s,
    }
    headers = {}
    res = requests.post(url, data=pay_load, headers=headers)
    print(f'{res} --> Done!')

make_tables()



