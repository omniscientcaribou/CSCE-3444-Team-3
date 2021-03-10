import {useState} from 'react';
import {Link} from 'react-router-dom';
function SideBar(){
    return(
        <div className="SideBar">
            <Link to="/">Home</Link>
            <Link to="/pay">pay</Link>
            <Link to="/manager">manager</Link>
            <Link to="/order">order</Link>
        </div>
    );
}
export default SideBar;
    /*const [pay, setPay] = useState(false);
    const [manage, setManage] = useState(false);
    const [order, setOrder] = useState(false);
    function PaymentClick(){
        console.log("payment clicked");
        if(pay)
            pay =false;
        else    
            pay = true;
    }
    function ManagerClick(){
        console.log("Manager clicked");
        if(pay)
            pay =false;
        else    
            pay = true;
    }
    function OrderClick(){
        console.log("order clicked");
        if(pay)
            pay =false;
        else    
            pay = true;
    }
    return(
        <div className="SideBar">
            <button onClick={PaymentClick}>
                Payment Options
            </button>
            <button onClick={ManagerClick}>
                Call a Manager
            </button>
            <button onClick={OrderClick}>
                Order
            </button>
        </div>
    );

}
export default SideBar;*/