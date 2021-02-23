import pymongo

# I am well aware this is not a safe process to store my login information, there are other methods, and 
# I very well may try to implement those in the future. However, for now, getting something working is 
# of the utmost importance. pass.txt is added to my gitignore so it should never be on the repository.

# If you want to emulate this log in then make a text file named 'pass.txt' (add it to your own gitignore 
# to be safe). Then on your first line enter your username, then second line password.

secret_sauce = open('pass.txt', 'r')
credentials = []
for element in secret_sauce:
    credentials.append(element)
print(credentials)

username = credentials[0]
username = username.strip()
password = credentials[1]

client = pymongo.MongoClient('mongodb+srv://' + username + ':' + password + '@cluster0.xlot2.mongodb.net/<dbname>?retryWrites=true&w=majority')

# Create a Database
collection = client.restaurauntDB.menu

# Create an object (document)
menuData = [
    {
        "name" : "DR34MBURG3R",
        "price" : "3.50",
        "calories" : "9000"
    },
    
    {
        "name" : "FREEDOM FRIES",
        "price" : "1.50",
        "calories" : "375" 
    },
    
    {
        "name" : "baked potato (aka alex)",
        "price": "0.00000000000000000001",
        "calories" : "9000000000000000"
    },

    {
        "name" : "PIZZAAAAAAAA",
        "price": "4.20",
        "calories" : "a lot"
    },
    
    {
        "name" : "to prove a point, that no sql doesn't care",
        "price" : "a literal mercedes, who even is going to read this?",
        "favorite book" : "zoobooks",
        "blue" : "sure"
    }
]

# Insert (many or single, depending on count)
collection.insert_many(menuData)

# Return all menu items currently
for item in client.restaurauntDB.menu.find():
    print(item)

