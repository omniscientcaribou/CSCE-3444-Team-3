//import Table from "./Table";
import './Table.css';
import table_image from './table_image.png';
import {useState} from 'react';
import axios from 'axios';

function TableManager(tableInfo) {
    var ID = tableInfo.ID;
    console.log(typeof ID)
    const [tableClick, setTableClick] = useState(0);
    function TableClick(e){
        if(tableClick > 0){
            setTableClick(0);
        }
        else
            setTableClick(tableInfo.ID);
    }
    function TableClickManager(e){
        axios.post('https://swe3444.herokuapp.com/api/task/',{
            role: 'Waitstaff',
            table_number: tableInfo.ID,
            call_manager: true
        })
        //if(tableClick > 0){
        //    setTableClick(0);
        //}
        //else
            setTableClick(tableInfo.ID);
    }
    function TableClickCash(e){
        //if(tableClick > 0){
        //    setTableClick(0);
        //}
        //else
            setTableClick(tableInfo.ID);
        axios.get('https://swe3444.herokuapp.com/api/ordercontent/')
        .then(res => {
                console.log("This happened at all")
                var orders = res.data;
                var tableOrders = new Array();
                console.log(orders.length)
                for(let i = 0; i < orders.length; i++){
                    //console.log(orders[i].table_number+tableInfo.ID)
                    if(orders[i].table_number===parseInt(ID)){
                        console.log("same number")
                        if(orders[i].state==="Delivered"){
                            tableOrders.push(orders[i].id);
                            console.log(orders[i].id)
                        }
                    }
                }
                for(let i = 0; i < tableOrders.length; i++){
                    let id = tableOrders[i];
                    let URL = "https://swe3444.herokuapp.com/api/ordercontent/";
                    let URLFull = URL.concat(id);
                    URLFull = URLFull.concat("/")
                    axios.patch(URLFull, {state:"Payed"}).catch(error => console.log(error))
                    .then(console.log(URLFull));                  
                }
            //console.log("Fetched");
        })
        //let id = tableInfo.ID;
        //let URL = 
        //axios.get('https://swe3444.herokuapp.com/api/ordercontent/').then(res=> {

        //})
    }


        return (
            <div className="Table">
                {tableInfo.type == "Manager" &&
                    <div>
                        <button onClick={TableClickManager} clasName="Table-Button">
                            <img src={table_image} className="Table-Image"/>
                        </button>
                        <div className="Table-ID">
                            {tableInfo.ID} 
                            {tableClick > 0 &&
                        
                            <div>
                                Sending Manager to this table
                            </div>
                        
                            }
                        </div>
                    </div>
                }   
                {tableInfo.type == "SplitBill" &&
                    <div>
                        <button onClick={TableClick} clasName="Table-Button">
                            <img src={table_image} className="Table-Image"/>
                        </button>
                        <div className="Table-ID">
                            {tableInfo.ID} 
                            {tableClick > 0 &&
                        
                            <div>
                                Bill has Been split
                            </div>
                        
                            }
                        </div>
                    </div>
                }
                {tableInfo.type == "Cash" &&
                    <div>
                        <button onClick={TableClickCash} clasName="Table-Button">
                            <img src={table_image} className="Table-Image"/>
                        </button>
                        <div className="Table-ID">
                            {tableInfo.ID} 
                            {tableClick > 0 &&
                        
                                <div>
                                    Bill paid in cash
                                </div>
                        
                            }
                            {
                            tableClick == 0 &&
                                <div>
                                    {tableInfo.bill}
                                </div>
                            }
                        </div>
                    </div>
                }        
            </div>           
        );

}

export default TableManager;