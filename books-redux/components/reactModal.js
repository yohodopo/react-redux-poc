import React from "react";
import propTypes from "prop-types";

export class ModalDialog extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = { isOpen: this.props.open }
    }

    closeModal = () => {
        // this.setState({isOpen: false})
        this.props.onModalClose();
    }

    componentDidMount() {
        console.log("componentDidMount:Modal");
    }

    componentDidUpdate() {
        console.log("componentDidUpdate")
    }

    componentWillMount() {
        console.log("componentWillMount")
    }

    componentWillReceiveProps = (nextProps) => {
        this.setState({ isOpen: nextProps.open })
        console.log("componentWillReceiveProps")
    }

    shouldComponentUpdate() {
        return true;
    }

    componentWillUnmount() {
        console.log("componentWillUnmount")
    }

    componentWillUpdate() {
        console.log("componentDidMount")
    }

    render() {
        return (
            <div className={this.state.isOpen ? "modalDialog" : "modalClose"} >
                <div className="modalContent">
                    <button className="closeIcon" onClick={this.closeModal}>X</button>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

ModalDialog.propTypes = {
    open: propTypes.bool.isRequired,
    children: propTypes.element,
    onModalClose: propTypes.func.isRequired
}
