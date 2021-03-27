import Table from './Table';
import KitchenCall from './KitchenCall';
import './Home.css'
import React, {Component} from 'react';
import { render } from '@testing-library/react';
import axios from 'axios';
import _ from 'lodash';

class Home extends Component{
    
    //constructor(props){
    //    var prop=props;
    //}
    state = {
        tasks: [ ]
    }

    componentDidMount(){
        axios.get('https://swe3444.herokuapp.com/api/task/')
            .then(res => {
                this.setState({
                    tasks: res.data
                })
                console.log("Fetched");
            })
    }
    componentDidUpdate(){
        //if(this.props.seconds != )
        axios.get('https://swe3444.herokuapp.com/api/task/')
        .then(res => {
            //if(res.data != this.tasks){
            if( _.isEqual(res.data, this.state.tasks)){
                console.log("equal so skip");
            }
            else
            {
                console.log("new state");
                this.setState({
                    tasks: res.data
                })

            }
            console.log("Fetched");
        }) 
    }
    //console.log(refills[7] + " " + refillData[7]);
    render(){
        const { tasks } = this.state;
        var refills = new Array(16).fill(false);
        var refillData = new Array(16);
        var assistance = new Array(16);

        for(var i = 1; i <= 16; i++){
            for(var j = 0; j < tasks.length; j++){
            if(tasks[j].table_number===i)
                if(tasks[j].refill_request===true){
                    refills[i-1] = true;
                    refillData[i-1] = tasks[j].drink_selections;

                }
                
                    
            }
        }    
        //const taskList = tasks.length ? () : (
            
        //)
        console.log("refresh");
        return(
            <div className="Top">
             <div className="Tables">
                 <Table ID="1" Seconds={this.props.seconds} Refill={refills[0]} RefillData={refillData[0]}/>
                 <Table ID="2" Seconds={this.props.seconds} Refill={refills[1]} RefillData={refillData[0]}/>
                    <Table ID="3" Seconds={this.props.seconds} Refill={refills[2]} RefillData={refillData[0]}/>

                    <Table ID="4" Seconds={this.props.seconds} Refill={refills[3]} RefillData={refillData[0]}/>
                    <Table ID="5" Seconds={this.props.seconds} Refill={refills[4]} RefillData={refillData[0]}/>
                    <Table ID="6" Seconds={this.props.seconds} Refill={refills[5]} RefillData={refillData[0]}/>

                    <Table ID="7" Seconds={this.props.seconds} Refill={refills[6]} RefillData={refillData[0]}/>
                    <Table ID="8" Seconds={this.props.seconds} Refill={refills[7]} RefillData={refillData[0]}/>
                    <Table ID="9" Seconds={this.props.seconds} Refill={refills[8]} RefillData={refillData[0]}/>

                    <Table ID="10" Seconds={this.props.seconds} Refill={refills[9]} RefillData={refillData[0]}/>
                    <Table ID="11" Seconds={this.props.seconds} Refill={refills[10]} RefillData={refillData[0]}/>
                    <Table ID="12" Seconds={this.props.seconds} Refill={refills[11]} RefillData={refillData[0]}/>
                    <Table ID="13" Seconds={this.props.seconds} Refill={refills[12]} RefillData={refillData[0]}/>
                    <Table ID="14" Seconds={this.props.seconds} Refill={refills[13]} RefillData={refillData[0]}/>
                    <Table ID="15" Seconds={this.props.seconds} Refill={refills[14]} RefillData={refillData[0]}/>
                    <Table ID="16" Seconds={this.props.seconds} Refill={refills[15]} RefillData={refillData[0]}/>
                    <KitchenCall Seconds={this.props.seconds} />
                </div>

            </div>
        );
    }
}

export default Home;