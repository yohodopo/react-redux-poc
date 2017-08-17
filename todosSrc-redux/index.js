import React from "react";
import fetch from "isomorphic-fetch";
// lets us dispatch() functions from API calls
import thunkMiddleware from "redux-thunk";
// neat middleware that logs actions
import { createLogger } from "redux-logger";
import { render } from "react-dom";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import { addTodo, deleteTodo, toggleTodo, changeVisibity, setIsFetching } from "./actions/actionsCreators"

import { todoApp } from './reducers/reducer'
import { AppComponent } from './components/app';

import "./styles/todo.scss";

let loggerMiddleware = createLogger();

let store = createStore(todoApp, applyMiddleware(
  loggerMiddleware,
  thunkMiddleware
));

// var abc = store.dispatch(changeVisibity("dumduck"));
// console.log("abc", abc);
// store.getState();

store.dispatch(setIsFetching(true));
fetch("https://www.googleapis.com/books/v1/volumes?q=angular").then(Response => Response.json()).then(data => {
  console.log("BooksAPI", data)
  setTimeout(()=>{
    store.dispatch(setIsFetching(false));
  }, 2000)
})

render(
  <Provider store={store}>
    <AppComponent />
  </Provider>,
  document.getElementById('root')
);