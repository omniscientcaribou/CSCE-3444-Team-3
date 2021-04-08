import './Beverage.css';
import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import beverage_image from './beverage_image.png'; 
import axios from 'axios';

function Beverage(beverageInfo) {

    function BeverageClick(e){
        //delete the refill task in the API to prevent it from reappering
        let id = beverageInfo.RefillID;
        let URL = "https://swe3444.herokuapp.com/api/task/";
        let URLFull = URL.concat(id);
        axios.delete(URLFull,)
        console.log(URLFull);
    }
//  

    //only display hte icon if there is a refill task for this table number
    if(beverageInfo.Refill){
        //create the URL path for the success screen so that it has the specific data
        
        var path = '/Success?';
        path = path.concat("name=Deliver Refill");
        path = path.concat("&ID=" + beverageInfo.ID);
        path = path.concat("&data=" + beverageInfo.RefillData);
        console.log(path);
        return (

        <div className="Random">

            <Link to = {path}>
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