

// export const createSong = (song) => {
//   debugger
//   return $.ajax({
//     method: 'POST',
//     url: 'api/songs',
//     data: {song},
//     // contentType:false,
//     // processData:false
//   })
// }
export const createSong= (formData)=>{
  return $.ajax({
    method: 'POST',
    url: 'api/songs',
    data: formData,
    contentType: false,
    processData: false
  })
}

export const fetchSong=(songId)=>{
  return $.ajax({
    method: "GET",
    url: `api/songs/${songId}`
  });
}

export const fetchSongs = ()=>{
  return $.ajax({
    method:'GET',
    url: 'api/songs'
  })
}

export const fetchUserSongs = (id) =>{
  return $.ajax({
    method: 'GET',
    url: `api/users/${id}/songs`
  })
}


export const updateSong = (formData, songId)=>{
  // console.log(song)
  return $.ajax({
    method: "PATCH",
    url: `api/songs/${songId}`,
    data: formData,
    contentType: false,
    processData: false
    // data: {
    //   song,
    // }
  })
}


export const deleteSong =(songId)=>{
  return $.ajax({
    method: 'DELETE',
    url: `api/songs/${songId}`,
  })
} 
