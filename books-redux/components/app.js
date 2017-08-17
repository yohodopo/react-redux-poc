// Vendor(npm) Libraries
import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import { BASICCOMPONENTS } from './basicComponents';
import { BOOKS } from './booksScreen';

export class AppComponent extends React.Component {
    constructor(props) {
        super();
    }

    componentDidMount() {
        console.log("componentDidMount:APP");
        let Loader = document.getElementById("loader");
        Loader.setAttribute("class", "hidden");
    }

    render() {
        return (
            <div>
                <nav>
                    <Link to="/basic">Basic Components</Link>
                    <Link to="/books">Books</Link>
                </nav>
                <div>
                    <Switch>
                        <Route exact path="/" component={BASICCOMPONENTS} />
                        <Route path="/basic" component={BASICCOMPONENTS} />
                        <Route exact path="/books" component={BOOKS} />
                        <Route path="/books/:filter" component={BOOKS} />
                    </Switch>
                </div>
            </div>
        )
    }
}
