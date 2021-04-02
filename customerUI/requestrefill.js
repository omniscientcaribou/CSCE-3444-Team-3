var Menu = new Array();

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
    item.getElementsByClassName("itemlabel")[0].textContent=Menu[x].name;

}

function buildString(itemName){

  var drink_string = "";

  item = document.getElementById(itemName);

  if(item.getElementsByClassName("quantity")[0].value > 0){
    drink_string = drink_string + item.getElementsByClassName("itemlabel")[0].textContent;
    drink_string = drink_string + 'x' + item.getElementsByClassName("quantity")[0].value + ", " ;
  }

  return drink_string;

}

function sendRequest(){

  table_number = 3
  var drink_string = "";
  drink_string = drink_string + buildString("item1");
  drink_string = drink_string + buildString("item2");
  drink_string = drink_string + buildString("item3");
  drink_string = drink_string + buildString("item4");
  drink_string = drink_string + buildString("item5");
  drink_string = drink_string + buildString("item6");
  drink_string = drink_string + buildString("item7");

  

const order_content = 'https://swe3444.herokuapp.com/api/task/'

var payload = 
{
   "role" : "Customer",
   "table_number" : table_number,
   "refill_request" : true,
   "drink_selections" : drink_string,
   "call_waitstaff" : true,
   "call_manager" : false,
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
