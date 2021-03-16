

import {combineReducers} from 'redux';
import SongReducer from './song_reducer';

export default combineReducers({
  songs: SongReducer
  
});