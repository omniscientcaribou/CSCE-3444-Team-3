import TableManager from './TableManager.js';
function SplitBill(prop){
    return(
        <div className="Manager">
            <div className="Manager-Header">
                Split Bill option
            </div>
            <div className="Manager-Subheader">
                Click Table to split its bill N ways
            </div>
            <div className="Tables1">
                <TableManager ID="1" Seconds={prop.seconds}type="SplitBill"/>
                <TableManager ID="2" Seconds={prop.seconds}type="SplitBill"/>
                <TableManager ID="3" Seconds={prop.seconds}type="SplitBill"/>

                <TableManager ID="4" Seconds={prop.seconds}type="SplitBill"/>
                <TableManager ID="5" Seconds={prop.seconds}type="SplitBill"/>
                <TableManager ID="6" Seconds={prop.seconds}type="SplitBill"/>

                <TableManager ID="7" Seconds={prop.seconds}type="SplitBill"/>
                <TableManager ID="8" Seconds={prop.seconds}type="SplitBill"/>
                <TableManager ID="9" Seconds={prop.seconds} type="SplitBill"/>

                <TableManager ID="10" Seconds={prop.seconds}type="SplitBill"/>
                <TableManager ID="11" Seconds={prop.seconds}type="SplitBill"/>
                <TableManager ID="12" Seconds={prop.seconds}type="SplitBill"/>
                <TableManager ID="13" Seconds={prop.seconds}type="SplitBill"/>
                <TableManager ID="14" Seconds={prop.seconds}type="SplitBill"/>
                <TableManager ID="15" Seconds={prop.seconds}type="SplitBill"/>
                <TableManager ID="16" Seconds={prop.seconds}type="SplitBill"/>
            </div>
            <div className="Manager-Tables">

            </div>
        </div>
    );
}
export default SplitBill;