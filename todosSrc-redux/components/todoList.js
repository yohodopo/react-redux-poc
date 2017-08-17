import React from "react";
import {connect} from "react-redux";
import propTypes from "prop-types";
import {Todo} from "./todo"

export class TodoList extends React.Component{
    constructor(props){
        super(props);
    }

    render(){ 
        return( <ul>
            {
                this.props.todos.map((todo, index)=>{
                    return <Todo key={index.toString()} isCompleted={todo.isCompleted} data-id={index} onTodoClick = {this.props.onTodoClick} text={todo.text}></Todo>
                })
            } 
        </ul>) 
    }
}

TodoList.propTypes = {
    todos: propTypes.arrayOf(
        propTypes.shape({
            isCompleted: propTypes.bool.isRequired,
            text: propTypes.string.isRequired
        }).isRequired
    ).isRequired,
    onTodoClick: propTypes.func.isRequired
}