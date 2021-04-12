var Menu = new Array();
var Order = new Array();
var table_number = localStorage[1];

function asdf(){
  console.log(table_number);
}

function tagTable(){
  url = 'https://swe3444.herokuapp.com/api/get_table/' + table_number;
  fetch(url, { 
    method: 'GET'
  })
}

function releaseTable(){
  url = 'https://swe3444.herokuapp.com/api/release_table/' + table_number;
  fetch(url, {
    method: 'Get'
  })

}

function setTable(number){
  localStorage[1] = number;
  window.location.replace("customerui.html");
}

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
    populateDrinks()
    tagTable();
}

function setData(itemName, x){
    var item = document.getElementById(itemName);
    item.getElementsByClassName("img")[0].src = Menu[x].url;
    item.getElementsByClassName("name")[0].textContent = Menu[x].name;
    item.getElementsByClassName("price")[0].textContent ="$" + Menu[x].price;
    item.getElementsByClassName("description")[0].textContent = Menu[x].description;
    item.getElementsByClassName("calories")[0].textContent = "Calories: " + Menu[x].calories;
    item.getElementsByClassName("protein")[0].textContent = "Protein: " + Menu[x].protein;
    item.getElementsByClassName("carbs")[0].textContent ="Carbohydrates: " + Menu[x].carbs;
    item.getElementsByClassName("fat")[0].textContent ="Fats: " +  Menu[x].fat;
    item.getElementsByClassName("allergies")[0].textContent = "Allergens: " + Menu[x].allergies;
    item.getElementsByClassName("Id")[0].textContent = "Id: " + Menu[x].id;
    item.style.display = "block";
}

function populateDrinks(){
  var count = 0;
  menuItemarr = document.getElementsByClassName("menuItem");
  for(var i = 0; i < menuItemarr.length; i++){
    menuItemarr[i].style.display = "none";
  }
  for(let i in Menu){
    if(Menu[i].group == "DRINK"){
      setData(menuItemarr[count].id, i)
       count = count + 1;
    }
  }
}

function populateSides(){
  var count = 0;
  menuItemarr = document.getElementsByClassName("menuItem");
  for(var i = 0; i < menuItemarr.length; i++){
    menuItemarr[i].style.display = "none";
  }
  for(let i in Menu){
    if(Menu[i].group == "SIDES"){
      setData(menuItemarr[count].id, i)
       count = count + 1;
    }
  }
}

function populateAppetizers(){
  var count = 0;
  menuItemarr = document.getElementsByClassName("menuItem");
  for(var i = 0; i < menuItemarr.length; i++){
    menuItemarr[i].style.display = "none";
  }
  for(let i in Menu){
    if(Menu[i].group == "APPETIZERS"){
      setData(menuItemarr[count].id, i)
       count = count + 1;
    }
  }
}

function populateEntrees(){
  var count = 0;
  menuItemarr = document.getElementsByClassName("menuItem");
  for(var i = 0; i < menuItemarr.length; i++){
    menuItemarr[i].style.display = "none";
  }
  for(let i in Menu){
    if(Menu[i].group == "ENTREES"){
      setData(menuItemarr[count].id, i)
       count = count + 1;
    }
  }
}

function populateDeserts(){
  var count = 0;
  menuItemarr = document.getElementsByClassName("menuItem");
  for(var i = 0; i < menuItemarr.length; i++){
    menuItemarr[i].style.display = "none";
  }
  for(let i in Menu){
    if(Menu[i].group == "DESSERT"){
      setData(menuItemarr[count].id, i)
       count = count + 1;
    }
  }
}

function populateKidsMeal(){
  var count = 0;
  menuItemarr = document.getElementsByClassName("menuItem");
  for(var i = 0; i < menuItemarr.length; i++){
    menuItemarr[i].style.display = "none";
  }
  for(let i in Menu){
    if(Menu[i].group == "KID'S MENU"){
      setData(menuItemarr[count].id, i)
       count = count + 1;
    }
  }
}

function addtoOrder(itemName){
  var item = document.getElementById(itemName);

  var OrderItem = {
    id: item.getElementsByClassName("Id")[0].textContent.split(" ")[1],
    quantity: 1,
    allergy_flag: false,
    allergy_comment: "NA",
    comment: item.getElementsByClassName("comment")[0].value
  }
  if(item.getElementsByClassName("comment")[0].value != "") {
    OrderItem.comment = item.getElementsByClassName("comment")[0].value;
  }
  else{
    OrderItem.comment = "NULL";
  }
  if(document.getElementById("dairy").checked){
    if(OrderItem.allergy_comment == 'NA' ){
      OrderItem.allergy_comment = ""
    }
    OrderItem.allergy_flag = true;
    OrderItem.allergy_comment = OrderItem.allergy_comment + "Dairy|";
  }
  if(document.getElementById("shellfish").checked){
    if(OrderItem.allergy_comment == 'NA' ){
      OrderItem.allergy_comment = ""
    }
    OrderItem.allergy_flag = true;
    OrderItem.allergy_comment = OrderItem.allergy_comment + "Shellfish|";
  }
  if(document.getElementById("gluten").checked){
    if(OrderItem.allergy_comment == 'NA' ){
      OrderItem.allergy_comment = ""
    }
    OrderItem.allergy_flag = true;
    OrderItem.allergy_comment = OrderItem.allergy_comment + "Gluten|";
  }
  if(document.getElementById("peanut").checked){
    if(OrderItem.allergy_comment == 'NA' ){
      OrderItem.allergy_comment = ""
    }
    OrderItem.allergy_flag = true;
    OrderItem.allergy_comment = OrderItem.allergy_comment + "Peanut|";
  }
  if(document.getElementById("treeNut").checked){
    if(OrderItem.allergy_comment == 'NA' ){
      OrderItem.allergy_comment = ""
    }
    OrderItem.allergy_flag = true;
    OrderItem.allergy_comment = OrderItem.allergy_comment + "TreeNut|";
  }
  if(document.getElementById("other").checked){
    if(OrderItem.allergy_comment == 'NA' ){
      OrderItem.allergy_comment = ""
    }
    OrderItem.allergy_flag = true;
    OrderItem.allergy_comment = OrderItem.allergy_comment + "Other|"
    OrderItem.allergy_comment = OrderItem.allergy_comment + document.getElementById("otherAllergenField").value;
  }

  item.getElementsByClassName("comment")[0].value = "";
  Order.push(OrderItem);
}

var now = new Date();
var isoString = now.toISOString();

function separate_order(pk){
  order_id = pk
  status = "ORDERED"
  ordered_at = now
  


  for(let val in Order){
    item_id = Order[val].id
    item_quantity = 1
    comment = Order[val].comment
    a_flag = Order[val].allergy_flag
    allergy_comment = Order[val].allergy_comment
  
    const order_content = 'https://swe3444.herokuapp.com/api/ordercontent/'
      
    var payload = 
    {
        "order"        : order_id,
        "table_number" : table_number,
        "placed_at"    : ordered_at,
        "state"        : status,
        "item"         : item_id,
        "quantity"     : item_quantity, 
        "allergy_flag" : a_flag,
        "comment"      : comment,
        "allergy_comment" : allergy_comment,      
    };
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
    })
  }
  Order = [];
}

function sendOrder(){
  // This function posts our original order, and returns a primary key to hand to 
  // items encapsulated by this order.
  url = 'https://swe3444.herokuapp.com/api/order/'

  payload = {
    "table_number"  : table_number,
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
      separate_order(data['id'])
  })
  window.alert("Order Sent");
}