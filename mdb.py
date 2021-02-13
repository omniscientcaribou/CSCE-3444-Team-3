import pymongo
client = pymongo.MongoClient('mongodb+srv://username:password@cluster0.xlot2.mongodb.net/<dbname>?retryWrites=true&w=majority')

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

