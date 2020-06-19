import {createStore, compose} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {createRootReducer} from "./services/rootReducer";

const enhancers = compose(
    composeWithDevTools()
);

export default createStore(
    createRootReducer(),
    enhancers
);