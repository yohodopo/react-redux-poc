import React from "react";
import propTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as bookActions from "../../actions/actionsCreators";
@connect((store, ownPrpos) => {
    return { books: store.books }
})
export default class BookDetail extends React.PureComponent {
    constructor(props) {
        super(props);
        this.actions = bindActionCreators(bookActions, this.props.dispatch);
        Object.keys(this.props.books).length < 1 && this.actions.fetchBooks();
        this.bookId = this.props.match.params.id;
    }

    componentWillReceiveProps(nextProps) {
        this.bookId = nextProps.match.params.id;
    }

    pageInfo() {
        if (Object.keys(this.props.books).length && this.props.books[this.bookId]) {
            return <h1>{this.props.books[this.bookId].volumeInfo.title}</h1>
        } else {
            return <h1>Book not found, Please find the books from
            <NavLink to="/books" >  BOOKS </NavLink>. Thankyou!</h1>
        }
    }

    render() {
        return (
            <div className="bookDetail">
                <NavLink to="/books" >  Back </NavLink>
                {this.pageInfo()}
            </div>
        )
    }
}

BookDetail.propTypes = {
    books: propTypes.object.isRequired,
    match: propTypes.oneOfType([propTypes.object, propTypes.func]),
    dispatch: propTypes.func
}
