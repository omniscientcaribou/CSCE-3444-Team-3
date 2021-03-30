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
    item.getElementsByClassName("name")[0].textContent = Menu[x].name;
    item.getElementsByClassName("price")[0].textContent ="$" + Menu[x].price;
    item.getElementsByClassName("description")[0].textContent = Menu[x].description;
    item.getElementsByClassName("calories")[0].textContent = "Calories: " + Menu[x].calories;
    item.getElementsByClassName("protein")[0].textContent = "protein: " + Menu[x].protein;
    item.getElementsByClassName("carbs")[0].textContent ="Carbohydrates: " + Menu[x].carbs;
    item.getElementsByClassName("fat")[0].textContent ="Fats: " +  Menu[x].fat;
    item.getElementsByClassName("allergies")[0].textContent = "allergens: " + Menu[x].allergies;
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
// accessData();