
import './Success.css';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import React, {Component} from 'react';

//this is a general success screen for any success message that needs to appear
function KitchenSuccess(){

    //gets the information from the URL 
    const { search } = useLocation()
    const searchParams = new URLSearchParams(search)
    const name = searchParams.get('name')
    const data = searchParams.get('data')
    const ID = searchParams.get('ID')
    const OrdersInProgress = searchParams.get('OtherOrders')
    const OrdersReady = searchParams.get('OrdersReady')
    const item = searchParams.get('item')
    const quantity = searchParams.get('quantity')

    //success template for refill, assistance and kitchen calling
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

    //success template for a table click 
    else if(name==="Table Orders Ready"){

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
    //success temmplate for the order success screen
    else if(name==="Order Sent"){
        return(
            <div className="Success">
                <div className="Sucess-Header">
                    {name} 
                    {
                        ID !== null &&
                            <div>
                                to table {ID}:
                            </div>
                    }
                </div>
                <div className="Data-Display">
                    
                  Order: {item}(item ID) X {quantity}

                  
                </div>
                <div className="Data-Display">
                    {data}
                </div>
 
            </div>

        );         
    }
    else {return(<div></div>);}
    
}
export default KitchenSuccess;