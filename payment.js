
window.onload=function(e){
    var tableNum = 2//localStorage[1];
    function releaseTable(){
        url = 'https://swe3444.herokuapp.com/api/release_table/' + tableNum;
        fetch(url, {
            method: 'Get'
        })
        
        }
    // This is a simple function to show how to call a 'GET' request
    const totalUrl = 'https://swe3444.herokuapp.com/api/table_total/'.concat((tableNum).toString())
    const getIDs = 'https://swe3444.herokuapp.com/api/kitchen_view/'.concat((tableNum).toString())
    const orderUrl = 'https://swe3444.herokuapp.com/api/ordercontent/'
    const order_content = 'https://swe3444.herokuapp.com/api/task/'
    
    fetch(totalUrl, { 
        method: 'GET'    
    })
    .then(function(response) { return response.json(); })
    .then(function(json) {
        console.log(json[0].total);
        var fixed= Math.round(json[0].total*100)/100;
        console.log(fixed)
        document.getElementById("payment").innerHTML="$".concat(fixed);
    })

    function goCash(){
        //calls waiter
        var payload = 
        {
            "role" : "Customer",
            "table_number" : tableNum,
            "call_waitstaff" : true,
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
        
        setTimeout(function(){
            window.location.href="comments.html"
        },100)
    }
    //goes to the credit card page
    function goCard(){
        localStorage.setItem("times",1)
        window.location.href="creditcard.html"
    }
    // links button to corresponding functions
    var cash= document.getElementById("cash")
    cash.addEventListener("click",goCash)
    var card= document.getElementById("card")
    card.addEventListener("click",goCard)
}

