import * as SongAPIUtil from '../util/song_api_utils';

export const RECEIVE_SONG = 'RECEIVE_SONG';
export const REMOVE_SONG  = 'REMOVE_SONG';
export const RECEIVE_SONGS = 'RECEIVE_SONGS';
export const ADD_PLAYLIST_SONG = 'ADD_PLAYLIST_SONG';
export const NEXT_SONG  = 'NEXT_SONG';
export const PREVIOUS_SONG = 'PREVIOUS_SONG'
export const SHUFFLE_PLAYLIST = 'SHUFFLE_PLAYLIST';


//Action Creators
export const receiveSong=(song)=>{
  return {
    type: RECEIVE_SONG,
    song
  }
}

export const receiveSongs = (songs)=>{
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

export const nextSong=()=>{
  return {type: NEXT_SONG};
}

export const previousSong=()=>{
  return {type: PREVIOUS_SONG};
}

export const shufflePlaylist = ()=>{
  return {type: SHUFFLE_PLAYLIST};
}



//Thunk Action Creators
export const createSong = (song)=>dispatch=>{
  return SongAPIUtil.createSong(song)
    .then((s)=>{return dispatch(receiveSong(s) )})
}

export const updateSong = (formData, songId)=>{
  console.log('in updateSong in song actions')
  return dispatch=>{
  return SongAPIUtil.updateSong(formData, songId)
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

export const fetchUserSongs = (id) => dispatch => {
  return SongAPIUtil.fetchUserSongs(id)
    .then((songs)=>{return dispatch(receiveSongs(songs))})
}

export const deleteSong = (songId)=>dispatch=>{
  return SongAPIUtil.deleteSong(songId)
    .then(()=>{return dispatch(removeSong(songId))})
}


export const fetchPlaylistSong = (songId) => dispatch => {
  return SongAPIUtil.fetchSong(songId).then((song) => {
    return dispatch(addPlaylistSong(song));
  })

}

