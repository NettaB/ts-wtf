
import { AnyAction, combineReducers, Reducer } from "redux";
import * as actions from 'Store/actions';


export default (state: {}, action: AnyAction) => {

    switch (action.type) {
        case actions.TOGGLE_MAIN_DROPDOWN:
            return action.payload;
        default:
            return state;
    }
}
