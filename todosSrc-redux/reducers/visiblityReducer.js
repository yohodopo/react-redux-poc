import { SET_VISIBLITY_FILTER } from "../actions/actions";

export const visiblityFilter = (state = "SHOW_ALL" , action) => {
    switch (action.type) {
        case SET_VISIBLITY_FILTER:
            return action.filter
        default:
            return state
    }
}