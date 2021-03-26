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
    
    accessData()
}

function accessData(){
    
    console.log(Menu[0].name)
    console.log(Menu[0].description)
    console.log(Menu[0].calories)
    console.log(Menu[0].allergies)
    console.log(Menu[0].carbs)
    console.log(Menu[0].url)
}