import React from 'react';
import { GoPlay} from 'react-icons/go';
import {BsPlayFill} from 'react-icons/bs';
import {Link} from 'react-router-dom'

class UserPage extends React.Component{
  constructor(props){
    super(props);
    this.userId = parseInt(this.props.match.params.userId);
    this.user = this.props.users[this.userId];



    this.state = {
      isMissingASong: true
    }
    
  }

  componentDidMount(){
    if (!this.props.users[this.userId]){
      this.props.fetchUser(this.userId);
    }
    else if (this.props.users[this.userId].id === this.props.currentUser.id){
      this.manageMissingSongs();
    }
  }


  render(){
    return <div className = 'user-page-component'>
      <header>
        <img className = 'profile-pic'
          src = {window.musicNote}
        ></img>
        <img className = 'cover-pic'
          src = {window.musicSheet}
        ></img>
      </header>
      
      <nav className = 'list-buttons'>
        <button>All Tracks</button>
      </nav>

      {this.trackList()}
      
      <footer>
        <img className = 'footer-pic' src = {window.resoundLogoGrayURL}/>
        <div className = 'line'></div>
      </footer>
      


    </div>
  }

  componentDidUpdate(){
    console.log('comp Did update in userpage')
    if (!this.user) this.user = this.props.users[this.userId];
    this.manageMissingSongs();
  }

  // getUserSongs(){
  //   for (let i =0; i< this.props.currentUser.songIds.length; i++){
  //     if (!this.props.songs[this.props.currentUser.songIds[i]]){
  //       this.props.fetchUserSongs(this.userId);
  //       break;
  //     }
  //   } 
  // }

  manageMissingSongs(){
    if (this.isThereMissingSong()){
      this.props.fetchUserSongs(this.userId);
      if (!this.state.isMissingASong) this.setState({isMissingASong : true});
    }else{
      if (this.state.isMissingASong)  this.setState({isMissingASong:false});
    }
  }

  isThereMissingSong(){
    if (this.user.songIds.length === 0) return false;
    for (let i =0; i< this.user.songIds.length; i++){
      if (!this.props.songs[this.user.songIds[i]]){
        return true;
      }
    }
    return false;
  }

  trackList(){
    let songList=[];
    if (this.state.isMissingASong) return null;
    
    this.user.songIds.forEach(sid=>{
      songList.push(this.props.songs[sid])  ;
    });

    
    


    return <ul className = 'track-list'>
      {
        songList.map((s)=>{
          return <li id = {`song-${s.id}`}>
            <Link to= {`/songs/${s.id}`} className = 'album-pic-link'>
              <img className = 'album-pic' src= {s.albumCover}></img>
            </Link>
            <button className = 'play-button'>
              <BsPlayFill className = 'play-icon-background'/>
              <GoPlay className ='play-icon'/>
            </button>
            <article className = 'text'>
              <span className = 'artist-name'>{s.artist_name}</span>
              <span className = 'song-name'>
                <Link to = {`/songs/${s.id}`}>
                  {s.name}
                </Link>
              </span>
            </article>
            <span className="time-ago">{this.props.printHowLongAgo(s.created_at)}</span>
            <img className='song-wave-pic' src= {window.defaultSongWave}></img>
            <article className = 'bottom-buttons'></article>
          </li>
        })
      }
    </ul>
  }

}

export default UserPage;