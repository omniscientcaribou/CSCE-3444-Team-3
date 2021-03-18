import requests



def write_menu(pay_load):
    url = 'https://swe3444.herokuapp.com/api/item/'
    res = requests.get(url)
    headers = {}
    res = requests.post(url, data=pay_load, headers=headers)


with open('examples/menu.txt') as f:
    lst = list(f)

start = 8
for i in range(0, len(lst) - start, start):
    name = str(lst[i]).strip()
    description = str(lst[i+1]).strip()
    group = str(lst[i+2]).strip()
    calories = str(lst[i+3]).strip()
    fat = str(lst[i+4]).strip()
    protein = str(lst[i+5]).strip()
    carbs = str(lst[i+6]).strip()
    allergies =  str(lst[i+7]).strip()
    pay_load = {
    'name' : name,
    'description' : description,
    'group' : group,
    'calories' : calories,
    'fat' : fat,
    'protein' : protein,
    'carbs' : carbs,
    'allergies' : allergies,
    }

    write_menu(pay_load)
# print(f'{pay_load} complete.')
    print('##########')
    for key in pay_load:
        print(f'{key} --> {pay_load[key]}')
    print('############')

