//Vendor(npm) Libraries
import React from 'react';
import propTypes from "prop-types";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

//Components
import { TodoList } from "./todoList";
import ViewFilter from "./viewFilter";
import Spinner from "./spinner";

//Actions
import * as todosActions from "../actions/actionsCreators"
import { SHOW_ALL, SHOW_DONE, SHOW_PENDING } from "../actions/actions";

@connect(store => {
    return { todos: store.todos, viewFilter: store.visiblityFilter, isFetching: store.isFetching };
})

export class AppComponent extends React.Component {

    constructor(props) {
        super();
        this.actions = bindActionCreators(todosActions, props.dispatch)
    }

    getVisibleTodos = (todos = this.props.todos, filter = this.props.viewFilter) => {
        switch (filter) {
            case "SHOW_ALL":
                return todos;
            case "SHOW_PENDING":
                return todos.filter(t => !t.isCompleted)
            case "SHOW_DONE":
                return todos.filter(t => t.isCompleted)
            default:
                return todos;
        }
    }

    render() {
        return (
            <div>
                <ViewFilter filterTodos={this.actions.changeVisibity} viewFilter={this.props.viewFilter}></ViewFilter>
                <Spinner isFetching={this.props.isFetching} ></Spinner>
                <TodoList todos={this.getVisibleTodos()} onTodoClick={this.actions.toggleTodo}></TodoList>
            </div>
        )
    }
}
