import './Star.css';
import React, { useState, useEffect } from 'react';
import star_image from './star.png'; 
async function test(){
    const url = 'https://swe3444.herokuapp.com/api/item/'
    fetch(url, {method: 'GET'})
    .then(function(response) { return response.json(); })
    .then(function(json) {console.log(json);});
    //});
}
function Star(beverageInfo) {
    //const [starClick, setStarClick] = useState(beverageInfo.seconds%2);
    const [randomNothing, setRandom] = useState(0);
    //setStarClick(beverageInfo.seconds%2);
    var starClick = beverageInfo.seconds%2;
    function StarClick(e){
        
        //console.log("Beverage click" + beverageInfo.ID);
        //setStarClick(0);
        starClick=0;
        setRandom(randomNothing%2+1);
        test();

    }
    //console.log("starClick = " + starClick);
    if(starClick ){
        //console.log("THIS SHOULD RENDER IT");
        return (

        <div className="Star">                 
                <button onClick={StarClick} className="Star-Button">
                    <img src={star_image} className="Star-image"/>
                </button>
        </div>   
        );
   
 
    }
    else{
          
        return(<div></div>
            );
    }
}
export default Star;