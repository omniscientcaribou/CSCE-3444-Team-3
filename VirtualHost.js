url = "https://swe3444.herokuapp.com/api/table/"
var tableList = new Array();


const apiCall = () => fetch(url).then(res => {
  if (res.ok) {
    return res.json()
  }
  throw new Error(res)
})
async function getData(){
    let results = await apiCall()
    for(property in results) {
        tableList.push(results[property]);
    }  
}

async function theLoop(){
    await getData();
    changeColor()        
}

function changeColor(){
    console.log("change color");
    console.log(tableList);
    for(var i = 0; i < tableList.length; i++){
        console.log(i);
        console.log("here");
        console.log(i);
        console.log(tableList[i].state);
        if(tableList[i].state == true){
            console.log(tableList[i].id);
            tempid = "table" + tableList[i].id;
            table = document.getElementById(tempid);
            table.textContent = "Occupied";
            table.style.backgroundColor = "rgb(148,93,114)";
        }
        else{
            tempid = "table" + tableList[i].id;
            table = document.getElementById(tempid);
            table.textContent = tempid;
            table.style.backgroundColor = "rgb(116, 195, 200)";
        }
    }
}

function runCode(){
    setInterval(theLoop, 20000);
}