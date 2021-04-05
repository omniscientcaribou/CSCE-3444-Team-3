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
        var path = '/Success?';
        path = path.concat("name=Kitchen Calling");
        //path = path.concat("&ID=" + prop.ID);
        path = path.concat("&data=Waitstaff Report to Kitchen");
        return(
            <div className="Kitchen-Call">
                <Link to ={path}>
                    <button onClick={KitchenClick} className="KitchenButton">
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