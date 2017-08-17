import React from 'react';
import {TodoList} from "./todoList";
import ViewFilter from "./ViewFilter";
import {SHOW_ALL, SHOW_DONE, SHOW_PENDING} from "../actions/actions";

const todos = [
    {text:"hi", isCompleted:false},
    {text:"hi1", isCompleted:false},
    {text:"hi2", isCompleted:false},
    {text:"hi3", isCompleted:false}
]

export class AppComponent extends React.Component{
    onTodoClick = (id, isCompleted)=>{
        this.setState((prevState)=>{
             let todos = [...prevState.todos]
             todos[id].isCompleted = isCompleted; 
             return {todos:this.filterTodos(prevState.viewFilter, todos)};
        });
    }
    constructor(props){
        super(props);
        this.state = {
            todos,
            viewFilter: SHOW_ALL
        } 
        //this.onTodoClick = this.onTodoClick.bind(this);
    }

    setTodosFilter = (filterType) => {
        this.setState({todos:this.filterTodos(filterType), viewFilter:filterType});
    }

    filterTodos = (filterType, newTodos = todos) =>{
        switch (filterType) {
            case SHOW_ALL:
                return newTodos;
            case SHOW_DONE:
                return newTodos.filter((todo, index)=>{
                    return todo.isCompleted;
                });
            case SHOW_PENDING:
                return newTodos.filter((todo, index)=>{
                    return !todo.isCompleted
                }) ;
            default: 
                return newTodos;      
        }
    }

    render (){
        return (
            <div>
            <ViewFilter filterTodos={this.setTodosFilter} viewFilter={this.state.viewFilter}></ViewFilter>   
            <TodoList todos={this.state.todos} onTodoClick = {this.onTodoClick}></TodoList>
            </div>
        )
    }    
}

