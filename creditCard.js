var num=document.getElementById("cardNumbers").value.length;
alert(num);
alert("WHY 2")

windows.onload = function(){
    alert("WHY 2")
    function check(){
        alert("WHY")
        if(document.getElementById("cardNumbers").value.length!=16){
            alert("Invalid card input");
        }
        else {
            window.location.replace("http://bing.com");
        }
    }
    var nextBut= document.getElementById("submit");
    nextBut.addEventListener("click",check);
}

