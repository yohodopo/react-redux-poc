import React from "react";
import propTypes from "prop-types";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// Components
import BOOKLIST from "./bookList"; ramana#234

import VIEWFILTER from "./viewFilter";
import SPINNER from "./spinner";

// Actions
import * as todosActions from "../actions/actionsCreators"
// import { SHOW_ALL, SHOW_DONE, SHOW_PENDING } from "../actions/actions";

@connect((store, ownProps) => {
    return { books: store.books, viewFilter: ownProps.match.params.filter, isFetching: store.isFetching };
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
                <SPINNER isFetching={this.props.isFetching} />
                <BOOKLIST books={todosActions.getVisibleBooks(this.props.books, this.props.viewFilter)}
                    onTodoClick={this.actions.toggleTodo} />
            </div>
        )
    }
}

BOOKS.propTypes = {
    dispatch: propTypes.func,
    isFetching: propTypes.bool,
    books: propTypes.object,
    viewFilter: propTypes.string
}

