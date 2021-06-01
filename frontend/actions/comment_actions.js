import * as CommentAPIUtil from '../util/comment_api_util';


export const RECEIVE_COMMENTS ="RECEIVE_COMMENTS";
export const RECEIVE_COMMENT ="RECEIVE_COMMENT";
export const RECEIVE_SONG_COMMENTS= "RECEIVE_SONG_COMMENTS";
export const REMOVE_COMMENT = "REMOVE_COMMENT";

export const receiveComments =  (comments)=>{
  return {
    type: RECEIVE_COMMENTS,
    comments
  }
}

export const receiveComment = (comment, isNewComment = false)=>{
  return {
    type: RECEIVE_COMMENT,
    comment,
    isNewComment
  }
}

export const receiveSongComments = (songId, songComments)=>{
  return {
    type: RECEIVE_SONG_COMMENTS,
    songId,
    songComments
  }
}

export const removeComment = (commentId, songId)=>{
  return {
    type: REMOVE_COMMENT,
    commentId,
    songId
  }
}


export const createComment = (comment)=> (disp)=>{
  return CommentAPIUtil.createComment(comment)
    .then((com)=>disp(receiveComment(com, true)));
}

export const fetchComments = ()=>(disp) =>{
  return CommentAPIUtil.fetchComments()
    .then((comments)=>disp(receiveComments(comments)));
}

export const fetchComment = (comment)=>(disp)=>{
  return CommentAPIUtil.fetchComment()
    .then((com)=>disp(receiveComment(com)));
}

export const fetchSongComments = (songId) => (disp)=>{
  return CommentAPIUtil.fetchSongComments(songId)
    .then((songComments)=>{disp(receiveSongComments(songId,songComments))})
}


export const deleteComment = (commentId,songId) =>(disp)=>{
  return CommentAPIUtil.removeComment(commentId)
    .then(()=> disp(removeComment(commentId, songId)));
}
