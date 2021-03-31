
function retrieve_data(){
    // This is a simple function to show how to call a 'GET' request
    const url = 'https://swe3444.herokuapp.com/api/table_total/2'
    fetch(url, { 
        method: 'GET'    
    })
    .then(function(response) { return response.json(); })
    .then(function(json) {
        console.log(json[0].total);
        document.getElementById("payment").innerHTML="$".concat(json[0].total);
    })
}
window.onload=retrieve_data();
