import TableManager from './TableManager.js';
import React, {Component} from 'react';
import axios from 'axios';

//is the content view for the split bill option and contains the list of tables
class SplitBill extends Component{
    //stores the bills for each table by number
    state = {
        bills : []
    }
    //happens first render
    componentDidMount(){
        //gets the bills for all 16 tables
        axios.get('https://swe3444.herokuapp.com/api/all_tables/')
        .then(res => {
            this.setState({
                bills: res.data
            })
           
        })   
    }
    render(){
        const { bills } = this.state;
        //cretes the array of tables shown on screen
        let tables = [];
        for(let i = 1; i <= 16; i++){
            console.log(i);
            tables.push(
                <TableManager 
                ID={i}
                type="SplitBill"
                bill={bills[i]}
                
                />
            );
            
        }
        return(
            <div className="Manager">
                <div className="Manager-Header">
                    Split Bill option
                </div>
                <div className="Manager-Subheader">
                    Click Table to split its bill N ways
                </div>
                <div className="Tables1">
                    {tables}
                </div>
            </div>
        );
    }
}

export default SplitBill;
