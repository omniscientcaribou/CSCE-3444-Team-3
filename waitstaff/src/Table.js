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
        //console.log("button worked?" + tableInfo.ID);
        //if(tableClick > 0){
        //    setTableClick(0);
        //}
        //else
        //    setTableClick(tableInfo.ID);
        //console.log(tableClick); 
        for(let i = 0; i < tableInfo.Orders.length; i++){
            let id = tableInfo.Orders[i].id;
            let URL = "https://swe3444.herokuapp.com/api/ordercontent/";
            let URLFull = URL.concat(id);
            axios.patch(URLFull, {state:"Delivered"}).catch(error => console.log(error))
            .then(console.log(URLFull));
            

        }
    }

    //if(tableInfo.Refill===true)
        //console.log(tableInfo.RefillData)
        //console.log(tableInfo.Orders + tableInfo.ID);
        var ordersReady = "\n";
        for(let i = 0; i < tableInfo.Orders.length; i++){
            let num = tableInfo.Orders[i].id;
            let n = num.toString();
            //ordersReady.concat(n);
            ordersReady += n + "  ";
            //console.log(tableInfo.Orders[i].id);
        }
        console.log(ordersReady);
        return (
            <div className="Table">
                <Link to ="Success">
                    <button onClick={TableClick} clasName="Table-Button">
                        <img src={table_image} className="Table-Image"/>
                    </button>
                </Link>
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
                {/*console.log(tableInfo.Refill + tableInfo.ID)*/}
                {
                }
                <Beverage ID={tableInfo.ID} seconds={tableInfo.Seconds} Refill={tableInfo.Refill} RefillID={tableInfo.RefillsID} RefillData={tableInfo.RefillData}/>
                <Star ID={tableInfo.ID} seconds={tableInfo.Seconds} Assistance={tableInfo.Assistance} AssistanceID={tableInfo.AssistanceID}/>
                
            </div>           
        );

}

export default Table;