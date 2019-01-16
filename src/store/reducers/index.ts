
import { AnyAction, combineReducers, Reducer } from "redux";
import * as actions from 'Store/actions';


export default (state: {}, action: AnyAction) => {

    switch (action.type) {
        case actions.DATASETS_FETCHED:
            console.log('DATASETS_FETCHED in reducer!')
            return { ...state, datasets:action.payload};
        default:
            return state;
    }
}
