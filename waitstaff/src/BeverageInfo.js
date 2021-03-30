import React, {Component, useState, useEffect} from 'react';
import { useParams } from "react-router-dom";
import useLocation from "react-router-dom";
import {Link} from 'react-router-dom';
/*function BeverageInfo(props){
    const { RefillData } = useParams();
    console.log(RefillData);
    const {RefillData} = this.props.location.state;
    console.log(props.location.state.RefillData);
    return <div >{RefillData}</div>
}*/

class BeverageInfo extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            RefillData: false
        };
        //if(this.props.location.state){
        //    this.state.RefillData = this.props.location.state.RefillData
        //}
    }
    componentDidMount() {
        //const { RefillData } = this.props.location.state;
        //console.log(this.props.RefillData);
        //console.log(this.props.location.state);
        //console.log(this.props.location.state.RefillData);
       // if(this.props.location.state){
            //this.setState({
               // RefillData: this.props.location.state.RefillData
             //  RefillData: false
            //});
        //}
        //console.log(RefillData);
        //const { RefillData } = this.props.match.params
    }
    render(){
        return (<div>
            hello
        </div>);
    }
}
export default BeverageInfo;