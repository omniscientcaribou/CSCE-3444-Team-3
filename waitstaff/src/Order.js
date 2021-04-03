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
            allergens: "false",
            //itemName: " ",

        }; 
        this.handleChange = this.handleChange.bind(this);
        this.handleChangeTable = this.handleChangeTable.bind(this);
        this.handleChangeQuantity = this.handleChangeQuantity.bind(this);
        this.handleChangeComment = this.handleChangeComment.bind(this);
        this.handleChangeAllergen = this.handleChangeAllergen.bind(this);
        this.OrderClick = this.OrderClick.bind(this);
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
    handleChangeAllergen(e){
        this.setState({allergens: e.target.value});
    }
    OrderClick(e){
        var path = 'https://swe3444.herokuapp.com/api/wait_order/';
        //path = path.concat("name=Order Sent");
        path = path.concat( this.state.table + "/");
        path = path.concat( this.state.item + "/")
        path = path.concat( this.state.quantity + "/")
        path = path.concat( this.state.allergens + "/")
        path = path.concat( this.state.comment)

        //path = path.concat("&data=" + this.state.comment)
        //path = path.concat("&item=" + this.state.item)
        //path = path.concat("&quantity=" + this.state.quantity)
        //path = path.concat("&allergen=" + this.state.allergens)
        //console.log(e.target.path)
        ///https://swe3444.herokuapp.com/api/wait_order/<str:t_num>/<str:item_id>/<str:quantity>/<str:a_flag>/<str:s>
        axios.get(path)
        .then(res => {
            //this.setState({
            //    tasks: res.data
            //})
            console.log(res);
        })
    }
    render() {
        var TFTable = ["true", "false"]
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
        path = path.concat("&allergen=" + this.state.allergens)

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
                Comments
                <input 
                    type="text"
                    value={this.state.comment}
                    onChange={this.handleChangeComment}
                />
            </div>
            <div className="Choose">
                Allergens?
                <select value={this.state.allergens} onChange={this.handleChangeAllergen}>
                    {TFTable.map(data=>(
                        <option value={data}>{data}</option>
                    ))}
                </select>
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