import React from "react";
import propTypes from "prop-types";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// Components
import BOOKLIST from "./bookList";
import VIEWFILTER from "./viewFilter";

// Actions
import * as todosActions from "../actions/actionsCreators";
// import { SHOW_ALL, SHOW_DONE, SHOW_PENDING } from "../actions/actions";

@connect((store, ownProps) => {
    return { books: store.books, viewFilter: store.visiblityFilter, isFetching: store.isFetching };
})

export class BOOKS extends React.Component {
    constructor(props) {
        super();
        this.actions = bindActionCreators(todosActions, props.dispatch)
        this.actions.fetchBooks();
    }

    render() {
        return (
            <div>
                <VIEWFILTER filterTodos={this.actions.changeVisibity} viewFilter={this.props.viewFilter} />
                <BOOKLIST books={todosActions.getVisibleBooks(this.props.books, this.props.viewFilter)}
                  onTodoClick={this.actions.toggleTodo} />
            </div>
        )
    }
}

BOOKS.propTypes = {
    dispatch: propTypes.func,
    books: propTypes.object,
    viewFilter: propTypes.string
}
