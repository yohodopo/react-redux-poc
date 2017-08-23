// Vendor(npm) Libraries
import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import { withRouter } from 'react-router';
import { bindActionCreators } from "redux"
import { connect } from "react-redux";
import { routeMapper } from "../yohodopo/routeMapper"

import SPINNER from "./spinner";
import * as actionss from "../actions/actionsCreators";

@connect((store, ownProps, withRouter) => {
    return { isLoggedIn: store.isLoggedIn, isFetching: store.isFetching, history: ownProps.history };
})

class AppComponent extends React.Component {
    constructor(props) {
        super(props)
        this.actions = bindActionCreators(actionss, this.props.dispatch);
        this.state = { component: routeMapper['/login'] };
        this.props.history.listen && this.props.history.listen((location, action) => {
            this.updateRoute({ component: routeMapper[location.pathname] })
        });
    }

    componentDidMount() {
        console.log("componentDidMount:APP");
        let Loader = document.getElementById("loader");
        Loader.setAttribute("class", "hidden");
    }

    logout = () => {
        this.actions.setIsLoggedin(false);
        this.props.history.push('/login');
    }

    updateRoute = (routeInfo) => {
        if (this.props.isLoggedIn) {
            this.setState({ component: routeInfo.component });
        } else {
            this.props.history.push('/login');
        }
    }

    render() {
        let nav = null;
        if (this.props.isLoggedIn) {
            nav = <nav>
                <Link to="/basic">Basic Components</Link>
                <Link to="/books">Books</Link>
                <button onClick={this.logout}>Logout</button>
            </nav>
        }
        return (
            <div>
                <SPINNER isFetching={this.props.isFetching} />
                {nav}
                <div>
                    <Route path="/" component={this.state.component} />
                </div>
            </div>
        )
    }
}

export default withRouter(AppComponent);
