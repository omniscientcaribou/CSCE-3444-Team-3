//import Table from "./Table";
import './Table.css';
import table_image from './table_image.png';
import Beverage from './Beverage';
import Star from './Star';
import {useState} from 'react';

function Table(tableInfo) {

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
                <button onClick={TableClick} clasName="Table-Button">
                    <img src={table_image} className="Table-Image"/>
                </button>
                <div className="Table-ID">
                    {tableInfo.ID} 
                    {tableClick > 0 && 
                        <div>
                        this table is clicked
                        </div>
                    }
                </div>
                <Beverage ID={tableInfo.ID} seconds={tableInfo.Seconds}/>
                <Star ID={tableInfo.ID} seconds={tableInfo.Seconds}/>
                
            </div>           
        );

}

export default Table;