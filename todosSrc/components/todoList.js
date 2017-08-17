import React from "react";
import propTypes from "prop-types";
import {Todo} from "./todo"

export class TodoList extends React.Component{
    render(){
        let onTodoClick =  this.props.onTodoClick; 
        return( <ul>
            {
                this.props.todos.map((todo, index)=>{
                    return <Todo key={index.toString()} isCompleted={todo.isCompleted} data-id={index} onTodoClick = {onTodoClick} text={todo.text}></Todo>
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