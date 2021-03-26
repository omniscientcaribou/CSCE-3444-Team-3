function myFunction(){
    document.getElementById("occupied").style.backgroundColor= "blue";
    document.getElementById("occupied").textContent = "Occupied";
}

function sum(a, b){
    return a + b
}

//this function took cumulatively over 10 hours
async function getData(){
    const url = "https://swe3444.herokuapp.com/api/item/"
    fetch(url, {method: 'GET'})
    .then(function(response) { return response.json(); })
    .then(function(json) {console.log(json);});
}