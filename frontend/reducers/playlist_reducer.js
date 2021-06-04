
import {
  ADD_PLAYLIST_SONG,
  NEXT_SONG,
  PREVIOUS_SONG,
  REMOVE_SONG,
  SHUFFLE_PLAYLIST
} from '../actions/song_actions';



const playlistReducer = (state = {songPlaylist: [], playlistIndex: 0}, action)=>{
  Object.freeze(state);
  let newState = Object.assign({}, state);
  
  switch(action.type){
    case ADD_PLAYLIST_SONG:
      //Object.assign is shallow.  a new array is needed for the listening components to detect a change of state.
      newState.songPlaylist = new Array(...newState.songPlaylist); 
      newState.songPlaylist[0] = action.song;
      return newState;   

    // case REMOVE_SONG:
    //   let idx = newState.songPlaylist.indexOf(state[action.id]);
    //   if (idx !==-1) newState.songPlaylist = newState.songPlaylist.splice(idx, 1);
    //   if (idx===newState.playlistIndex) newState.playlistIndex  = null;
    //   else if (idx < newState.playlistIndex) newState.playlistIndex--;

    default: return state;
  }
}
export default playlistReducer;