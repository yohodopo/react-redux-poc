import React from "react";
import { connect } from "react-redux";
// import Defer from "../yohodopo/defer";

import ModalDialog from "../components/modalDialog.component";

@connect((store, dispatchedProps, ownProps) => {
    return { abba: "jabba" };
})

// README: Difference between pureComponent and Component can be seen in this screen
// When we set this component as Component we can see that render function will be called
// on 'setState' irrespective of state's Change
// Where as, if we set this as Pure component, we can see that render will be called only
// if there is a difference between
// Old and new state(Shallow check). To do deep checking, we will have to manually do the checking and return true/false
// in function - >'shouldComponentUpdate'
export default class BasicComponents extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            gender: "female",
            name: "",
            address: "",
            showModal: false,
            showModal2: false,
            reply: ""
        };
    }

    setValue = (e) => {
        console.log("nametextBox", this.nameTextbox);
        let target = e.target;
        let stateProp = target.name;
        let value = target.value || "";
        // this.setState(previ{
        //     [stateProp]: value
        // })

        this.setState((prevState, props) => {
            return Object.assign({}, prevState, { [stateProp]: value })
        })
    }

    // TODO: later change {openModal & closeModal} as single function named toggleModal
    openModal = () => {
        this.setState((prevState, props) => {
            return Object.assign({}, prevState, { "showModal": true })
        })
    }

    closeModal = () => {
        this.setState((prevState, props) => {
            return Object.assign({}, prevState, { "showModal": false })
        })
    }

    openModal2 = () => {
        this.setState((prevState, props) => {
            return Object.assign({}, prevState, { "showModal2": true })
        })
    }

    closeModal2 = () => {
        this.setState((prevState, props) => {
            return Object.assign({}, prevState, { "showModal2": false })
        })
    }

    triggerMessage = (message) => {
        // const deferred = new Defer();
        // navigator.serviceWorker.controller.postMessage({ "message":message, deferred });
        // return deferred.promise;
        return new Promise((resolve, reject) => {
            const messageChannel = new MessageChannel();
            messageChannel.port1.onmessage = (event) => {
                event.data.error ? reject(event.data.error) : resolve(event.data);
            }
            navigator.serviceWorker.controller.postMessage(message, [messageChannel.port2]);
        })
    }

    sendTBMessage = (e) => {
        e.preventDefault();
        this.triggerMessage(this.state.name).then(reply => {
            console.log("replyReceived:", reply)
            this.setState({ reply: reply })
        });
    }

    nameTextbox;

    render() {
        return (
            <section>
                <form name="basicComponents">
                    <h3>Basic HTML Components</h3>
                    <div>
                        <input placeholder="Type Name" ref={nameTextRef => { this.nameTextbox = nameTextRef }}
                          required type="text" value={this.state.name} name="name" onChange={this.setValue} />
                    </div>
                    <div>
                        <textarea placeholder="Enter your Address" value={this.state.address}
                          name="address" onChange={this.setValue} />
                    </div>
                    <div name="Gender">
                        <label>Male:</label><input type="radio" onChange={this.setValue}
                          value="male" name="gender" checked={this.state.gender === "male"} />
                        <label>Female:</label><input type="radio" onChange={this.setValue}
                          value="female" name="gender" checked={this.state.gender === "female"} />
                    </div>

                    <div id="serviceWorkers">
                        <button onClick={this.sendTBMessage}>
                            Send Message
                        </button>
                        <h5>{this.state.reply}</h5>
                    </div>
                </form>
                <ModalDialog open={this.state.showModal} onModalClose={this.closeModal}>
                    <div>
                        <h1>Hello dudus, this is modal-1 content</h1>
                        <button onClick={this.openModal2}>Open Modal2</button>
                        <button onClick={this.closeModal2}>Close Modal2</button>
                        <ModalDialog open={this.state.showModal2} onModalClose={this.closeModal2}>
                            <h1>Hello dudus, this is modal-2 content</h1>
                        </ModalDialog>
                    </div>
                </ModalDialog>
                <button onClick={this.openModal}>Open Modal</button>
                <button onClick={this.closeModal}>Close Modal</button>
            </section>
        )
    }
}
