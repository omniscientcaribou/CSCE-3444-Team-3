window.onload=function(){
    tableNum=2
    const totalUrl = 'https://swe3444.herokuapp.com/api/table_total/'.concat((tableNum).toString().concat("/"))
    const order_content = 'https://swe3444.herokuapp.com/api/task/'
    //function to split bill
    function splitter(){
        //getes the inputer split amount
        var splitNum = document.getElementById("split").value
        console.log(splitNum)
        //checks that it's atleast 2 since other wise you don't need to split the bill
        if(splitNum<2){
            alert("The bill has to be split atleast 2 ways")
        }
        else{
            //checks that the total payers is the same as the split and that there are no negative payers
            var cashNum=document.getElementById("cashPay").value
            var cardNum=document.getElementById("cardPay").value
            if(cardNum <0 || cashNum<0){
                alert("Number of cash payers and card payers must be atleast 0")
            }
            else if((parseInt(cardNum,10)+parseInt(cashNum,10))!=splitNum){
                alert("The number of cash payers and card payers combined is not equal to the amount specified to split the bill")
                console.log(cardNum)
                console.log(cashNum)
                console.log(cashNum+cardNum)
            }
            else{
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
                //goes to credit card unless there are no credit card payers. If so then it goes to comments
                localStorage.setItem("times",cardNum.toString())
                if(cardNum==0){
                    window.location.href="comments.html"
                }
                else{
                    window.location.href="creditCard.html"
                }
            }
        }
    }
    //links submit button to splitter function
    var next = document.getElementById("Submit")
    next.addEventListener("click",splitter)
}