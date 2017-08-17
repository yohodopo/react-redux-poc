import React from "react";
// import fetch from "isomorphic-fetch";
// lets us dispatch() functions from API calls
import thunkMiddleware from "redux-thunk";
// neat middleware that logs actions
import { createLogger } from "redux-logger";
import { render } from "react-dom";
import { Provider } from 'react-redux';
import "./styles/todo.scss";
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter } from 'react-router-dom';

// import { addTodo, deleteTodo, toggleTodo, changeVisibity, setIsFetching } from "./actions/actionsCreators"

import { todoApp } from './reducers/reducer'
import { AppComponent } from './components/app';
import runtime from 'serviceworker-webpack-plugin/lib/runtime';

let loggerMiddleware = createLogger();

let store = createStore(todoApp, applyMiddleware(
  loggerMiddleware,
  thunkMiddleware
));

render(
  <Provider store={store}>
    <BrowserRouter>
      <AppComponent />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

if ('serviceWorker' in navigator) {
  runtime.register();
}
