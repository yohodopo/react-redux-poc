import React from "react";
// import { Redirect } from "react-router";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import propTypes from "prop-types";
import * as actions from "../../actions/actionsCreators";
import { setData } from "../../yohodopo/commonUtility";

@connect((store) => {
    return { isLoggedIn: store.isLoggedIn }
})

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = { userId: '', password: '' };
        this.actions = bindActionCreators(actions, props.dispatch)
    }

    validateUser = () => {
        (!this.props.isLoggedIn) && this.actions.authenticateUser(this.state).then((resp) => {
            if (resp.isLoggedIn === true) {
                console.log("user logged in");
                this.props.history.push('/basic');
            }
        });
    }

    componentWillMount() {
        this.actions.setIsLoggedin(false);
    }

    setValue = (e) => {
        setData(e, this);
    }

    render() {
        return (<section className="loginComponent">
            <label htmlFor="uid">User Id:</label>
            <input type="textbox" value={this.state.userId} name="userId" onChange={this.setValue} id="uid" />
            <label htmlFor="pwd">Password</label>
            <input type="Password" value={this.state.password} name="password" id="pwd" onChange={this.setValue} />
            <div className="txt-ctr">
                <input type="button" className="btn-blu" value="Login" onClick={this.validateUser} />
            </div>
        </section>)
    }
}

Login.propTypes = {
    dispatch: propTypes.func,
    history: propTypes.oneOf([propTypes.object, propTypes.func]),
    isLoggedIn: propTypes.bool.isRequired
}
