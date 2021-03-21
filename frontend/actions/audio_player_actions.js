import * as SongAPIUtil from '../util/song_api_utils';

export const ADD_PLAYLIST_SONG = 'ADD_PLAYLIST_SONG';
export const RECEIVE_SONG = 'RECEIVE_SONG';

export const addPlaylistSong = (song)=>{
  return {
    type: ADD_PLAYLIST_SONG,
    song
  }
}

export const receiveSong = (song)=>{
  return {
    type: RECEIVE_SONG,
    song
  }
}



export const fetchSong  = (songId)=> dispatch => {
  return SongAPIUtil.fetchSong(songId).then((s)=>{
    return dispatch(receiveSong(s));
  })
}

export const fetchPlaylistSong = (songId)=>dispatch=>{
  return SongAPIUtil.fetchSong(songId).then((s)=>{
    return dispatch(addPlaylistSong(s));
  })

}
