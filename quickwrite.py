import requests


def make_tables():
    url = 'http://127.0.0.1:8000/api/item/'
    res = requests.get(url)
    pay_load = {
        'name' : 'TestName',
        'description' : 'TestDescription',
        'group' : 'testGroup'
    }
    headers = {}
    res = requests.post(url, data=pay_load, headers=headers)

for i in range(0, 13):
    print(i)