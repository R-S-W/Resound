import React from 'react';
import {connect} from 'react-redux';
import {fetchSongs , fetchSong, fetchPlaylistSong} from '../../actions/song_actions';
import { FaPlayCircle} from 'react-icons/fa';


const mapStateToProps= (state)=>{
  let keys = Object.keys(state.entities.songs);
  delete keys[keys.indexOf("songPlaylist")];
  delete keys[keys.indexOf("playlistIndex")]
  return {
    songList: keys.map((k)=>state.entities.songs[k])
  }
}
const mapDispatchToProps = (dispatch)=>{
  return {
    fetchSongs: ()=>{dispatch(fetchSongs())},
    fetchSong: (id)=>{dispatch(fetchSong(id))},
    fetchPlaylistSong: (id)=>{dispatch(fetchPlaylistSong(id))}
  }
}





class SongGrid extends React.Component{
  constructor(props){
    super(props);
    this.handleSongSelect = this.handleSongSelect.bind(this);
  }

  songComponent(song, ind){
    return (

      <div className = 'song-grid-element'  key = {song.id} id= {song.id}>
        <button className = 'song-component-button'
          data-index={ind}
          onClick = {this.handleSongSelect}
        >
          <img src={song.albumCoverURL} className = "song-component-album-cover"/>
          {/* <FaPlayCircle className ='play-icon'/> */}
        </button>
        <div className = 'text-div'>
          <span className= 'title' >{song.name}</span>
          {/* <br/> */}
          <span className = "album-title"> {song.artist_name} </span>
        </div>
      </div>
    )
  }

  handleSongSelect(e){
    // debugger
    // let idx = e.currentTarget.dataset.index;
    // console.log(idx);
    let songIdx = e.currentTarget.dataset.index;
    this.props.fetchPlaylistSong(this.props.songList[songIdx].id);

  }

  render(){
    return (
      <div className = 'song-grid'>
        {
          this.props.songList.map((s,ind)=>{
            return this.songComponent(s,ind);
          })
        }
      </div>
    )
  }
  componentDidMount(){
    this.props.fetchSongs();
    // this.props.fetchSong(1);
    // this.props.fetchSong(2);
    // this.props.fetchSong(3)


  }

  conponentDidUpdate(){
    // debugger
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(SongGrid)


