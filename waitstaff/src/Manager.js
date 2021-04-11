import './Manager.css';
import TableManager from './TableManager.js';
//this component is the content view that contains the tables and header for the manager tab
function Manager(prop){
    //the array of dynamically generated table templates for manager tables
    let tables = [];
    for(let i = 1; i <= 16; i++){
        tables.push(
            <TableManager 
            ID={i} 
            Seconds={prop.seconds}
            type="Manager"
            />
        );
    }
    return(
        <div className="Manager">
            <div className="Manager-Header">
                Call Manager Options
            </div>
            <div className="Manager-Subheader">
                Click Table To Send Manager To It
            </div>
            <div className="Tables1">
                {
                    //inserting the list of tables into the component
                tables
                }

            </div>
            <div className="Manager-Tables">

            </div>
        </div>
    );
}

export default Manager;
