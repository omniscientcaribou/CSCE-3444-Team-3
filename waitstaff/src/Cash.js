import TableManager from './TableManager.js';
function Cash(prop){
    return(
        <div className="Manager">
            <div className="Manager-Header">
                Pay in Cash Option
            </div>
            <div className="Manager-Subheader">
                Click Table to pay in cash
            </div>
            <div className="Tables1">
                <TableManager ID="1" Seconds={prop.seconds}type="Cash"/>
                <TableManager ID="2" Seconds={prop.seconds}type="Cash"/>
                <TableManager ID="3" Seconds={prop.seconds}type="Cash"/>

                <TableManager ID="4" Seconds={prop.seconds}type="Cash"/>
                <TableManager ID="5" Seconds={prop.seconds}type="Cash"/>
                <TableManager ID="6" Seconds={prop.seconds}type="Cash"/>

                <TableManager ID="7" Seconds={prop.seconds}type="Cash"/>
                <TableManager ID="8" Seconds={prop.seconds}type="Cash"/>
                <TableManager ID="9" Seconds={prop.seconds} type="Cash"/>

                <TableManager ID="10" Seconds={prop.seconds}type="Cash"/>
                <TableManager ID="11" Seconds={prop.seconds}type="Cash"/>
                <TableManager ID="12" Seconds={prop.seconds}type="Cash"/>
                <TableManager ID="13" Seconds={prop.seconds}type="Cash"/>
                <TableManager ID="14" Seconds={prop.seconds}type="Cash"/>
                <TableManager ID="15" Seconds={prop.seconds}type="Cash"/>
                <TableManager ID="16" Seconds={prop.seconds}type="Cash"/>
            </div>
            <div className="Manager-Tables">

            </div>
        </div>
    );
}
export default Cash;