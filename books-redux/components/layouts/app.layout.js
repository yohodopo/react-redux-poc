// Vendor(npm) Libraries
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { withRouter } from 'react-router';
import propTypes from "prop-types"
import { connect } from "react-redux";
// import { routeMapper } from "../yohodopo/routeMapper";

import BasicComponents from '../views/basicUi.view';
import Books from '../views/books.view';
import Login from "../views/login.view";
import BookDetails from "../views/bookDetail.view";
import NotFound from "../views/matchNotFound.view";

import EnsureLogin from "./ensureLogin.layout";
import Spinner from "../components/spinner.component";

@connect((store, ownProps, withRouter) => {
    return { isFetching: store.isFetching };
})

class AppComponent extends React.PureComponent {
    constructor(props) {
        super(props)
        this.isFetching = this.props.isFetching;
    }

    componentDidMount() {
        console.log("componentDidMount:APP");
        let Loader = document.getElementById("loader");
        Loader.setAttribute("class", "hidden");
    }

    render() {
        return (
            <div>
                <Spinner isFetching={this.props.isFetching} />
                <div>
                    <Switch>
                        <Route path="/login" component={Login} />
                        <Route path="/logout" exact component={Login} />
                        <EnsureLogin>
                            <div>
                                <Switch>
                                    <Route exact path="/basic" component={BasicComponents} />
                                    <Route exact path="/books" component={Books} />
                                    <Route path="/books/:filter" component={Books} />
                                    <Route path="/book/:id/:name" component={BookDetails} />
                                    <Route component={NotFound} />
                                </Switch>
                            </div>
                        </EnsureLogin>
                        <Route path="*" component={Login} />
                    </Switch>
                </div>
            </div>
        )
    }
}

AppComponent.propTypes = {
    isFetching: propTypes.bool,
}

export default withRouter(AppComponent);
