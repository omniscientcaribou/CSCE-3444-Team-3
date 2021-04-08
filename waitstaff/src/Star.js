import './Star.css';
import React, { useState, useEffect } from 'react';
import star_image from './star.png'; 
import axios from 'axios';
import {Link} from 'react-router-dom';

function Star(starInfo) {

    
    function StarClick(e){
        
        let id = starInfo.AssistanceID;
        let URL = "https://swe3444.herokuapp.com/api/task/";
        let URLFull = URL.concat(id);
        axios.delete(URLFull,)
        console.log(URLFull);

    }
    

    if(starInfo.Assistance){
        var path = '/Success?';
        path = path.concat("name=Assistance Requested");
        path = path.concat("&ID=" + starInfo.ID);

        return (

        <div className="Star">  
            <Link to={path}>             
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