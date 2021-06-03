import {RECEIVE_USER} from "../actions/user_actions";
import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
import {RECEIVE_SONG, REMOVE_SONG} from '../actions/song_actions';
const defaultState = {}
const usersReducer = (state = defaultState, action)=>{
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_CURRENT_USER:
      return Object.assign({},state, {[action.currentUser.id]:action.currentUser});
    case RECEIVE_USER:
      return Object.assign({},state, {[action.user.id]:action.user})

    case RECEIVE_SONG:
      if (action.createOrUpdate === 'create'){
        let userId = action.song.artist_id;
        let u = Object.assign({},state[userId]);
        u.songIds.unshift(action.song.id);
        return Object.assign({}, state, {[userId]:u});
      }
      // else if(action.createOrUpdate === 'update'){
      //   let userId = action.song.artist_id;
      //   let u = Object.assign({},state[userId]);
      //   if (new Date(action.song.created_at) < new Date()){}
      // }
      else{
        return state;
      }

    case REMOVE_SONG:
      let user = Object.assign({},state[action.artistId]);
      let idx = user.songIds.indexOf(action.id);
      user.songIds = user.songIds.splice(idx,1)
      return Object.assign({}, state, user);
    default:
      return state;
  }
}
export default usersReducer;