
import './Success.css';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import React, {Component} from 'react';

function KitchenSuccess(){
    /*const [orders, setOrders] = useState([]);
    axios.get('https://swe3444.herokuapp.com/api/ordercontent/')
    .then(res => {
        setOrders(res.data);
        //console.log("Fetched");
    });   */ 

    const { search } = useLocation()
    const searchParams = new URLSearchParams(search)
    const name = searchParams.get('name')
    const data = searchParams.get('data')
    const ID = searchParams.get('ID')
    const OrdersInProgress = searchParams.get('OtherOrders')
    const OrdersReady = searchParams.get('OrdersReady')
    if (name==="Deliver Refill" || name==="Assistance Requested"||name==="Kitchen Calling"){
        return(
            <div className="Success">
                <div className="Sucess-Header">
                    {name} 
                    {
                        ID !== null &&
                            <div>
                                to Table {ID}
                            </div>
                    }
                </div>
                <div className="Data-Display">
                 {data}
                </div>
            </div>
        );
    }
    //else if(name==="Kitchen Calling"){

    //}
    else if(name==="Table Orders Ready"){
        /*const tableOrders =  new Array();
        for(let i =0; i < orders.length; i++){
            if(orders[i].table_number===ID){
                if(orders[i].state !== "Delivered" && orders[i].state!=="Paid"){
                    tableOrders.push(orders[i].id);
                }
            }
        }*/
        return(
            <div className="Success">
                <div className="Sucess-Header">
                    {name} 
                    {
                        ID !== null &&
                            <div>
                                at Table {ID}:
                            </div>
                    }
                </div>
                <div className="Data-Display">
                    
                  {data}
                  
                </div>
                <div>
                   These Orders are in progress:
                   <div>
                       {OrdersInProgress}
                    </div> 
                </div>
            </div>

        );       
    }
    else {return(<div></div>);}
    
}
export default KitchenSuccess;