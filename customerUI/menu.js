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
    accessData();
}

function accessData(){
    document.getElementById("item1").textContent = Menu[20].price;
    // console.log(document.getElementById("item1").getElementById("price"))
    // document.getElementById("item1").getElementsByClassName
    console.log(Menu[20].price)
    
    
}
// accessData();