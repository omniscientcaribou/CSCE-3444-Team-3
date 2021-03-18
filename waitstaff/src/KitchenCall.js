import {Link} from 'react-router-dom';
import './KitchenCall.css';
function KitchenCall(){
    function KitchenClick(){
        
    }
    return(
        <div className="Kitchen-Call">
            <Link to ="KitchenSuccess">
                <button onClick={KitchenClick} className KitchenButton>
                    kitchen call
                </button>
            </Link>
        </div>
    );
}
export default KitchenCall