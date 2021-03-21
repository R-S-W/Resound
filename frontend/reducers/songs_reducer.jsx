

///  #-# consider useing merge
// const RECEIVESOMETHING= 'RECEIVESOMETHING';
import {ADD_PLAYLIST_SONG, RECEIVE_SONG} from '../actions/audio_player_actions'

const songsReducer = (state= {songPlaylist:[]}, action)=>{
  
  Object.freeze(state);
  
  switch(action.type){
    case ADD_PLAYLIST_SONG:
      let arr = [action.song].concat(state.songPlaylist);
      return Object.assign({},state,{songPlaylist:arr});
    case RECEIVE_SONG:
      return Object.assign({}, state, {[action.song.id]: action.song} )

    default:
      return state;
  }
}

export default songsReducer;