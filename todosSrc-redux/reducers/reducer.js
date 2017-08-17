//Vendor (npm) Libraries
import {combineReducers} from "redux";

//Reducers
import {todos} from "./actionReducer";
import {visiblityFilter} from "./visiblityReducer";
import {isFetching} from "./apiUtilityReducers";

export let todoApp = combineReducers({todos, visiblityFilter, isFetching});
