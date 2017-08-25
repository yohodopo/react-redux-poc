import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Link } from "react-router-dom";
import propTypes from "prop-types";

import { bindActionCreators } from "redux";
import * as actionss from "../../actions/actionsCreators";

@connect((store, ownProps) => ({ isLoggedIn: store.isLoggedIn, history: ownProps.history }))
class EnsureLogin extends React.Component {
    constructor(props) {
        super(props)
        this.actions = bindActionCreators(actionss, this.props.dispatch);
    }
    componentDidMount() {
        if (!this.props.isLoggedIn && this.props.location.pathname !== "/login") {
            this.props.history.push('/login');
        }
    }

    logout = () => {
        this.actions.setIsLoggedin(false);
        this.props.history.push('/login');
    }

    render() {
        if (this.props.isLoggedIn) {
            return <div>
                <nav>
                    <Link to="/basic">Basic Components</Link>
                    <Link to="/books">Books</Link>
                    <button onClick={this.logout}>Logout</button>
                </nav> {this.props.children}
            </div>
        } else {
            return null
        }
    }
}

EnsureLogin.propTypes = {
    children: propTypes.arrayOf(Element),
    dispatch: propTypes.func,
    isLoggedIn: propTypes.bool.isRequired,
    location: propTypes.dispatch,
    history: propTypes.history
}

export default withRouter(EnsureLogin);
