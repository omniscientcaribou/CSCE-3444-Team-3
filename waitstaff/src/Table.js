//import Table from "./Table";
import './Table.css';
import table_image from './table_image.png';
import Beverage from './Beverage';
import Star from './Star';
import {useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

function Table(tableInfo) {

    const [tableClick, setTableClick] = useState(0);
     function TableClick(e){

        for(let i = 0; i < tableInfo.Orders.length; i++){
            let id = tableInfo.Orders[i].id;
            let URL = "https://swe3444.herokuapp.com/api/ordercontent/";
            let URLFull = URL.concat(id);
            URLFull = URLFull.concat("/")
            axios.patch(URLFull, {state:"DELIVERED"}).catch(error => console.log(error))
            .then(console.log(URLFull));
            

        }
    }


        var ordersReady = "\n";
        for(let i = 0; i < tableInfo.Orders.length; i++){
            let num = tableInfo.Orders[i].id;
            let n = num.toString();
            //ordersReady.concat(n);
            ordersReady += n + "  ";
            //console.log(tableInfo.Orders[i].id);
        }
        console.log(ordersReady);
        var path = '/Success?';
        path = path.concat("name=Table Orders Ready");
        path = path.concat("&ID=" +tableInfo.ID);
        path = path.concat("&data=");    
        for(let i = 0; i < tableInfo.Orders.length; i++){
            path = path.concat(tableInfo.Orders[i].id + " ");    
        }
        if(tableInfo.Orders.length > 0){
            path = path.concat("&OrdersReady:true")
        }     
        path = path.concat("&OtherOrders=")
        for(let i = 0; i < tableInfo.AllOrders.length; i++){
            //console.log(typeof tableInfo.ID + typeof tableInfo.AllOrders.table_number)
            if(tableInfo.AllOrders[i].table_number===parseInt(tableInfo.ID)){
                //console.log(tableInfo.AllOrders[i].state)
                //if(tableInfo.AllOrders[i].state!=="Ready to Deliver" &&tableInfo.AllOrders[i].state!=="Delivered" && tableInfo.AllOrders[i].state!=="Payed" && tableInfo.AllOrders[i].state!=="Complete"){
                if(tableInfo.AllOrders[i].state=="ORDERED" || tableInfo.AllOrders[i].state== "IN PROGRESS") {
                    path = path.concat(tableInfo.AllOrders[i].id + " ")
                    //console.log(tableInfo.AllOrders[i].id)
                }
            }
        }     
        return (
            <div className="Table">
                <Link to ={path}>
                    <button onClick={TableClick} clasName="Table-Button">
                    <div className="Table-ID">
                    {tableInfo.ID} 
                    {tableInfo.Orders.length > 0 && 
                        <div>
                            Orders ready: 
                            {"\n"}
                            {ordersReady}
                            
                        </div>
                    }
                        </div>
                        <img src={table_image} className="Table-Image"/>
                    </button>
                </Link>

                {/*console.log(tableInfo.Refill + tableInfo.ID)*/}
                {
                }
                <Beverage ID={tableInfo.ID} seconds={tableInfo.Seconds} Refill={tableInfo.Refill} RefillID={tableInfo.RefillsID} RefillData={tableInfo.RefillData}/>
                <Star ID={tableInfo.ID} seconds={tableInfo.Seconds} Assistance={tableInfo.Assistance} AssistanceID={tableInfo.AssistanceID}/>
                
            </div>           
        );

}

export default Table;