import React, {Component} from 'react';
import axios from 'axios';
import './Order.css';
class SplitClass extends Component{
    constructor(props){
        super(props);
        this.state = {
            ID : this.props.ID,
            data: this.props.data,
            N : 1,
            card: " ",
            cards: [],
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleChangeCards = this.handleChangeCards.bind(this);
        this.EnterClick = this.EnterClick.bind(this);
        this.PayClick = this.PayClick.bind(this);
    }
    handleChange(e){
        if(this.state.cards.length <= e.target.value ){
            this.setState({ N : e.target.value});
        }
        else{
            alert("Cant decrease customer count past the number of cards entered")
        }
    }
    handleChangeCards (e) {
        this.setState({ card: e.target.value});
    }
    EnterClick(e){
        if(this.state.cards.length < this.state.N){
            //if(parseInt(this.state.card)){
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
        console.log(typeof this.state.cards.length + " " + typeof this.state.N)
        if(this.state.cards.length===parseInt(this.state.N)){
            var path = 'https://swe3444.herokuapp.com/api/ordercontent/'
            axios.get(path)
            .then(res => {
                var orders=res.data;
                for(let i = 0; i < orders.length; i++){
                    if(orders[i].table_number==this.state.ID){
                        let pathTemp = path;
                        pathTemp = pathTemp.concat(orders[i].id + "/")
                        axios.patch(pathTemp, {state :"PAID"}).catch(error => console.log(error))
                    }
                }
                console.log(res);
                alert("Payment processed")
            })
        }
        else{
            alert("Not enough cards")
        }
    }

    render(){
        /*let cardEnter = [];
        for(let i = 0; i < this.state.N; i++){
            cardEnter.push(
                <div className="Choose">
                    Card Enter
                    <input 
                        type="text"
                        value={this.state.card}
                        onChange={ this.handleChangeCards}
                    />
                </div>  
            )
        }*/
        let cards = []
        for(let i = 0; i < this.state.cards.length; i++){
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
                        {/*menu.map(data=>(
                           <option value={data.id} >{data.name}</option>
                        ))*/}
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