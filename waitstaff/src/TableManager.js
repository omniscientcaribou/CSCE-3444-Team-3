//import Table from "./Table";
import './Table.css';
import table_image from './table_image.png';
import {useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

//this is a general table template that is used for all the tables that aren't the home page tables.
//each ahs its own click function 
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
        //split routes to a different page so nothing happens
    }
    function TableClickManager(e){
        //sends manager request to task list
        axios.post('https://swe3444.herokuapp.com/api/task/',{
            role: 'Waitstaff',
            table_number: tableInfo.ID,
            call_manager: true
        })
            //changes message over table
            setTableClick(tableInfo.ID);
    }
    function TableClickCash(e){

        //requests the orders so it can find which orders to set to "PAID"    
        axios.get('https://swe3444.herokuapp.com/api/ordercontent/')
        .then(res => {
                
                var orders = res.data;
                var tableOrders = new Array();
                console.log(orders.length)
                //parse through the orders list to find orders that match the table chosen
                for(let i = 0; i < orders.length; i++){
                    if(orders[i].table_number===parseInt(ID)){
                        console.log("same number")

                        setTableClick(tableInfo.ID);
                        tableOrders.push(orders[i].id);
                        console.log(orders[i].id)

                    }
                }
                //set the orders that match to PAID
                for(let i = 0; i < tableOrders.length; i++){
                    let id = tableOrders[i];
                    let URL = "https://swe3444.herokuapp.com/api/ordercontent/";
                    let URLFull = URL.concat(id);
                    URLFull = URLFull.concat("/")
                    axios.patch(URLFull, {state:"PAID"}).catch(error => console.log(error))
                    .then(console.log(URLFull));                  
                }
                //set the table to released
                let URL = "https://swe3444.herokuapp.com/api/release_table/"//<TABLE_NUMBER>"
                let URLFull = URL.concat(tableInfo.ID);
                axios.get(URLFull).catch(error => console.log(error)).then(console.log(URLFull));

            //console.log("Fetched");
        })

    }

        var path = '/SplitSuccess?';
        path = path.concat("name=Split Bill");
        path = path.concat("&ID=" +tableInfo.ID);
        path = path.concat("&data="+tableInfo.bill);
        return (
            
            <div className="Table">
                {//option 1: a table thats in the "CALL MANAGER" tab
                tableInfo.type == "Manager" &&
                    <div>
                        <button onClick={TableClickManager} clasName="Table-Button">
                            <img src={table_image} className="Table-Image"/>
                        </button>
                        <div className="Table-ID">
                            {tableInfo.ID} 
                            {//if the user has clicked the table 
                            tableClick > 0 &&
                        
                            <div>
                                Sending Manager to this table
                            </div>
                        
                            }{
                                //if the user hasnt clicked the table, show nothing
                            }
                        </div>
                    </div>
                }   
                {//option 2: a table in the "SPLIT BILL" tab under the payment options.
                tableInfo.type == "SplitBill" &&
                    <div>
                        <Link to={path}> 
                            <button onClick={TableClickSplit} clasName="Table-Button">
                                <img src={table_image} className="Table-Image"/>
                            </button>
                        </Link>
                        <div className="Table-ID">
                            {tableInfo.ID} 
                            {//if the user has clicked the table 
                            tableClick > 0 &&
                        
                            <div>
                                Bill has Been split
                            </div>
                        
                            }{
                                //if the user hasnt clicked the table, show nothing
                            }
                        </div>
                    </div>
                }
                {//option 3: a table under the "CASH" tab under the payment options
                tableInfo.type == "Cash" &&
                    <div>
                        <button onClick={TableClickCash} clasName="Table-Button">
                            <img src={table_image} className="Table-Image"/>
                        </button>
                        <div className="Table-ID">
                            {tableInfo.ID} 
                            {//if the user has clicked the table 
                                tableClick > 0 && 
                            
                                    <div>
                                        Bill paid in cash
                                    </div>
                        
                            }
                            {//if the user hasnt clicked the table
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