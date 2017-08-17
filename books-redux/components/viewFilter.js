import React from "react";
import { NavLink } from "react-router-dom";
import propTypes from "prop-types";
// import { SHOW_ALL, SHOW_DONE, SHOW_PENDING } from "../actions/actions";

export default class VIEWFILTER extends React.Component {
    setFilter = (e) => {
        let filterType = e.currentTarget.attributes["data-filtertype"].value;
        this.props.filterTodos(filterType);
    }

    render() {
        return (
            <div className="viewFilter">
                <NavLink to="/books/SHOW_ALL" activeClassName="active"> Show All </NavLink>
                <NavLink to="/books/SHOW_DONE" activeClassName="active"> Show Done </NavLink>
                <NavLink to="/books/SHOW_PENDING" activeClassName="active" > Show Pending </NavLink>
            </div>
        )
    }
}

VIEWFILTER.propTypes = {
    filterTodos: propTypes.func.isRequired
}
