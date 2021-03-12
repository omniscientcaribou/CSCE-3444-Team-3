function myFunction(){
    document.getElementById("table1").style.backgroundColor= "blue";
}

//this function took cumulatively over 10 hours
async function test(){
    const url = 'https://swe3444.herokuapp.com/item/'
    fetch(url, {method: 'GET'})
    .then(function(response) { return response.json(); })
    .then(function(json) {console.log(json);});
}
