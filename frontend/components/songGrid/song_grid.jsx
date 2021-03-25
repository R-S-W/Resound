import React from 'react';
import {connect} from 'react-redux';
import {fetchSongs , fetchSong} from '../../actions/song_actions';
import { FaPlayCircle} from 'react-icons/fa';


const mapStateToProps= (state)=>{
  let keys = Object.keys(state.entities.songs);
  delete keys[keys.indexOf("songPlaylist")];
  delete keys[keys.indexOf("playlistIndex")]
  return {
    songs: keys.map((k)=>state.entities.songs[k])
  }
}
const mapDispatchToProps = (dispatch)=>{
  return {
    fetchSongs: ()=>{dispatch(fetchSongs())},
    fetchSong: (id)=>{dispatch(fetchSong(id))}
  }
}





class SongGrid extends React.Component{
  constructor(props){
    super(props);
    this.handleSongSelect = this.handleSongSelect.bind(this);
  }

  songComponent(song){
    return (

      <div className = 'song-grid-element'  id = {song.id}>
        <button className = 'song-component-button'
          onClick = {this.handleSongSelect}
        >
          <img src={song.albumCoverURL} className = "song-component-album-cover"/>
          {/* <FaPlayCircle className ='play-icon'/> */}
        </button>
        <div className = 'text-div'>
          <span className= 'title' >{song.name}</span>
          {/* <br/> */}
          <span className = "album-title"> {song.id} </span>
        </div>
      </div>
    )
  }

  handleSongSelect(e){

  }

  render(){
    return (
      <div className = 'song-grid'>
        {
          this.props.songs.map((s)=>{
            return this.songComponent(s);
          })
        }
      </div>
    )
  }
  componentDidMount(){
    // this.props.fetchSongs();
    this.props.fetchSong(1);
    this.props.fetchSong(2);
    this.props.fetchSong(3)


  }

  conponentDidUpdate(){
    debugger
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(SongGrid)


