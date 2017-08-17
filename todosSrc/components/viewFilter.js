import React from "react";
import propTypes from "prop-types";
import {SHOW_ALL, SHOW_DONE, SHOW_PENDING} from "../actions/actions";

class ViewFilter extends React.Component{

    constructor(props){
        super(props)
    }

    setFilter = (e) =>{
        let filterType = e.currentTarget.attributes["data-filtertype"].value;
        this.props.filterTodos(filterType);
    }

    render(){
        return (
            <div className = "viewFilter">
                <button onClick = {this.setFilter} className = {this.props.viewFilter === SHOW_ALL?"active":""} data-filterType = {SHOW_ALL}> Show All </button>
                <button onClick = {this.setFilter} className = {this.props.viewFilter === SHOW_DONE?"active":""} data-filterType = {SHOW_DONE}> Show Done </button>
                <button onClick = {this.setFilter} className = {this.props.viewFilter === SHOW_PENDING?"active":""} data-filterType = {SHOW_PENDING}> Show Pending </button>
            </div>
        )
    }
}

ViewFilter.propTypes = {
    filterTodos: propTypes.func.isRequired,
    viewFilter: propTypes.string.isRequired
}

export default ViewFilter;