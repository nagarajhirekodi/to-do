import { applyMiddleware, createStore } from "redux";
import reducer from "./reducers/Reducers";
import thunkMiddleware from "redux-thunk";

export default createStore(reducer, applyMiddleware(thunkMiddleware));
