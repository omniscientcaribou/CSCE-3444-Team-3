window.onload = function(){
    tableNum=2
    const totalUrl = 'https://swe3444.herokuapp.com/api/table_total/'.concat((tableNum).toString())
    //gets number of times the credit card html should revisit itself for other payers
    var cardNum = localStorage.getItem("times")
    function check(){
        var d= new Date()
        if(document.getElementById("cardNumbers").value.length!=16){
            alert("Card must have 16 digits");
        }
        else if(document.getElementById("year").value<d.getFullYear()){
            alert("Please input a valid non-expired year");
        }
        else if(document.getElementById("year").value==d.getFullYear() && document.getElementById("month").value<d.getMonth()){
            alert("Please choose a valid non-expired month");
        }
        else if(document.getElementById("month").value==-1){
            alert("Please choose a valid non-expired month");
        }
        else {
            if(cardNum>1){
                localStorage.setItem("times",parseInt(cardNum,10)-1)
                window.location.href="creditCard.html"
            }
            else{
                window.location.href="comments.html"
            }
        }
    }
    //adds event listener for submit button and disables the scroll wheel changing number input
    var nextBut= document.getElementById("submit");
    nextBut.addEventListener("click",check);
    document.addEventListener("wheel", function(event){
        if(document.activeElement.type === "number"){
            document.activeElement.blur();
        }
    });
}

