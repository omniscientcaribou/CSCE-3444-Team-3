//import Table from "./Table";
import './Table.css';
import table_image from './table_image.png';
import {useState} from 'react';

function TableManager(tableInfo) {

    const [tableClick, setTableClick] = useState(0);
    function TableClick(e){
        console.log("button worked?" + tableInfo.ID);
        if(tableClick > 0){
            setTableClick(0);
        }
        else
            setTableClick(tableInfo.ID);
        console.log(tableClick); 
    }


        return (
            <div className="Table">
                {tableInfo.type == "Manager" &&
                    <div>
                        <button onClick={TableClick} clasName="Table-Button">
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