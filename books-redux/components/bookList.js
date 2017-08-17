import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import propTypes from "prop-types";
import { BOOK } from "./book";
import { SEARCHBOX } from "./searchBox";
import * as todosActions from "../actions/actionsCreators";

@connect(store => { })

export default class BOOKLIST extends React.Component {
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
                <SEARCHBOX q="" handleSearch={this.handleSearch} />
                {
                    Object.keys(this.props.books).map((book) => {
                        return <BOOK key={book} book={this.props.books[book]} onTodoClick={this.props.onTodoClick} />
                    })
                }
            </div>)
    }
}

BOOKLIST.propTypes = {
    books: propTypes.shape({
        isCompleted: propTypes.bool,
        volumeInfo: {
            title: propTypes.string.isRequired
        },
    }).isRequired,
    dispatch: propTypes.func.isRequired,
    onTodoClick: propTypes.func.isRequired
}
