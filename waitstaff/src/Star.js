import './Star.css';
import React, { useState, useEffect } from 'react';
import star_image from './star.png'; 
import axios from 'axios';
import {Link} from 'react-router-dom';

function Star(starInfo) {
    //const [randomNothing, setRandom] = useState(0);
    //var starClick = beverageInfo.seconds%2;
    //const [starClick, setStarClick] = useState(1);
    
    function StarClick(e){
        
        //console.log("Beverage click" + beverageInfo.ID);
        //setStarClick(0);
        //starClick=0;
        //setRandom(randomNothing%2+1);
        //test();
        let id = starInfo.AssistanceID;
        let URL = "https://swe3444.herokuapp.com/api/task/";
        let URLFull = URL.concat(id);
        axios.delete(URLFull,)
        console.log(URLFull);

    }
    
    //console.log("starClick = " + starClick);
    if(starInfo.Assistance){
        //console.log("THIS SHOULD RENDER IT");
        return (

        <div className="Star">  
            <Link to='/Success'>             
                <button onClick={StarClick} className="Star-Button">
                    <img src={star_image} className="Star-image"/>
                </button>
            </Link>  
        </div>   
        );
   
 
    }
    else{
          
        return(<div></div>
            );
    }
}
export default Star;