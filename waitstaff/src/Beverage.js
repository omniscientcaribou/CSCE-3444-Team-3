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
    //var path = ''
    //if(beverageOn[beverageInfo.ID]){
    if(beverageInfo.Refill){
        var path = '/Success?';
        path = path.concat("name=Deliver Refill");
        path = path.concat("&ID=" + beverageInfo.ID);
        path = path.concat("&data=" + beverageInfo.RefillData);
        console.log(path);
        return (

        <div className="Random">
            {//<Link to ="/BeverageInfo" RefillData={beverageInfo.RefillData}>   
            }   
            {/*<Link to={{
            //    //pathname: '{"/BeverageInfo/"}',
               // pathname: '/BeverageInfo/' + ${beverageInfo.Refill},
               pathname: '/Success?name=assistancee&data=32',
                state: {
                    RefillData: "true",
                },
            }}>*/}
            {//<Link to='/Success?name=Deliver Refill&data=${beverageInfo.Refill}'>
            }
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