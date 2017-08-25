import React from "react";
import propTypes from "prop-types";
import { NavLink } from "react-router-dom";

export default class Book extends React.Component {
    toggleTodo = () => {
        this.props.onTodoClick(this.props.book.id);
    }

    formReadableURI(uri) {
        const regExp = /\s+/g;
        return uri.replace(regExp, '-');
    }
    // this.props.isCompleted?"strike":"";
    render() {
        let volInfo = this.props.book.volumeInfo;
        return (
            <div className="tile" title={volInfo.title} onClick={this.toggleTodo}>
                <NavLink to={`/book/${this.props.book.id}/${this.formReadableURI(this.props.book.volumeInfo.title)}`} >
                    <img src={(volInfo.imageLinks && volInfo.imageLinks.smallThumbnail &&
                        volInfo.imageLinks.smallThumbnail.replace("http://", "https://"))} alt={volInfo.title} />
                </NavLink>
                <p>{volInfo.title}</p>
            </div>
        )
    }
}

Book.propTypes = {
    onTodoClick: propTypes.func.isRequired,
    book: propTypes.shape({
        id: propTypes.any.isRequired,
        volumeInfo: {
            title: propTypes.string.isRequired,
            imageLinks: propTypes.objectOf({
                smallThumbnail: propTypes.string.isRequired
            }).isRequired,
            previewLink: propTypes.string.isRequired
        },
    })
}
