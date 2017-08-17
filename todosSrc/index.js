import React from "react";
import {render} from "react-dom";
import {AppComponent} from './components/app';

import "./styles/todo.scss";



//let store = createStore(todoApp);
render(
    <AppComponent />,
  document.getElementById('root')
);