import { applyMiddleware, createStore } from "redux";
import RootReducer from "../reducers/root_reducer";
import thunk from "redux-thunk";

const preloadedState = {
  entities: { 
    songs: { 
      songPlaylist: [ ]
    }
  }
};

const configureStore = (plState = preloadedState  ) =>{
  return createStore(RootReducer, plState, applyMiddleware( thunk  ));
}

export default configureStore;