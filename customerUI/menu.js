var Menu = new Array();

async function getData(Menu){
    const url = "https://swe3444.herokuapp.com/api/item/"
    Menu = fetch(url, {method: 'GET'})
    // console.log(x);
    .then(function(response) { return response.json(); })
    .then(function(json) {return json});
    
}

console.log(Menu);
