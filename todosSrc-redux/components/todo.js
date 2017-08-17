import React from "react";
import propTypes from "prop-types";

export class Todo extends React.Component{

    constructor(props){
        super(props);
        let self = this;
    }

    toggleTodo = ()=>{
        this.props.onTodoClick(this.props['data-id']);
    }

    render (){
        return (
            <li className={this.props.isCompleted?"strike":""} data-id={this.props.id} onClick={this.toggleTodo}>{this.props.text}</li>
        )
    }
}

Todo.propTypes = {
    'data-id':propTypes.number.isRequired,
    isCompleted: propTypes.bool.isRequired,
    onTodoClick: propTypes.func.isRequired,
    text: propTypes.string.isRequired
}