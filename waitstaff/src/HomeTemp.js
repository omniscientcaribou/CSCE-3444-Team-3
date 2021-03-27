import Table from './Table';
import KitchenCall from './KitchenCall';
import './Home.css'
async function test(){
    const url = 'https://swe3444.herokuapp.com/api/task/'
    var returner =  await fetch(url, {method: 'GET'})
    .then(function(response) { return response.json(); })
    .then(function(json) {return json;});//console.log(json);});
    //});
    console.log(returner);
    return returner;
}
function Home(prop){
    var json = test();
    var refills = new Array(16).fill(false);
    var refillData = new Array(16);
    var assistance = new Array(16);
    console.log(json);
    console.log(json.length);
    for(var i = 1; i <= 16; i++){
        for(var j = 0; j < json.length; j++){
            //if(json[j].table_number=i)
            //    if(json[j].refill_request=true){
            //        refills[i-1] = true;
            //        refillData[i-1] = json[j].drink_selections;
            //    }
            console.log(json[j].id);
                    
        }
    }
    //console.log(refills[7] + " " + refillData[7]);
    return(
        <div className="Top">
            <div className="Tables">
                <Table ID="1" Seconds={prop.seconds}/>
                <Table ID="2" Seconds={prop.seconds}/>
                <Table ID="3" Seconds={prop.seconds}/>

                <Table ID="4" Seconds={prop.seconds}/>
                <Table ID="5" Seconds={prop.seconds}/>
                <Table ID="6" Seconds={prop.seconds}/>

                <Table ID="7" Seconds={prop.seconds}/>
                <Table ID="8" Seconds={prop.seconds}/>
                <Table ID="9" Seconds={prop.seconds}/>

                <Table ID="10" Seconds={prop.seconds}/>
                <Table ID="11" Seconds={prop.seconds}/>
                <Table ID="12" Seconds={prop.seconds}/>
                <Table ID="13" Seconds={prop.seconds}/>
                <Table ID="14" Seconds={prop.seconds}/>
                <Table ID="15" Seconds={prop.seconds}/>
                <Table ID="16" Seconds={prop.seconds}/>
                <KitchenCall Seconds={prop.seconds}/>
            </div>

        </div>
    );
}

export default Home;