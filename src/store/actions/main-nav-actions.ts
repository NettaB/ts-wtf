import { Action } from "Types/state";
import * as actionTypes from "Store/actions/action-types";

export const toggleMarker = (payload: boolean): Action<boolean> => {
    return {
        type: actionTypes.TOGGLE_MAIN_DROPDOWN,
        payload
    };
};