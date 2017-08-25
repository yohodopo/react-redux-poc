import React from "react";
import propTypes from "prop-types";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

// Components
import BookList from "../components/bookList.component";
import ViewFilter from "../components/viewFilter.component";

// Actions
import * as todosActions from "../../actions/actionsCreators";
// import { SHOW_ALL, SHOW_DONE, SHOW_PENDING } from "../actions/actions";

@connect((store, ownProps) => {
    return { books: store.books, viewFilter: ownProps.match.params.filter, isFetching: store.isFetching };
})

export default class Books extends React.Component {
    constructor(props) {
        super(props);
        this.actions = bindActionCreators(todosActions, props.dispatch)
        if (!(this.props.books && Object.keys(this.props.books).length)) {
            this.actions.fetchBooks();
        }
    }

    componentDidMount(nep, nepp, neppp) {
        console.log("componentDidMount: BooksScreen")
    }

    componentWillUnmount(nep, nepp, neppp) {
        console.log("componentWillUnmount: BooksScreen")
    }

    componentWillUpdate(nep, nepp, neppp) {
        console.log("componentWillUpdate: BooksScreen")
    }

    render() {
        return (
            <div>
                <ViewFilter filterTodos={this.actions.changeVisibity} viewFilter={this.props.viewFilter} />
                <BookList books={todosActions.getVisibleBooks(this.props.books, this.props.viewFilter)}
                  onTodoClick={this.actions.toggleTodo} />
            </div>
        )
    }
}

Books.propTypes = {
    dispatch: propTypes.func,
    books: propTypes.object,
    viewFilter: propTypes.string
}
