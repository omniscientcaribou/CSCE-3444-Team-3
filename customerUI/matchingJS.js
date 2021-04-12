//Elements
window.onload = function(){
    const newGameDiv= document.querySelector('.new-game');  
    const cardDivs = document.querySelectorAll('.card ');
    const board= document.getElementById("board");
    var selectedCards=[];
    var matchedCards=0;
    //shuffles when window loads
    var ul = document.querySelector('ul');
    //just need to run this once and by adding it here
    //it's easier for me
    for (var i = ul.children.length; i >= 0; i--) {
        ul.appendChild(ul.children[Math.random() * i | 0]);
    } 
    
    var selected=0;

    //function to shuffle cards
    function shuffle(){
        for (var i = ul.children.length; i >= 0; i--) {
            ul.appendChild(ul.children[Math.random() * i | 0]);
        } 
        selected=0;
    }
    //resets the board
    const newGameMaker = (e) =>{
        for (const cardDiv of cardDivs){
            cardDiv.classList.remove("matched");
            cardDiv.classList.remove("select");
        }
        shuffle();
    };
    //disables other cards while telling user they are wrong
    function stop(){
        for (const cardDiv of cardDivs){
            cardDiv.classList.add("stop");
        }
    }
    //re-enables cards
    function cont(){
        for (const cardDiv of cardDivs){
            cardDiv.classList.remove("stop");
        }
    }

    //function for when a card is clicked
    var cardClicked=function(e){
        //shows ard and adds it array to store
        this.classList.toggle("select");
        selectedCards.push(this)
        selected=selected+1;
        console.log(selected);
        //checks if two cards have been selected
        if(selected==2){
            //if the cards match then they get changed matched and resets the storing array for new cards and prevents them from being selected again
            if(selectedCards[0].type==selectedCards[1].type){
                selectedCards[0].classList.add("matched");
                selectedCards[1].classList.add("matched");
                selectedCards[0].classList.remove("select");
                selectedCards[1].classList.remove("select");
                selected=0;
                selectedCards=[];
                matchedCards = matchedCards+1;
            }
            //if the cards do not match it gives them a 1.5 second of time to see it is wrong
            else{
                stop();
                setTimeout(function(){
                    selectedCards[0].classList.remove("wrong");
                    selectedCards[1].classList.remove("wrong");
                    selectedCards[0].classList.remove("select");
                    selectedCards[1].classList.remove("select");
                    selected=0;
                    console.log(selectedCards[0].type)
                    console.log(selectedCards[1].type)
                    selectedCards=[];
                    cont();
                },1500)
                selectedCards[0].classList.add("wrong");
                selectedCards[1].classList.add("wrong");
            }
        }
    };

    //checks that the password is corrected before leaving for normal pages
    function leave(){
        if(document.getElementById("password").value=="Pineapple Pie"){
            window.location.href="gameTab.html"
        }
        else{
            alert("Please input the correct password in order to return to normal functionality.")
        }
    }

    //adds event listeners to go to correct functions
    var leaveBut=document.getElementById("home");
    leaveBut.addEventListener("click",leave);


    newGameDiv.addEventListener('click',newGameMaker);
    for (const cardDiv of cardDivs){
        cardDiv.addEventListener('click',cardClicked);
    }

}
