// foo = {}
var foo = 
{
    "placed_at"    : Date().toLocaleString(),
    "state"        : "Ordered",
    "item"         :  "Single",
    "quantity"     : 2,
    "table_number" : 2 
};

var bar = 
{
    "name" : "TestInput",
    "role" : "TestRole"
};
var now = new Date();
console.log(now)
var isoString = now.toISOString();

var order = {
    "status" : "Ordered",
    "items" : [
        {
            "id" : 8,
            "quantity" : 2
        },

        {
            "id" : 13,
            "quantity" : 1
        },

        {
            "id" : 18,
            "quantity" : 3
        },
        {
            "id" : 28,
            "quantity" : 5
        },
    ],
    "table_number" : 5,
    "time" : now
}

const fetch = require("node-fetch");

function retrieve_data(){
    // This is a simple function to show how to call a 'GET' request
    const url = 'https://swe3444.herokuapp.com/api/employee/'
    fetch(url, { 
   method: 'GET'
 })
 .then(function(response) { return response.json(); })
 .then(function(json) {
   console.log(json);
 })
}

// retrieve_data();


function send_data(bar){
    // This is a simple function to show how to call a 'POST' request
    const url = 'https://swe3444.herokuapp.com/api/employee/'
    fetch(url, { 
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(bar),
    })
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data)
    })
}
// send_data(bar);

function iterate_order(order){
    // Function to show how to iterate over nested JSON
    for(let val in order['items']){
        console.log("inner order == ", order['items'][val])
        console.log("id == ", order['items'][val]['id'])
        console.log("quantity == " , order['items'][val]['quantity'])
        console.log("\n")
    }
}


// enumerate_order(order);
function tst(r){
    console.log("TEST");
    console.log(r['id']);
}

// Need to return PK from this somehow?
function place_order(order){
    status = order['status']
    table_number = order['table_number']
    ordered_at = order['time']

    payload = {
        "table_number" : table_number,
        "state" : status
    }

    url = 'https://swe3444.herokuapp.com/api/order/'
    fetch(url, { 
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload),
    })
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log('---',data)
        console.log('###', data['id'], '###')
        separate_order(order, data['id'])
    })
}


function separate_order(order, pk){
    console.log('pk == ', pk)
    order_id = pk
    status = order['status']
    table_number = order['table_number']
    ordered_at = order['time']

    // Write to order queue
    for(let val in order['items']){
        item_id = order['items'][val]['id']
        item_quantity = order['items'][val]['quantity']
    
        const order_content = 'https://swe3444.herokuapp.com/api/ordercontent/'
        
        var payload = 
        {
            "order"        : order_id,
            "placed_at"    : ordered_at,
            "state"        : status,
            "item"         : item_id,
            "quantity"     : item_quantity,      
            "table_number" : table_number
        };

        console.log(payload);
        fetch(order_content, { 
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload),
        })
        .then(function(response){
            return response.json()
        })
        .then(function(data){
            console.log(data)
        })
    }
}

function update_status(order)
{
    // This is a PATCH call we are going to update the status of an item
    // Enough for today
    url = 'https://swe3444.herokuapp.com/api/ordercontent/' + order['items'][0]['id']
    console.log(url)
}

place_order(order);
// separate_order(order);

// update_status(order);