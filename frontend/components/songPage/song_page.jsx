import React from 'react';
import { GoPlay} from 'react-icons/go';
import {BsPlayFill} from 'react-icons/bs';

class SongPage extends React.Component{
  constructor(props){
    super(props);
    let songId = this.props.match.params.songId 
    this.state = {
      songId,
      song: this.props.songs[songId]
    };
  }
  componentDidMount(){
    if (!this.state.song){
      this.props.fetchSong(this.state.songId);
    }
  }
  render(){
    return  this.state.song ? 
    (
      <div className = 'song-page-component'>
        <div className = 'song-background'>
          <img src={this.state.song.albumCover} />
        </div>
        <article className= 'song'>
          <div className = 'play-button'>
            <BsPlayFill className = 'play-icon-background'/>
            <GoPlay className ='play-icon'/>
          </div>
          <section className = 'text'>
            <span className = 'artist-name'>{this.state.song.artist_name}</span>
            <span className = 'song-name'>{this.state.song.name}</span>
          </section> 
          <span className="time-ago">{this.props.printHowLongAgo(this.state.song.created_at)}</span>
          <img className='song-wave-pic' src= {window.defaultSongWaveWhite}></img>
          <img className = 'album-pic' src= {this.state.song.albumCover}></img>
        </article>

      </div>
    )
    :
    null  
  }

  componentDidUpdate(){
    if (!this.state.song && this.props.songs[this.state.songId]){
      this.setState({song: this.props.songs[this.state.songId]});
    }
  }



}
export default SongPage;