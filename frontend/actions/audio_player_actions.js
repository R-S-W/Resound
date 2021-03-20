

export const ADD_PLAYLIST_SONG = 'ADD_PLAYLIST_SONG';

export const addSong = (song)=>{
  return {
    type: ADD_PLAYLIST_SONG,
    song
  }
}
