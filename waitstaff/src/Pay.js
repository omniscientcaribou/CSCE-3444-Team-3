import './Pay.css';
import {Link} from 'react-router-dom';
function Pay(prop){
    return(
        <div className="Pay"> 
            <div className="Pay-Header">
                Payment Options
            </div>
            <div className="Button-Bar">
                <Link to="/Cash" className="Side-Button-Area">
                        <button className="Side-Bar-Button">
                            Pay In Cash
                       </button>
                </Link>

                <Link to="/SplitBill">                    
                    <button className="Side-Bar-Button">
                        Split Bill
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default Pay;