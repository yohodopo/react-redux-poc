import {
    ADD_TODO,
    DELETE_TODO,
    // SHOW_ALL,
    // SHOW_DONE,
    // SHOW_PENDING,
    TOGGLE_TODO,
    SET_VISIBLITY_FILTER, SET_IS_FETCHING, // FETCH_TODOS
} from "./actions";

import Defer from "../yohodopo/defer";
import fetch from "isomorphic-fetch";

export const addTodo = text => ({ "type": ADD_TODO, text });
export const deleteTodo = item => ({ "type": DELETE_TODO, id: item });
export const toggleTodo = item => ({ "type": TOGGLE_TODO, id: item });

export const setBooks = (books) => ({ type: "SET_BOOKS", books });

// export const setBooks = (books) => ({ type: "SET_BOOKS", books });

export const changeVisibity = filter => ({ "type": SET_VISIBLITY_FILTER, filter });

export const setIsFetching = isFetching => ({ type: SET_IS_FETCHING, isFetching });

export const setIsLoggedin = isLoggedIn => ({ type: "IS_LOGGED_IN", isLoggedIn });

export const getBookDetail = id => ({ type: 'GET_BOOK_DETAIL_ID', id });

export const authenticateUser = credentials => {
    return (dispatch) => {
        dispatch(setIsFetching(true));
        let deferred = new Defer();
        setTimeout(() => {
            let admin = credentials.userId === "admin" && credentials.password === "admin";
            let validUser = credentials.userId === "mass" && credentials.password === "rules";
            if (validUser) {
                deferred.resolve({ isLoggedIn: true });
                dispatch(setIsLoggedin(true));
            } else if (admin) {
                localStorage.setItem("tokenId", "YohoDopo");
                deferred.resolve({ isLoggedIn: true });
                dispatch(setIsLoggedin(true));
            } else {
                deferred.reject({ status: 401 });
            }
            dispatch(setIsFetching(false));
        }, 2000);
        return deferred.promise;
    }
}

export const getVisibleBooks = (books = {}, filter) => {
    switch (filter) {
        case "SHOW_ALL":
            return books;
        case "SHOW_PENDING":
            let toRead = {};
            Object.keys(books).forEach((key) => {
                (!books[key].isCompleted) && (toRead[key] = books[key]);
            });
            return toRead;
        case "SHOW_DONE":
            let read = {};
            Object.keys(books).forEach((key) => {
                books[key].isCompleted && (read[key] = books[key]);
            });
            return read;
        default:
            return books;
    }
}

export const fetchBooks = (query = "''") => {
    return (dispatch) => {
        dispatch(setIsFetching(true));
        return fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
            .then(Response => {
                if (Response.ok) {
                    return Response.json()
                } else {
                    return {}
                }
            })
            .then(data => {
                let books = {};
                data.items.forEach((book) => {
                    books[book.id] = book;
                }, this);
                return books;
            }).then(data => {
                dispatch(setIsFetching(false));
                dispatch(setBooks(data));
            }).catch(error => {
                dispatch(setIsFetching(false));
                console.log(`Error occoured, ${error.message}`);
            });
    }
}
