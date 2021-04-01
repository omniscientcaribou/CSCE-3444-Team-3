var Menu = new Array();
var Order = new Array();

const apiCall = () => fetch('https://swe3444.herokuapp.com/api/item/').then(res => {
  if (res.ok) {
    return res.json()
  }
  throw new Error(res)
})
.catch(console.err)

async function getData(){
    let results = await apiCall()
    for(const property in results) {
        Menu.push(results[property]);
    }  
    setData("item1", 0);
    setData("item2", 1);
    setData("item3", 2);
    setData("item4", 3);
    setData("item5", 4);
    setData("item6", 5);
    setData("item7", 6);
}

function setData(itemName, x){
    var item = document.getElementById(itemName);
    item.getElementsByClassName("name")[0].textContent = Menu[x].name;
    item.getElementsByClassName("price")[0].textContent ="$" + Menu[x].price;
    item.getElementsByClassName("description")[0].textContent = Menu[x].description;
    item.getElementsByClassName("calories")[0].textContent = "Calories: " + Menu[x].calories;
    item.getElementsByClassName("protein")[0].textContent = "Protein: " + Menu[x].protein;
    item.getElementsByClassName("carbs")[0].textContent ="Carbohydrates: " + Menu[x].carbs;
    item.getElementsByClassName("fat")[0].textContent ="Fats: " +  Menu[x].fat;
    item.getElementsByClassName("allergies")[0].textContent = "Allergens: " + Menu[x].allergies;
    item.getElementsByClassName("Id")[0].textContent = "Id: " + Menu[x].id;
}

function populateDrinks(){
  setData("item1", 0);
  setData("item2", 1);
  setData("item3", 2);
  setData("item4", 3);
  setData("item5", 4);
  setData("item6", 5);
  setData("item7", 6);
}

function populateSides(){
  setData("item1", 7);
  setData("item2", 8);
  setData("item3", 9);
  setData("item4", 10);
  setData("item5", 11);
  setData("item6", 12);
  setData("item7", 13);
}

function populateAppetizers(){
  setData("item1", 14);
  setData("item2", 15);
  setData("item3", 16);
  setData("item4", 17);
  setData("item5", 18);
  setData("item6", 19);
  setData("item7", 20);
}

function populateEntrees(){
  setData("item1", 21);
  setData("item2", 22);
  setData("item3", 23);
  setData("item4", 24);
  setData("item5", 25);
  setData("item6", 26);
  setData("item7", 27);
}

function populateDeserts(){
  setData("item1", 28);
  setData("item2", 29);
  setData("item3", 30);
  setData("item4", 31);
  setData("item5", 32);
  setData("item6", 33);
  setData("item7", 34);
}

function populateKidsMeal(){
  setData("item1", 35);
  setData("item2", 36);
  setData("item3", 37);
  setData("item4", 38);
  setData("item5", 39);
  setData("item6", 40);
  setData("item7", 41);
}

function addtoOrder(itemName){
  var item = document.getElementById(itemName);
  // var str = item.getElementsByClassName("Id")[0].textContent;

  var OrderItem = {
    id: item.getElementsByClassName("Id")[0].textContent.split(" ")[1],
    quantity: 1,
    allergy_flag: item.getElementsByClassName("commentBool")[0].value,
    comment: item.getElementsByClassName("comment")[0].value
  }
  if(item.getElementsByClassName("commentBool")[0].checked){
    OrderItem.allergy_flag = true;
    OrderItem.comment = item.getElementsByClassName("comment")[0].value;
  }
  else{
    OrderItem.allergy_flag =  false;
    OrderItem.comment = "NULL";
  }
  item.getElementsByClassName("comment")[0].value = "";
  Order.push(OrderItem);
  console.log(Order);
}

function sendOrder(){
  var package = {
    order: 1,
    table_number: 5,
    placed_at: "now",
    item: Order,
  };
  var json = JSON.stringify(package);

  //put request here
  console.log(json);
}

var now = new Date();
var isoString = now.toISOString();

function separate_order(pk){
  order_id = pk
  status = "ORDERED"
  table_number = 9999
  ordered_at = now
  console.log(pk)


  for(let val in Order){
    console.log(Order[val].id)
    item_id = Order[val].id
    item_quantity = 1
  
    const order_content = 'https://swe3444.herokuapp.com/api/ordercontent/'
      
    var payload = 
    {
        "order"        : order_id,
        "table_number" : table_number,
        "placed_at"    : ordered_at,
        "state"        : status,
        "item"         : item_id,
        "quantity"     : item_quantity, 
        "allergy_flag" : false,
        "comment"      : "Is this working",      
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

function coryYeet(){
  // This function posts our original order, and returns a primary key to hand to 
  // items encapsulated by this order.
  url = 'https://swe3444.herokuapp.com/api/order/'

  payload = {
    "table_number"  : 9999,
    "state"         : "ORDERED"
  }
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
      console.log(`The primary key is ${data['id']}`)
      separate_order(data['id'])
  })
}




// function place_order(order){
//   status = order['status']
//   table_number = order['table_number']
//   ordered_at = order['time']

//   payload = {
//       "table_number" : table_number,
//       "state" : status
//   }

//   url = 'https://swe3444.herokuapp.com/api/order/'
//   fetch(url, { 
//       method: 'POST',
//       headers: {
//           'Accept': 'application/json',
//           'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(payload),
//   })
//   .then(function(response){
//       return response.json()
//   })
//   .then(function(data){
//       console.log('---',data)
//       console.log('###', data['id'], '###')
//       separate_order(order, data['id'])
//   })
// }


// function separate_order(order, pk){
//   console.log('pk == ', pk)
//   order_id = pk
//   status = order['status']
//   table_number = order['table_number']
//   ordered_at = order['time']

//   // Write to order queue
//   for(let val in order['items']){
//       item_id = order['items'][val]['id']
//       item_quantity = order['items'][val]['quantity']
  
//       const order_content = 'https://swe3444.herokuapp.com/api/ordercontent/'
      
//       var payload = 
//       {
//           "order"        : order_id,
//           "placed_at"    : ordered_at,
//           "state"        : status,
//           "item"         : item_id,
//           "quantity"     : item_quantity,      
//           "table_number" : table_number
//       };

//       console.log(payload);
//       fetch(order_content, { 
//           method: 'POST',
//           headers: {
//               'Accept': 'application/json',
//               'Content-Type': 'application/json'
//           },
//           body: JSON.stringify(payload),
//       })
//       .then(function(response){
//           return response.json()
//       })
//       .then(function(data){
//           console.log(data)
//       })
//   }
// }