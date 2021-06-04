import {combineReducers} from 'redux';
import songsReducer from './songs_reducer';
import usersReducer from './users_reducer';
import commentsReducer from './comments_reducer';
import playlistReducer from './playlist_reducer';

const entitiesReducer = combineReducers(
  {
    users: usersReducer,
    songs: songsReducer,
    playlist: playlistReducer,
    comments: commentsReducer
  }
);
export default entitiesReducer;