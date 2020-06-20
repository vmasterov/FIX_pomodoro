import {combineReducers} from "redux";
import setTimeReducer from "./setTime/reducer";

export const createRootReducer = () => combineReducers({
    setTime: setTimeReducer
});