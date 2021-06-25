import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {fetchSongs , fetchSong, fetchPlaylistSong} from '../../actions/song_actions';
import { GoPlay} from 'react-icons/go';
import {BsPlayFill} from 'react-icons/bs'


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
    this.state = {
      songHoverList: new Array(this.props.length).fill(false)
    }
    this.handleSongSelect = this.handleSongSelect.bind(this);
    this.handleSongHover = this.handleSongHover.bind(this);
    this.aSongRef;
  }

  songComponent(song, ind){
    return (
      <div className = 'song-grid-element'  key = {song.id} id= {song.id}>
        <button className = 'song-component-button'
          data-index={ind}
          onClick = {this.handleSongSelect}
          onMouseEnter = {this.handleSongHover('enter', ind)}
          onMouseLeave  = {this.handleSongHover('leave', ind)}
        >
          {this.state.songHoverList[ind]
          ?
            <div className = 'cover-div dark-gradient'>
              <img src={song.albumCover} className = "song-component-album-cover"/>
              <BsPlayFill className = 'play-icon-background'/>
              <GoPlay className ='play-icon'/>
            </div>
            :
            <div className = 'cover-div'>
              <img src={song.albumCover} className = "song-component-album-cover"/>
            </div>

          }
        </button>
        <div className = 'text-div'>
          <Link to = {`/songs/${song.id}`}>
            <span className= 'title' >{song.name}</span>
          </Link>
          <Link to = {`/users/${song.artist_id}`}>
            <span className = "album-title"> {song.artist_name} </span>
          </Link>
        </div>
      </div>
    )
  }

  handleSongSelect(e){
    let songIdx = e.currentTarget.dataset.index;
    this.props.fetchPlaylistSong(this.props.songList[songIdx].id);
  }

  handleSongHover(type, ind){
    let value = type==='enter';
    return (e)=>{
      let newArr = new Array(this.props.length).fill(false);
      newArr[ind] = value;      
      this.setState({songHoverList: newArr});
    }
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
    if (this.props.songList.length < 10){
      this.props.fetchSongs();
    }
  


  }

  conponentDidUpdate(){
    // debugger
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(SongGrid)


