import {useState} from 'react';
import {Link} from 'react-router-dom';
import './SideBar.css'
//the sidebar component contains the tabs that are always displayed, home, pay, call manager,order
function SideBar(){
    return(
        <div className="SideBar">
           
                <Link to="/" className="Side-Button-Area">
                    <button className="Side-Bar-Button">
                        Home
                   </button>
                </Link>


            <Link to="/pay">                    
                <button className="Side-Bar-Button">
                    Pay
                </button>
            </Link>


            <Link to="/manager">                    
                <button className="Side-Bar-Button">
                    Call Manager
                </button>
            </Link>


            <Link to="/order">                    
                <button className="Side-Bar-Button">
                    Order
                </button>
            </Link>

        </div>
    );
}
export default SideBar;
