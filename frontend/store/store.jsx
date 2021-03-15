import { applyMiddleware, createStore } from "redux";
import RootReducer from "../reducers/root_reducer";
import thunk from "redux-thunk";
import logger from "redux-logger";

const configureStore = (plState = {}) =>{
  return createStore(RootReducer, plState, applyMiddleware( thunk, logger));
}

export default configureStore;