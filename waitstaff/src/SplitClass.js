import React, {Component} from 'react';
import axios from 'axios';
import './Order.css';
//split class is the component that is surrounded by the splitbill component. does all the actual work for split bill
class SplitClass extends Component{
    constructor(props){
        super(props);
        this.state = {
            ID : this.props.ID,     //the table ID
            data: this.props.data,  //the data sent through URL param
            N : 1,                  //the number of customers
            card: " ",              //the current card being typed
            cards: [],                 //cards that are already entered
        }
        //binds "this" keyword to these functions
        this.handleChange = this.handleChange.bind(this);
        this.handleChangeCards = this.handleChangeCards.bind(this);
        this.EnterClick = this.EnterClick.bind(this);
        this.PayClick = this.PayClick.bind(this);
    }
    handleChange(e){
        //handles changes in N, number of customers
        //only changes if there are less cards entered than N
        if(this.state.cards.length <= e.target.value ){
            this.setState({ N : e.target.value});
        }
        else{
            alert("Cant decrease customer count past the number of cards entered")
        }
    }
    handleChangeCards (e) {
        //changes the current card being typed variable
        this.setState({ card: e.target.value});
    }
    EnterClick(e){
        //Enters the card being typed into the list of stored cards
        //only works if theres space given N customers
        if(this.state.cards.length < this.state.N){
            //if(parseInt(this.state.card)){
                //make sure its 16 digits
                if(Math.max(Math.floor(Math.log10(Math.abs(parseInt(this.state.card)))), 0) + 1 ==16){
                    var added = this.state.cards.concat([this.state.card]);
                    this.setState({cards : added, card: ""})
                }
            else{
                alert(this.state.card + " is an invalid number")
            }
        }
        else{
            alert("There is only " + this.state.N + " Customers")
        }
    }
    PayClick(e){
        //sends the api calls to pay
        console.log(typeof this.state.cards.length + " " + typeof this.state.N)
        //first make sure that enough cards were entered compare to N
        if(this.state.cards.length===parseInt(this.state.N)){
            var path = 'https://swe3444.herokuapp.com/api/ordercontent/'
            //get all the orders and look through to see which match the table number
            axios.get(path)
            .then(res => {
                var orders=res.data;
                for(let i = 0; i < orders.length; i++){
                    if(orders[i].table_number==this.state.ID){
                        //patch those that match as Paid
                        let pathTemp = path;
                        pathTemp = pathTemp.concat(orders[i].id + "/")
                        axios.patch(pathTemp, {state :"PAID"}).catch(error => console.log(error))
                    }
                }
                //release tables from usage
                console.log(res);
                let URL = "https://swe3444.herokuapp.com/api/release_table/"//<TABLE_NUMBER>"
                let URLFull = URL.concat(this.state.ID);
                axios.get(URLFull).catch(error => console.log(error)).then(console.log(URLFull));
                alert("Payment processed")
            })
        }
        else{
            alert("Not enough cards")
        }
    }

    render(){

        let cards = []  //holds the components to display cards state array
        for(let i = 0; i < this.state.cards.length; i++){
            //pushes the stored cards to be displayed
            cards.push(
            <div>
                Card {i+1}:{this.state.cards[i]}
            </div>
            )
        }
        return(
            <div className="Header">
                Order Total for each Customer is: {(this.state.data/this.state.N).toFixed(2)} 
                
                <div className="Choose">
                    How Many Customers?
                    <select value={this.state.N}  onChange={this.handleChange}>
                        {
                            //choose how many customers, there can only be 4
                        }
                        <option value={1} >{1}</option>
                        <option value={2} >{2}</option>
                        <option value={3} >{3}</option>
                        <option value={4} >{4}</option>
                    </select>
                </div>
                <div className="Choose">
                    Card Enter
                    <input 
                        type="text"
                        value={this.state.card}
                        onChange={ this.handleChangeCards}
                    />
                    <button onClick={this.EnterClick} >
                        Enter
                    </button>
                </div> 
                {cards}
                <div className="Choose">
                    <button onClick={this.PayClick} >
                            Pay 
                    </button>
                </div>
            </div>
        );
    }
}
export default SplitClass;