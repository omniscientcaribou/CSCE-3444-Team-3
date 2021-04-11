import TableManager from './TableManager.js';
import React, {Component} from 'react';
import axios from 'axios';
//component that contains the list of tables to choose from for cash payment
class Cash extends Component {
    //these states store the bills for all 16 tables and the total list of orders
    state = {
        bills: [],
        orders: [],
        //ready: [],
    }
    //runs the first tiem
    componentDidMount(){
        //gets the bills for each table
        axios.get('https://swe3444.herokuapp.com/api/all_tables/')
        .then(res => {
            this.setState({
                bills: res.data
            })
            //console.log("Fetched");
        })
        //gets the orders 
        axios.get('https://swe3444.herokuapp.com/api/ordercontent/')
        .then(res=> {
            this.setState({
                orders: res.data
            })
        })

    }
    render(){
        const { bills } = this.state;   //creates a variable fo rthe bills
        const { orders } = this.state;  //creates a variable for the orders
        let tables = [];
        let tablesReady = new Array(16);
        //create the array of tables that are displayed
        for(let i = 1; i <= 16; i++){
            console.log(i);
            tables.push(
                <TableManager 
                ID={i}
                type="Cash"
                bill={bills[i]}
                //Ready={tablesReady[i-1]}
                />
            );
            //console.log(tableOrders[i-1] + i);
        }

        return(
            <div className="Manager">
                <div className="Manager-Header">
                    Pay in Cash Option
                </div>
                <div className="Manager-Subheader">
                    Click Table to pay in cash
                </div>
                <div className="Tables1">

                    {tables}
                </div>
                <div className="Manager-Tables">

                </div>
            </div>
        );
    }
}
export default Cash;