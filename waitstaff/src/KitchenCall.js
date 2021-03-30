import axios from 'axios';
import {Link} from 'react-router-dom';
import './KitchenCall.css';
function KitchenCall(prop){
    function KitchenClick(){
        let id = prop.KitchenCallingID;
        let URL = "https://swe3444.herokuapp.com/api/task/";
        let URLFull = URL.concat(id);
        axios.delete(URLFull);
        console.log(URLFull);
    }
    if(prop.KitchenCalling){
        return(
            <div className="Kitchen-Call">
                <Link to ="Success">
                    <button onClick={KitchenClick} className KitchenButton>
                        kitchen call
                    </button>
                </Link>
            </div>
        );
    }
    else{
        return(<div></div>);
    }
}
export default KitchenCall