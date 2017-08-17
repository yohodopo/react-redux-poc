import React from "react";
import propTypes from "prop-types";

export default class SPINNER extends React.Component {
    render() {
        return (<image className="spinner" style={{ display: this.props.isFetching ? "block" : "none" }} />)
    }
}

SPINNER.propTypes = {
    isFetching: propTypes.bool.isRequired
}
