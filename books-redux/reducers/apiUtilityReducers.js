// import * as actionsCreators from "../actions/actionsCreators";
import * as actions from "../actions/actions";

export const isFetching = (state = false, action) => {
    switch (action.type) {
        case actions.SET_IS_FETCHING:
            return action.isFetching;
        default:
            return state;
    }
}
