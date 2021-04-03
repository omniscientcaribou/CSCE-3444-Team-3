//import Table from "./Table";
import './Table.css';
import table_image from './table_image.png';
import {useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

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
    function TableClickSplit(e) {

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
                        //if(orders[i].state==="Delivered"){
                        //if(orders[i].state==="DELIVERED"){
                            setTableClick(tableInfo.ID);
                            tableOrders.push(orders[i].id);
                            console.log(orders[i].id)
                        //}
                    }
                }
                for(let i = 0; i < tableOrders.length; i++){
                    let id = tableOrders[i];
                    let URL = "https://swe3444.herokuapp.com/api/ordercontent/";
                    let URLFull = URL.concat(id);
                    URLFull = URLFull.concat("/")
                    axios.patch(URLFull, {state:"PAID"}).catch(error => console.log(error))
                    .then(console.log(URLFull));                  
                }
            //console.log("Fetched");
        })
        //let id = tableInfo.ID;
        //let URL = 
        //axios.get('https://swe3444.herokuapp.com/api/ordercontent/').then(res=> {

        //})
    }

        var path = '/SplitSuccess?';
        path = path.concat("name=Split Bill");
        path = path.concat("&ID=" +tableInfo.ID);
        path = path.concat("&data="+tableInfo.bill);
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
                        <Link to={path}> 
                            <button onClick={TableClickSplit} clasName="Table-Button">
                                <img src={table_image} className="Table-Image"/>
                            </button>
                        </Link>
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
                            {
                                tableClick > 0 && 
                            
                                    <div>
                                        Bill paid in cash
                                    </div>
                        
                            }
                            {
                                tableClick == 0 &&
                                    <div>
                                        {parseFloat(tableInfo.bill).toFixed(2)}
                                    </div>
                            }
                            {/*
                                tableClick== 0 && tableInfo.Ready==true &&
                                    <div>
                                        Part of bill ready to be payed
                                    </div>*/
                            }
                        </div>
                    </div>
                }        
            </div>           
        );

}

export default TableManager;