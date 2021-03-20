
import React from 'react'

class LinkBar extends React.Component{

  constructor(props){       ///props has albumName
    super(props);
    this.song = props.songPlaylist[0];
  }

  render(){
    return (
      <nav className = 'link-bar'>
        <div className = 'song-links'>
          <input className = 'album-cover' 
            type="image" 
            src = '#'
          />

          {/* <a href="#">{this.song.name}</a> */}
          {/* <a href="#">{this.props.albumName}</a> */}
        </div>

        <input className = 'favorite-button'
          type="image" 
          src = {"#"}
        />
        <input className='follow-button'
          type="image"
          src="#"
        />
        <input className='song-playlist'
          type="image"
          src="#"
        />
      </nav>
    )
  }
}
export default LinkBar;