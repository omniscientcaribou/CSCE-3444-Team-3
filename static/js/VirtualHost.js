function myFunction(){
    console.log("test")
    document.getElementById("table1").style.backgroundColor= "blue";
}

async function test(){
   // const url = 'https://swe3444.herokuapp.com/api/order'
    const url = 'http://0.0.0.0:5000/api/order/'
    fetch(url, { 
  method: 'GET'
})
.then(function(response) { return response.json(); })
.then(function(json) {
  console.log(json);
});
    // var request = new XMLHttpRequest()
    // request.open('GET' , url , true)
    // request.onload = function(){
    //     var data =JSON.parse(this.response)
    //     console.log(data)
    // }
    // request.send()

    // fetch(url , {mode: 'no-cors'})
    // .then(res => console.log(res.text()))
    //.then(data => console.log(data))
    
    // data = await response.text();
    // console.log(data);
}
