import React from "react";
import propTypes from "prop-types";

export default class Spinner extends React.Component{
    render(){
        return (<image className = "spinner" style={{display:this.props.isFetching?"block":"none"}}/>)
    }
}   

Spinner.propTypes = {
    isFetching: propTypes.bool.isRequired
}