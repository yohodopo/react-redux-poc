import {ADD_TODO,
         DELETE_TODO, 
         SHOW_ALL, 
         SHOW_DONE, 
         SHOW_PENDING, 
         TOGGLE_TODO,
         SET_VISIBLITY_FILTER} from "./actions";

export const addTodo = text => ({"type": ADD_TODO, text });
export const deleteTodo = item => ({"type": DELETE_TODO, index:item });
export const toggleTodo = item => ({"type": TOGGLE_TODO, index:item });


export const changeVisibity = filter =>  ({"type":SET_VISIBLITY_FILTER , filter });