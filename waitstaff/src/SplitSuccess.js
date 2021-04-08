import { useLocation } from 'react-router-dom';
import React, {Component} from 'react';
import SplitClass from './SplitClass';
import { propTypes } from 'react-bootstrap/esm/Image';
function SplitSuccess(prop){
    //this function is a wrapper for the class "SplitClass"
    //needed a wrapper because it wouldnt let me use uselocation() in a class object
    const {search} = useLocation();
    //parsing through the URL for data
    const searchParams = new URLSearchParams(search);
    const name = searchParams.get('name')
    const data = searchParams.get('data')
    const ID = searchParams.get('ID')

    return(<div><SplitClass ID={ID} name={name} data={data}/></div>);
}
export default SplitSuccess;