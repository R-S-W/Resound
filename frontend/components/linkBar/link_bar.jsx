
import React from 'react'
import { HiHeart, HiUserAdd} from 'react-icons/hi';
import { RiPlayListFill} from 'react-icons/ri';

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
              <img   src = {this.song.albumCoverURL} />
            </button>
            <div className = 'text-items'>
              <a href="#">{this.song.name}</a>
              <a href="#">{this.song.artist_id}</a>
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
        <div></div>
      )
    }
  }
}
export default LinkBar;