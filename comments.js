window.onload=function(){
    var tableNum = 2//localStorage[1];
    const getIDs = 'https://swe3444.herokuapp.com/api/kitchen_view/'.concat((tableNum).toString())
    const orderUrl = 'https://swe3444.herokuapp.com/api/ordercontent/'
    function releaseTable(){
        url = 'https://swe3444.herokuapp.com/api/release_table/' + tableNum;
        fetch(url, {
            method: 'Get'
        })
        
        }
    function next(){
        //gets all ID's associated with table
        var indexes = []
        fetch(getIDs, {
            method: 'GET'
        })
        .then(function(response) {return response.json();})
        .then(function(data){
            console.log(data)
            for(const orderItem of data){
                indexes.push(orderItem.id)
                console.log(indexes)
            }
            console.log(indexes)
            for(const index of indexes){
                console.log(orderUrl.concat(index.toString()).concat("/"))
                console.log(index)
                var paidUpdate=
                {
                    "state": "PAID",
                    "id": index.toString()
                };
                fetch(orderUrl.concat(index.toString()).concat("/"),{
                    method: 'PATCH',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(paidUpdate),
                })
                .then(function(response){
                    return response.json()
                })
                .then(function(data){
                    console.log(data)
                    console.log("Finished")
                    releaseTable();
                    window.location.replace("dessertGame.html")
                })        
            }
        })        
    }
    function bye(){
        //gets all ID's associated with table
        var indexes = []
        fetch(getIDs, {
            method: 'GET'
        })
        .then(function(response) {return response.json();})
        .then(function(data){
            console.log(data)
            for(const orderItem of data){
                indexes.push(orderItem.id)
                console.log(indexes)
            }
            console.log(indexes)
            for(const index of indexes){
                console.log("Inside")
                console.log(orderUrl.concat(index.toString()).concat("/"))
                console.log(index)
                var paidUpdate=
                {
                    "state": "PAID",
                    "id": index.toString()
                };
                fetch(orderUrl.concat(index.toString()).concat("/"),{
                    method: 'PATCH',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(paidUpdate),
                })
                .then(function(response){
                    return response.json()
                })
                .then(function(data){
                    console.log(data)
                    console.log("finished")
                    releaseTable();
                    window.location.replace("goodbye.html")
                })        
            }
        })
    }
    // adds events to determine which function to use
    // functions are identical except for the replace htmls
    var goDessert=document.getElementById("dessert")
    var goBye=document.getElementById("goodbye")
    goDessert.addEventListener("click",next)
    goBye.addEventListener("click",bye)
}