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

export const receiveComment = (comment)=>{
  return {
    type: RECEIVE_COMMENT,
    comment
  }
}

export const receiveSongComments = (songId, songComments)=>{
  type: RECEIVE_SONG_COMMENTS,
  songId,
  songComments
}

export const removeComment = (id)=>{
  return {
    type: REMOVE_COMMENT,
    comment_id: id
  }
}


export const createComment = (comment)=> (disp)=>{
  return CommentAPIUtil.createComment(comment)
    .then((com)=>disp(receiveComment(com)));
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
    .then((songComments)=>{receiveSongComments(songId,songComments)})
}



export const deleteComment = (id) =>(disp)=>{
  return CommentAPIUtil.removeComment()
    .then((id)=> disp(removeComment(id)));
}
