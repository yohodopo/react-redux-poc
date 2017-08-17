//Vendor (npm) Libraries
import {combineReducers} from "redux";

//Reducers
import {books} from "./actionReducer";
import {visiblityFilter} from "./visiblityReducer";
import {isFetching} from "./apiUtilityReducers";

export let todoApp = combineReducers({books, visiblityFilter, isFetching});
