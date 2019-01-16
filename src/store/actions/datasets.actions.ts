import { Action } from "Types/state";
import * as actionTypes from "Store/actions/action-types";

export const fetchDatasets = () => {
    return function (dispatch: any) {
        fetchTasksFromServer().then((data: any) => {
            dispatch(datasetsFetched(data))
          })
    }

}

export const datasetsFetched = (payload: any): Action<any> => {
    console.log('datasetsFetched');
    return {
        type: actionTypes.DATASETS_FETCHED,
        payload
    }
}


export async function fetchTasksFromServer () {
    await fetch('http://www.mocky.io/v2/5c3efa3b3500006500ec35a7', {
        method: 'get'
    }).then(function(response) {
        console.log(response);
        
    }).catch(function(err) {
        // Error :(
    });
  }

