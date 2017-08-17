import React from "react";
import propTypes from "prop-types";

export class SEARCHBOX extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            q: props.q
        }
    }

    onValChange = (e) => {
        let currentTarget = e.target;
        const value = currentTarget.type === 'checkbox' ? currentTarget.checked : currentTarget.value;
        const name = currentTarget.name;

        this.setState({
            [name]: value
        })
    }

    handleSearch = () => {
        this.props.handleSearch(this.state.search)
    }

    render() {
        return (
            <div>
                <input type="text" name="search" value={this.state.query} onChange={this.onValChange}
                  placeholder="Please enter your query here.." />
                <button onClick={this.handleSearch}>Search</button>
            </div>
        )
    }
}

SEARCHBOX.propTypes = {
    handleSearch: propTypes.func.isRequired,
    q: propTypes.string
}
