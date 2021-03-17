import './Beverage.css';
import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import beverage_image from './beverage_image.png'; 

function Beverage(beverageInfo) {

    var beverageOn = Array(17).fill(false);
    beverageOn[5] = true;
    beverageOn[7] = true;
    beverageOn[10] = true;
    //var randomIndex = (Math.random() * seconds) % 17;
    if(beverageInfo.seconds%2)
        beverageOn[beverageInfo.ID] = true;
    else
        beverageOn[beverageInfo.ID] = false;

    function BeverageClick(e){
        console.log("Beverage click" + beverageInfo.ID);

    }
//
    if(beverageOn[beverageInfo.ID]){
        return (

        <div className="Random">
            <Link to ="/BeverageInfo">                    
                <button onClick={BeverageClick} className="Beverage-Button">
                    <img src={beverage_image} className="Beverage-image"/>
                </button>
            </Link>  
        </div>   
        )
   
 
    }
    else{
        return(<div></div>
            );
    }
}
export default Beverage;