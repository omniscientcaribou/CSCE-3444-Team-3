window.onload=function(e){
    function game(){
        //gets rid of other eventlisteners and returns cursor to default
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
                //put waiter call here
            }
            else{
                document.getElementById("title").innerHTML="I'm sorry, but you did not win."
            }
        }
        else if(this.name=="paper"){
            document.getElementById("rock").classList.add("hide")
            document.getElementById("scissors").classList.add("hide")
            if(randnum==0){
                document.getElementById("title").innerHTML="Congratulations! You won! The Waiter has been notified."
                //put waiter call here
            }
            else{
                document.getElementById("title").innerHTML="I'm sorry, but you did not win."
            }
        }
        else if(this.name=="scissors"){
            document.getElementById("rock").classList.add("hide")
            document.getElementById("paper").classList.add("hide")
            if(randnum==1){
                document.getElementById("title").innerHTML="Congratulations! You won! The Waiter has been notified."
                //put waiter call here
            }
            else{
                document.getElementById("title").innerHTML="I'm sorry, but you did not win."
            }
        }
        setTimeout(function(){
            window.location.replace("goodbye.html");
        },10000)

    }
    const once={
        once : true
    };
    var choices =document.querySelectorAll('.button');
    for(var choice of choices){
        choice.addEventListener("click",game,once);
    }
}