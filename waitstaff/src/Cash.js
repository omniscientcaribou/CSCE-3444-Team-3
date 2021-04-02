import TableManager from './TableManager.js';
import React, {Component} from 'react';
import axios from 'axios';
class Cash extends Component {
    state = {
        bills: [],

    }
    componentDidMount(){
        axios.get('https://swe3444.herokuapp.com/api/all_tables/')
        .then(res => {
            this.setState({
                bills: res.data
            })
            //console.log("Fetched");
        })
    }
    render(){
        const { bills } = this.state;
        let tables = [];
        for(let i = 1; i <= 16; i++){
            console.log(i);
            tables.push(
                <TableManager 
                ID={i} 
                type="Cash"
                bill={bills[i-1]}
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
                    {/*<TableManager ID="1" Seconds={prop.seconds}type="Cash"/>
                    <TableManager ID="2" Seconds={prop.seconds}type="Cash"/>
                    <TableManager ID="3" Seconds={prop.seconds}type="Cash"/>

                    <TableManager ID="4" Seconds={prop.seconds}type="Cash"/>
                    <TableManager ID="5" Seconds={prop.seconds}type="Cash"/>
                    <TableManager ID="6" Seconds={prop.seconds}type="Cash"/>

                    <TableManager ID="7" Seconds={prop.seconds}type="Cash"/>
                    <TableManager ID="8" Seconds={prop.seconds}type="Cash"/>
                    <TableManager ID="9" Seconds={prop.seconds} type="Cash"/>

                    <TableManager ID="10" Seconds={prop.seconds}type="Cash"/>
                    <TableManager ID="11" Seconds={prop.seconds}type="Cash"/>
                    <TableManager ID="12" Seconds={prop.seconds}type="Cash"/>
                    <TableManager ID="13" Seconds={prop.seconds}type="Cash"/>
                    <TableManager ID="14" Seconds={prop.seconds}type="Cash"/>
                    <TableManager ID="15" Seconds={prop.seconds}type="Cash"/>
                    <TableManager ID="16" Seconds={prop.seconds}type="Cash"/>
                    */}
                    {tables}
                </div>
                <div className="Manager-Tables">

                </div>
            </div>
        );
    }
}
export default Cash;