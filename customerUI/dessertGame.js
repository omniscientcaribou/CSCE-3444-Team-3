window.onload=function(e){
    const order_content = 'https://swe3444.herokuapp.com/api/task/'
    table_number= localStorage[1];

    function game(){
        //gets rid of other eventlisteners and returns cursor to default
        console.log(this);
        for(var choice of choices){
            choice.removeEventListener("click",game,once);
            choice.classList.add("disable")
        }
        //checks to make sure I can read it
        console.log(this.name)
        //chooses opponents move
        var randnum=Math.floor(Math.random()*3);

        //shows text saying what the opponent chose
        var compChoice=document.getElementById("compText");
        compChoice.classList.add("show");
        //shows box with the opponent choice
        var compArea=document.getElementById("opponent");
        compArea.classList.add("show");

        //choses image
        if(randnum==0){
            var rocky=document.getElementById("compRock");
            rocky.classList.add("show");
        }
        else if(randnum==1){
            var papyrus=document.getElementById("compPaper");
            papyrus.classList.add("show");
        }
        else if(randnum==2){
            var cut=document.getElementById("compScissors");
            cut.classList.add("show");
        }
        //hides other options
        if(this.name=="rock"){
            document.getElementById("paper").classList.add("hide")
            document.getElementById("scissors").classList.add("hide")
            if(randnum==2){
                document.getElementById("title").innerHTML="Congratulations! You won! The Waiter has been notified."
                //Calls waiter to tell them to come to table
                var payload = 
                {
                    "role" : "Customer",
                    "table_number" : table_number,
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
            }
            else{
                //tells them they have not won
                document.getElementById("title").innerHTML="I'm sorry, but you did not win."
            }
        }
        else if(this.name=="paper"){
            document.getElementById("rock").classList.add("hide")
            document.getElementById("scissors").classList.add("hide")
            if(randnum==0){
                document.getElementById("title").innerHTML="Congratulations! You won! The Waiter has been notified."
                //Calls waiter to tell them to come to table
                var payload = 
                {
                    "role" : "Customer",
                    "table_number" : table_number,
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
            }
            else{
                //tells them they have not won
                document.getElementById("title").innerHTML="I'm sorry, but you did not win."
            }
        }
        else if(this.name=="scissors"){
            document.getElementById("rock").classList.add("hide")
            document.getElementById("paper").classList.add("hide")
            if(randnum==1){
                document.getElementById("title").innerHTML="Congratulations! You won! The Waiter has been notified."
                //Calls waiter to tell them to come to table
                var payload = 
                {
                    "role" : "Customer",
                    "table_number" : table_number,
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
            }
            else{
                //tells them they have not won
                document.getElementById("title").innerHTML="I'm sorry, but you did not win."
            }
        }
        // goes to next page after 8 seconds to give time to read
        setTimeout(function(){
            window.location.replace("goodbye.html");
        },8000)

    }
    // only allows the button to be touched once
    const once={
        once : true
    };
    var choices =document.querySelectorAll('.button');
    for(var choice of choices){
        choice.addEventListener("click",game,once);
    }
}