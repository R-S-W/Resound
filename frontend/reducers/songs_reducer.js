import {shuffleArray} from '../util/misc_utils';
import merge from 'lodash/merge'


///  #-# consider useing merge
// const RECEIVESOMETHING= 'RECEIVESOMETHING';
import {
  RECEIVE_SONGS,
  RECEIVE_SONG,
  RECEIVE_UPDATED_SONG,
  REMOVE_SONG,
  ADD_PLAYLIST_SONG,
  NEXT_SONG,
  PREVIOUS_SONG,
  SHUFFLE_PLAYLIST
 } from '../actions/song_actions'

const songsReducer = (state= {songPlaylist:[], playlistIndex:0}, action)=>{  //#-#  !!!!!!!!!!
  let newState = {};
  Object.freeze(state);
  
  switch(action.type){
    case RECEIVE_SONGS:
      for(let i = 0; i< action.songs.length; i++){
        newState[action.songs[i].id] = action.songs[i];
      }
      return merge({}, state, newState);

    case RECEIVE_SONG:
      return merge({},state, {[action.song.id]:action.song});
    case RECEIVE_UPDATED_SONG:
      return merge({},state, {[action.song.id]:action.song});

    case REMOVE_SONG:
      newState = merge({}, state);

      let idx = newState.songPlaylist.indexOf(state[action.id]);
      if (idx !==-1) delete  newState.songPlaylist[idx];
      if (idx===newState.playlistIndex) newState.playlistIndex  = null;
      else if (idx < newState.playlistIndex) newState.playlistIndex--;

      delete newState[action.id]
      return newState;

    case ADD_PLAYLIST_SONG:
      
      // let arr = [action.song].concat(state.songPlaylist);
      // return Object.assign({},state,{songPlaylist:arr});

      return merge({},state,{songPlaylist:[action.song]});

    
    case NEXT_SONG:
      newState = merge({}, state);
      if (!newState.playlistIndex) newState.playlistIndex = 0;
      newState.playlistIndex++;
      if (newState.playlistIndex === newState.songPlaylist.length) newState.playlistIndex = null;
      return newState;

    case PREVIOUS_SONG:
      newState = merge({}, state);
      if (!newState.playlistIndex) newState.playlistIndex = newState.playlist.length;
      newState.playlistIndex--;
      if (newState.playlistIndex === -1) newState.playlistIndex = null;
      return newState;

    case SHUFFLE_PLAYLIST: 
      newState = merge({}, state);
      newState.playlist = shuffleArray(newState.playlist);
      newState.playlistIndex = 0;
      return newState;
    default:
      return state;
  }
}

export default songsReducer;

