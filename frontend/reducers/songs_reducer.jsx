

///  #-# consider useing merge
// const RECEIVESOMETHING= 'RECEIVESOMETHING';
import {
  RECEIVE_SONGS,
  RECEIVE_SONG,
  REMOVE_SONG,
  ADD_PLAYLIST_SONG
 } from '../actions/song_actions'

const songsReducer = (state= {songPlaylist:[]}, action)=>{
  let newState = {};
  Object.freeze(state);
  
  switch(action.type){
    case RECEIVE_SONGS:
      for(let i = 0; i< action.songs.length; i++){
        newState[action.songs[i].id] = action.songs[i];
      }
      return Object.assign({}, state, newState);
    case RECEIVE_SONG:
      return Object.assign({},state, {[action.song.id]:action.song});
    case REMOVE_SONG:
      newState = Object.assign({}, state);
      delete newState[action.id]
      return newState;
    case ADD_PLAYLIST_SONG:
      let arr = [action.song].concat(state.songPlaylist);
      return Object.assign({},state,{songPlaylist:arr});
    default:
      return state;
  }
}

export default songsReducer;