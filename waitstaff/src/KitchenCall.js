import axios from 'axios';
import {Link} from 'react-router-dom';
import './KitchenCall.css';

//This is the component that renders if theres a kitchen call in the task list
function KitchenCall(prop){
    //the component got clicked
    function KitchenClick(){
        console.log(prop.KitchenCallingID.length)
        //loops through every kitchencall task and deletes it
        for(let i = 0; i < prop.KitchenCallingID.length; i++){
            let id = prop.KitchenCallingID[i];
            let URL = "https://swe3444.herokuapp.com/api/task/";
            let URLFull = URL.concat(id);
            axios.delete(URLFull);
            console.log(URLFull);
        }
    }
    //only render if theres a kitchen call
    if(prop.KitchenCalling){
        //create the URL for the success screen
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