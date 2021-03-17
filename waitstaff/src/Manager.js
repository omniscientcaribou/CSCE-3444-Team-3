import './Manager.css';
import TableManager from './TableManager.js';
function Manager(prop){
    return(
        <div className="Manager">
            <div className="Manager-Header">
                Call Manager Options
            </div>
            <div className="Manager-Subheader">
                Click Table To Send Manager To It
            </div>
            <div className="Tables1">
                <TableManager ID="1" Seconds={prop.seconds}type="Manager"/>
                <TableManager ID="2" Seconds={prop.seconds}type="Manager"/>
                <TableManager ID="3" Seconds={prop.seconds}type="Manager"/>

                <TableManager ID="4" Seconds={prop.seconds}type="Manager"/>
                <TableManager ID="5" Seconds={prop.seconds}type="Manager"/>
                <TableManager ID="6" Seconds={prop.seconds}type="Manager"/>

                <TableManager ID="7" Seconds={prop.seconds}type="Manager"/>
                <TableManager ID="8" Seconds={prop.seconds}type="Manager"/>
                <TableManager ID="9" Seconds={prop.seconds}type="Manager"/>

                <TableManager ID="10" Seconds={prop.seconds}type="Manager"/>
                <TableManager ID="11" Seconds={prop.seconds}type="Manager"/>
                <TableManager ID="12" Seconds={prop.seconds}type="Manager"/>
                <TableManager ID="13" Seconds={prop.seconds}type="Manager"/>
                <TableManager ID="14" Seconds={prop.seconds}type="Manager"/>
                <TableManager ID="15" Seconds={prop.seconds}type="Manager"/>
                <TableManager ID="16" Seconds={prop.seconds}type="Manager"/>
            </div>
            <div className="Manager-Tables">

            </div>
        </div>
    );
}

export default Manager;
