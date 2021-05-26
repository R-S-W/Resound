

export const createComment = (comment) =>{
  return $.ajax({
    method: 'POST',
    url: 'api/comments',
    data: comment
  })
}

export const fetchComments = ()=>{
  return $.ajax({
    method: 'GET',
    url: 'api/comments'
  })
}

export const fetchComment = (id) =>{
  return $.ajax({
    method: 'GET',
    url: `api/comments/${id}`
  })
}

export const fetchSongComments = (songId) =>{
  return $.ajax({
    method: 'GET',
    url: `api/songs/${songId}/comments`
  })
}

export const removeComment = (id) =>{
  return $.ajax({
    method: 'DELETE',
    url: `api/comments/${id}`
  })
}