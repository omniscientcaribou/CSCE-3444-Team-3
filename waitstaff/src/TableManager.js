//import Table from "./Table";
import './Table.css';
import table_image from './table_image.png';
import {useState} from 'react';
import axios from 'axios';

function TableManager(tableInfo) {

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
        if(tableClick > 0){
            setTableClick(0);
        }
        else
            setTableClick(tableInfo.ID);
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
                        <button onClick={TableClick} clasName="Table-Button">
                            <img src={table_image} className="Table-Image"/>
                        </button>
                        <div className="Table-ID">
                            {tableInfo.ID} 
                            {tableClick > 0 &&
                        
                            <div>
                                Bill paid in cash
                            </div>
                        
                            }
                        </div>
                    </div>
                }        
            </div>           
        );

}

export default TableManager;