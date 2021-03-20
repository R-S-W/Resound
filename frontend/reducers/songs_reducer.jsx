


// const RECEIVESOMETHING= 'RECEIVESOMETHING';
import {ADD_PLAYLIST_SONG, addSong} from '../actions/audio_player_actions'

const songsReducer = (state= {songPlaylist:[]}, action)=>{
  Object.freeze(state);
  switch(action.type){
    case ADD_PLAYLIST_SONG:
      let arr = [].concat(state.songPlaylist);
      return Object.assign({},state,{songPlaylist:arr});
    default:
      return state;
  }
}

export default songsReducer;