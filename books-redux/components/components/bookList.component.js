import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import propTypes from "prop-types";

import Book from "./book.component";
import SearchBox from "./searchBox.component";
import * as todosActions from "../../actions/actionsCreators";

@connect(store => { })

export default class BookList extends React.Component {
    constructor(props) {
        super(props);
        this.actions = bindActionCreators(todosActions, props.dispatch)
    }

    handleSearch = (query) => {
        this.actions.fetchBooks(query);
    }

    render() {
        return (
            <div>
                <SearchBox q="" handleSearch={this.handleSearch} />
                {
                    Object.keys(this.props.books).map((book) => {
                        return <Book key={book} book={this.props.books[book]} onTodoClick={this.props.onTodoClick} />
                    })
                }
            </div>)
    }
}

BookList.propTypes = {
    books: propTypes.shape({
        isCompleted: propTypes.bool,
        volumeInfo: {
            title: propTypes.string.isRequired
        },
    }).isRequired,
    dispatch: propTypes.func,
    onTodoClick: propTypes.func.isRequired
}
