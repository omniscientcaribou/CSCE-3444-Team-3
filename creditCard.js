window.onload = function(){
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
            window.location.replace("comments.html");
        }
    }
    var nextBut= document.getElementById("submit");
    nextBut.addEventListener("click",check);
    document.addEventListener("wheel", function(event){
        if(document.activeElement.type === "number"){
            document.activeElement.blur();
        }
    });
}

