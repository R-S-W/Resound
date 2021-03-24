

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



export const updateSong = (songId)=>{
  return $.ajax({
    method: "PATCH",
    url: `api/songs/${songId}/edit`,
    data: {
      song,
    }
  })
}


export const deleteSong =(songId)=>{
  return $.ajax({
    method: 'DELETE',
    url: `api/songs/${songId}`,
  })
} 
