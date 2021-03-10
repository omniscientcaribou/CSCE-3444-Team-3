//import Table from "./Table";
import './Table.css';
import table_image from './table_image.png';
import Beverage from './Beverage';
import {useState} from 'react';

function Table(tableInfo) {

    const [tableClick, setTableClick] = useState(0);
    function TableClick(e){
        console.log("button worked?" + tableInfo.ID);
        if(tableClick == tableInfo.ID){
            setTableClick(0);
        }
        else
            setTableClick(tableInfo.ID);
        console.log(tableClick); 
    }

    //if (typeof table.ID == 'undefined'){
    //    Table.ID = -1;
   // }
   // Table.ID++;

   if(tableClick == tableInfo.ID){
        return (
            <div className="Table">
                <button onClick={TableClick}>
                    <img src={table_image} className="Table-image"/>
                </button>
                <div className="Table-ID">
                    {tableInfo.ID} this table is clicked
                </div>
                <Beverage ID={tableInfo.ID} seconds={tableInfo.Seconds}/>
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
                {tableInfo.ID}
            </div>
            <Beverage ID={tableInfo.ID} seconds={tableInfo.Seconds}/>
        </div>
    );
    }
}

export default Table;