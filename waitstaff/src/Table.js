//import Table from "./Table";
import './Table.css';
import table_image from './table_image.png';
import Beverage from './Beverage';
import {useState} from 'react';

function Table(table) {

    const [tableClick, setTableClick] = useState(0);
    function TableClick(e){
        console.log("button worked?" + table.ID);
        if(tableClick == table.ID){
            setTableClick(0);
        }
        else
            setTableClick(table.ID);
        console.log(tableClick); 
    }

    //if (typeof table.ID == 'undefined'){
    //    Table.ID = -1;
   // }
   // Table.ID++;

   if(tableClick == table.ID){
        return (
            <div className="Table">
                <button onClick={TableClick}>
                    <img src={table_image} className="Table-image"/>
                </button>
                <div className="Table-ID">
                    {table.ID} this table is clicked
                </div>
                <Beverage ID={table.ID} seconds={table.Seconds}/>
            </div>           
        );
   }
   else{
    return (
        <div className="Table">
            <button onClick={TableClick}>
                <img src={table_image} className="Table-image"/>
            </button>
            <div className="Table-ID">
                {table.ID}
            </div>
            <Beverage ID={table.ID} seconds={table.Seconds}/>
        </div>
    );
    }
}

export default Table;