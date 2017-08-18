import React from "react";
import propTypes from "prop-types";

export class BOOK extends React.Component {
    toggleTodo = () => {
        this.props.onTodoClick(this.props.book.id);
    }
    // this.props.isCompleted?"strike":"";
    render() {
        let volInfo = this.props.book.volumeInfo;
        return (
            <div className="tile" title={volInfo.title} onClick={this.toggleTodo}>
                <a href={volInfo.previewLink} target="_blank">
                    <img src={(volInfo.imageLinks && volInfo.imageLinks.smallThumbnail &&
                     volInfo.imageLinks.smallThumbnail.replace("https://", "https://"))} alt={volInfo.title} />
                </a>
                <p>{volInfo.title}</p>
            </div>
        )
    }
}

BOOK.propTypes = {
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
