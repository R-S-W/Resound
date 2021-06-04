
import React from 'react'
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import { HiHeart, HiUserAdd} from 'react-icons/hi';
import { RiPlayListFill} from 'react-icons/ri';


const mapStateToProps = (state)=>{
  return {
    playlist: state.entities.playlist,
    songPlaylist: state.entities.playlist.songPlaylist
  }
}



class LinkBar extends React.Component{

  constructor(props){       ///props has albumName
    super(props);
    // this.song = props.songPlaylist[0];
  }
  

  render(){
  
    if (this.props.songPlaylist.length >0){
      this.song = this.props.songPlaylist[0];

      return (
        <nav className = 'link-bar'>
          <div className = 'song-links'>
            <button className = 'album-cover-button'>
              <img src = {this.song.albumCover} />
            </button>
            <div className = 'text-items'>
              <Link to= {`/users/${this.song.artist_id}`}
                className = 'artist-link'
              >{this.song.artist_name}</Link>
              <Link to = {`/songs/${this.song.id}`}>{this.song.name}</Link>
              {/* <a className = 'artist-link'  href="#">{this.song.artist_name}</a>  */}
              {/* <a href="#">{this.song.name}</a> */}
            </div>
          </div>


          {/* <button className = 'favorite-button'>
            <HiHeart/>
          </button>

          <button className = 'follow-button'>
            <HiUserAdd/>
          </button> 
          <button className='playlist-button'>
            <RiPlayListFill />
          </button>
          */}
        </nav>
      )
    }else{
      return (
        <div>linkbarnotloading</div>
      )
    }
  }
}


export default connect(mapStateToProps)(LinkBar);