import {
    ADD_TODO,
    DELETE_TODO,
    SHOW_ALL,
    SHOW_DONE,
    SHOW_PENDING,
    TOGGLE_TODO,
    SET_VISIBLITY_FILTER
} from "../actions/actions";

import { todosList } from "../appConstants"

export const todos = (state = todosList, action) => {
    switch (action.type) {
        case ADD_TODO:
            let id = ++state.length;
            return [
                ...state, { 'text': action.text, id, 'completed': false }
            ]
        case DELETE_TODO:
            return ([
                ...state
            ].splice(1, action.index))
        case TOGGLE_TODO:
            let newTodos = [...state]
            newTodos[action.index]['isCompleted'] = !newTodos[action.index]['isCompleted'];
            return newTodos;
        default:
            return state;
    }
}
