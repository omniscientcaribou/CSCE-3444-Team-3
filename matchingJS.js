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

    //funky functions
    function shuffle(){
        for (var i = ul.children.length; i >= 0; i--) {
            ul.appendChild(ul.children[Math.random() * i | 0]);
        } 
        selected=0;
    }
    const newGameMaker = (e) =>{
        for (const cardDiv of cardDivs){
            cardDiv.classList.remove("matched");
            cardDiv.classList.remove("select");
        }
        shuffle();
    };
    function stop(){
        for (const cardDiv of cardDivs){
            cardDiv.classList.add("stop");
        }
    }
    function cont(){
        for (const cardDiv of cardDivs){
            cardDiv.classList.remove("stop");
        }
    }

    var cardClicked=function(e){
        this.classList.toggle("select");
        selectedCards.push(this)
        selected=selected+1;
        console.log(selected);
        if(selected==2){
            if(selectedCards[0].type==selectedCards[1].type){
                selectedCards[0].classList.add("matched");
                selectedCards[1].classList.add("matched");
                selectedCards[0].classList.remove("select");
                selectedCards[1].classList.remove("select");
                selected=0;
                selectedCards=[];
                matchedCards = matchedCards+1;
            }
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
    //calls and stuff
    newGameDiv.addEventListener('click',newGameMaker);
    for (const cardDiv of cardDivs){
        cardDiv.addEventListener('click',cardClicked);
    }

}
