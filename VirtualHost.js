url = "https://swe3444.herokuapp.com/api/table/"
var tableList = new Array();

//calls the database to get information on tables
const apiCall = () => fetch(url).then(res => {
  if (res.ok) {
    return res.json()
  }
  throw new Error(res)
})
//builds an array of tables from api call
async function getData(){
    let results = await apiCall()
    for(property in results) {
        tableList.push(results[property]);
    }  
}

//this loop is where all the functions are called
async function theLoop(){
    await getData();
    changeColor()        
}

//changes the color of table elements in ui based on their state from the back end
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

//this is called onload, this runs our code that pings the database
//and changes the colors every 20 seconds
function runCode(){
    setInterval(theLoop, 20000);
}