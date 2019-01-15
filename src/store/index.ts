import reducer from './reducers'
import middleware from './middleware';
import { createStore, Reducer } from "redux";

export const create = ()=> createStore(<Reducer>reducer, middleware);
export default create();
