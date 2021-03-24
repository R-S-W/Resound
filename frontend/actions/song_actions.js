import * as SongAPIUtil from '../util/song_api_utils';

export const RECEIVE_SONG = 'RECEIVE_SONG';
export const REMOVE_SONG  = 'REMOVE_SONG';
export const RECEIVE_SONGS = 'RECEIVE_SONGS';
export const ADD_PLAYLIST_SONG = 'ADD_PLAYLIST_SONG';



export const receiveSong=(song)=>{
  return {
    type: RECEIVE_SONG,
    song
  }
}

export const recieveSongs = (songs)=>{
  return {
    type: RECEIVE_SONGS,
    songs
  }
}

export const removeSong = ()=>{
  return {
    type: REMOVE_SONG
  }
}

export const addPlaylistSong = (song) => {
  return {
    type: ADD_PLAYLIST_SONG,
    song
  }
}

export const createSong = (song)=>dispatch=>{
  return SongAPIUtil.createSong(song)
    .then((s)=>{return dispatch(receiveSong(s) )})
}

export const updateSong = (song)=>{dispatch=>{
  return SongAPIUtil.updateSong(song)
    .then((s)=>{return dispatch(receiveSong(s));})
}}

export const fetchSongs = ()=>dispatch=>{
  return SongAPIUtil.fetchSongs()
    .then((songs)=>{return dispatch(receiveSongs(songs));})
}

export const fetchSong = (songId) => dispatch=>{
  return SongAPIUtil.fetchSong(songId)
    .then((song)=>{return dispatch(receiveSong(song))})
}

export const deleteSong = (songId)=>dispatch=>{
  return SongAPIUtil.deleteSong(songId)
    .then(()=>{return dispatch(removeSong(songId))})
}


export const fetchPlaylistSong = (songId) => dispatch => {
  return SongAPIUtil.fetchSong(songId).then((s) => {
    return dispatch(addPlaylistSong(s));
  })

}

