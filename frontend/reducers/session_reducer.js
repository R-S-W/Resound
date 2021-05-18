
import {RECEIVE_CURRENT_USER,LOGOUT_CURRENT_USER} from '../actions/session_actions';
import { RECEIVE_UPDATED_SONG } from '../actions/song_actions';


const defaultState= {id: null, songIds: null};

const sessionReducer = (state=defaultState, action)=>{  
  
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_CURRENT_USER:
      return  Object.assign({}, state,{id:action.currentUser.id, songIds: action.currentUser.songIds});
    case LOGOUT_CURRENT_USER:
      return defaultState; //Object.assign({}, state, { session: { id:null } });
    case RECEIVE_UPDATED_SONG:
      state.songIds.push(action.song.id);   //this is unsorted now
      return Object.assign({},state )
    default:
      return state;
  }
}
export default sessionReducer;