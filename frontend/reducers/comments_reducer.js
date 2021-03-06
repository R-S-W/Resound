import merge from 'lodash/merge';

import {
  RECEIVE_COMMENTS,
  RECEIVE_COMMENT,
  RECEIVE_SONG_COMMENTS,
  REMOVE_COMMENT
}  from '../actions/comment_actions';

const commentsReducer = (state = {}, action)=>{
  let newState = {};
  Object.freeze(state);

  switch (action.type){
    case RECEIVE_COMMENTS:
      action.comments.forEach(c=>{
        newState[c.id] = c;
      });
      return merge({}, state, newState);
    case RECEIVE_SONG_COMMENTS:
      action.songComments.forEach(c=>{
        newState[c.id]=c;
      });
      return merge({}, state,newState);
    case RECEIVE_COMMENT:
      newState[action.comment.id] = action.comment;
      return merge({}, state, newState);

    case REMOVE_COMMENT:
      newState = merge({}, state);
      delete newState[action.commentId]
      return newState;
    default:
      return state;
  }
}
export default commentsReducer;
