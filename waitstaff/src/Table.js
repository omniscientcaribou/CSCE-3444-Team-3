//import Table from "./Table";
import './Table.css';
import table_image from './table_image.png';
import beverage_image from './beverage_image.png';

function Table(table) {
    function TableClick(e){
 

    }
    //if (typeof table.ID == 'undefined'){
    //    Table.ID = -1;
   // }
   // Table.ID++;
    return (
        <div className="Table">
            <div className="Table-Header">
                <img src={table_image} className="Table-image" onClick={TableClick}/>
                <div className="Table-ID">
                    {table.ID}
                </div>
                <img src={beverage_image} className="Beverage-image"/>
            </div>
        </div>
    );
}

export default Table;