import Table from './Table';
import KitchenCall from './KitchenCall';
import './Home.css'
import React, {Component} from 'react';
import { render } from '@testing-library/react';
import axios from 'axios';
import _ from 'lodash';

class Home extends Component{
    
 
    state = {
        tasks: [ ],
        orders: []
    }
    //runs only the first time
    componentDidMount(){
        //fetch tasks
        axios.get('https://swe3444.herokuapp.com/api/task/')
            .then(res => {
                this.setState({
                    tasks: res.data
                })
                //console.log("Fetched");
            })
        //fetch the orders
        axios.get('https://swe3444.herokuapp.com/api/ordercontent/')
        .then(res => {
            this.setState({
                orders: res.data
            })
            //console.log("Fetched");
        })
    }
    //runs every refresh 
    componentDidUpdate(){
        //if(this.props.seconds != )
        //fetching hte tasks
        axios.get('https://swe3444.herokuapp.com/api/task/')
        .then(res => {
            //if(res.data != this.tasks){
            if( _.isEqual(res.data, this.state.tasks)){
                //do nothing if theres no change
            }
            else
            {
                //replace the task list if there is a change
                console.log("new state");
                this.setState({
                    tasks: res.data
                })

            }
            console.log("Fetched");
        }) 
        //fetching the orders
        axios.get('https://swe3444.herokuapp.com/api/ordercontent/')
        .then(res => {
            if(_.isEqual(res.data, this.state.orders)){
                //do nothing if theres no change
            }
            else{
                this.setState({
                    orders: res.data
                })
            }
            //console.log("Order fetched");
        })
    }
    //console.log(refills[7] + " " + refillData[7]);
    render(){
        const { tasks } = this.state;       //tasks is where the api call returns the task list
        const { orders } = this.state;      //api return of the order list
        var refills = new Array(16).fill(false);    //stores whether a refill is requested at a table
        var refillData = new Array(16);             //stores what that refill data was if exists
        var refillsID = new Array(16).fill(0);      //id of that task
        var assistance = new Array(16).fill(false); //stores if assistance requested for a table
        var assistanceID = new Array(16).fill(0);   //id of those tasks
        let tableOrders = new Array(16);            //stoes orders by table
        var kitchenCalling = false;                 //is kitchen calling?
        var kitchenCallingID = new Array(0);        //id for all the tasks related to kitchen call
        for(let i = 0; i < 16; i++){
            tableOrders[i] = new Array();
        }
        //finding all the refills and assistance requests
        for(var i = 1; i <= 16; i++){
            for(var j = 0; j < tasks.length; j++){
                if(tasks[j].table_number===i){
                    if(tasks[j].refill_request===true){
                        refills[i-1] = true;
                        refillData[i-1] = tasks[j].drink_selections;
                        refillsID[i-1] = tasks[j].id;
                    }
                    else if(tasks[j].call_waitstaff===true){
                        assistance[i-1] = true;
                        assistanceID[i-1] = tasks[j].id;
                    }   
                    
                }


            }
        }
        //finding every kitchen call task to be able to delete them all from the task list later
        for(var j = 0; j < tasks.length; j++){
            if(tasks[j].role==="Kitchen"){
                if(tasks[j].call_waitstaff===true){
                    kitchenCalling=true;
                    kitchenCallingID.push(tasks[j].id);
                }
            }
        }
        //finding every order thats ready and assigning it to its place by table number
        for(let i = 1; i <= 16; i++){
            for(let j = 0; j < orders.length; j++){
                if(orders[j].state=="READY TO BE DELIVERED"){
                    if(orders[j].table_number===i){
                       // console.log(orders[j].table_number);
                        tableOrders[i-1].push(orders[j]);
                        //console.log(i-1);
                    }
                }
            }
        } 
        //creating the array of 16 tables thatll be displayed on the homescreen
        let tables = [];
        for(let i = 1; i <= 16; i++){
            tables.push(
                <Table ID={i}
                Seconds={this.props.seconds}
                Refill={refills[i-1]}
                RefillData={refillData[i-1]}
                RefillsID={refillsID[i-1]}
                Assistance={assistance[i-1]}
                AssistanceID={assistanceID[i-1]}
                Orders={tableOrders[i-1]}
                AllOrders={orders}
                />
            );
            //console.log(tableOrders[i-1] + i);
        }

        console.log("refresh");
        return(
            <div className="Top">
             <div className="Tables">

                    {tables}

                
                <div className="KitchenCall">
                    <KitchenCall Seconds={this.props.seconds} KitchenCalling={kitchenCalling} KitchenCallingID={kitchenCallingID}/>
                </div>
                </div>
            </div>
        );
    }
}

export default Home;