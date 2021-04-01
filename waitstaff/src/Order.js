import './Order.css';
import Dropdown from 'react-bootstrap/Dropdown';
import axios from 'axios';
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
/*function Order(prop){
    return(
        <div className="Order">
            <div className="Order-Header">
                Order Options

            </div>
        </div>
    );
}*/
class Order extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            menu : [],
            table : 1,
            item : 1,
            quantity: 1,
            comment: " ",
            //itemName: " ",

        }; 
        this.handleChange = this.handleChange.bind(this);
        this.handleChangeTable = this.handleChangeTable.bind(this);
        this.handleChangeQuantity = this.handleChangeQuantity.bind(this);
        this.handleChangeComment = this.handleChangeComment.bind(this);
    }

    componentDidMount() {
        axios.get('https://swe3444.herokuapp.com/api/item/')
        .then(res => {
            this.setState({
                menu: res.data
            })
            //console.log("Fetched");
        })
    }
    handleChange(e) {
        this.setState({ item: e.target.value});
        //this.setState({itemName: e.target.valueName});
       
    }
    handleChangeTable(e) {
        this.setState({ table: e.target.value});
    }
    handleChangeQuantity(e){
        this.setState({ quantity: e.target.value});
    }
    handleChangeComment(e){
        this.setState({ comment: e.target.value});
    }
    OrderClick(e){
        console.log(e.target.path)
    }
    render() {
        var tableNumbers = new Array(16)
        for(let i = 1; i <= 16; i++){
            tableNumbers[i-1] = i;
        }
        const { menu } = this.state;


        //console.log(temp.id)
        const { table } = this.state;
        const {item} = this.state;
        const { quantity } = this.state;
        const { comment } = this.state;
        const { itemName } = this.state;
        console.log(item[0] + " this working? " + item[1])
        var path = '/Success?';
        path = path.concat("name=Order Sent");
        path = path.concat("&ID=" + table);
        path = path.concat("&data=" + comment)
        path = path.concat("&item=" + item)
        path = path.concat("&quantity=" + quantity)

        return(
        <div className="Order-Header">
            Order 
            <div className="Choose">
                Choose Item
                <select value={this.state.item}  onChange={this.handleChange}>
                    {menu.map(data=>(
                        <option value={data.id} >{data.name}</option>
                    ))}
                </select>
            </div>
            <div className="Choose">
                Choose Table Number
                <select value={this.state.table} onChange={this.handleChangeTable}>
                    {tableNumbers.map(data=>(
                        <option value={data}>{data}</option>
                    ))}
                </select>
            </div> 
            <div className="Choose">
                Choose Quantity
                <select value={this.state.quantity} onChange={this.handleChangeQuantity}>
                    {tableNumbers.map(data=>(
                        <option value={data}>{data}</option>
                    ))}
                </select>
            </div> 
            <div className="Choose">
                <input 
                    type="text"
                    value={this.state.comment}
                    onChange={this.handleChangeComment}
                />
            </div>
            <div className="Send-Order">
                <Link to={path}>             
                    <button onClick={this.OrderClick} className="Order-Button">
                        Send Order
                    </button>
                </Link>  
            </div>
        </div>           
        );
    }
}

export default Order;