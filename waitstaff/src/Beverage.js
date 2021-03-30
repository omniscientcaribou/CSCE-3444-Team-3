import './Beverage.css';
import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import beverage_image from './beverage_image.png'; 
import axios from 'axios';

function Beverage(beverageInfo) {

    function BeverageClick(e){
        let id = beverageInfo.RefillID;
        let URL = "https://swe3444.herokuapp.com/api/task/";
        let URLFull = URL.concat(id);
        axios.delete(URLFull,)
        console.log(URLFull);
    }
//
    //if(beverageOn[beverageInfo.ID]){
    if(beverageInfo.Refill){
        return (

        <div className="Random">
            {//<Link to ="/BeverageInfo" RefillData={beverageInfo.RefillData}>   
            }   
            <Link to={{
                //pathname: '{"/BeverageInfo/"}',
               // pathname: '/BeverageInfo/' + ${beverageInfo.Refill},
               pathname: '/BeverageInfo/',
                state: {
                    RefillData: "true",
                },
            }}>
           
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