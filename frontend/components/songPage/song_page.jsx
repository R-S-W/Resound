import React from 'react';
import { GoPlay} from 'react-icons/go';
import {BsPlayFill} from 'react-icons/bs';

class SongPage extends React.Component{
  constructor(props){
    super(props);
    let songId = this.props.match.params.songId 
    this.state = {
      songId,
      song: this.props.songs[songId],
      content: null,
      comments:null
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount(){
    if (!this.state.song){
      this.props.fetchSong(this.state.songId);
    }
    if (!this.state.comments){
      this.props.fetchSongComments(this.state.songId);
    }
  }
  render(){
    return  this.state.song ? 
    (
      <div className = 'song-page-component'>

        <div className = 'song-container'>
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
        <form className = 'comment-form' onSubmit={this.handleSubmit}>
          <img src={window.profilePic}/>
          <div className = 'input-div'>
            <input type="text" 
              onChange = {this.handleChange('content')} 
              value = {this.state.content} 
              placeholder = 'Write a comment'
            />
          </div>
        </form>
        <div className = 'profile-and-comments'>
          <aside className = 'profile-pic'>
            <img 
              src={ this.state.song.artist_id === this.props.currentUserId ? window.profilePic : window.musicNote}
            />
            <span>{this.state.song.artist_name}</span>
          </aside>
          {this.commentsComponent()}
          
        </div>



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
  
  handleChange(type){
    return (event)=>{
      this.setState({[type]:event.currentTarget.value});
    };
  }

  handleSubmit(e){
    debugger
    e.preventDefault();
    let data = {
      comment: {
        user_id: this.props.currentUserId,
        song_id: this.state.songId,
        content: this.state.content
      }
    };
    this.props.createComment(data);
    this.setState({content:''});
  }
  
  commentsComponent(){

    return <ul className = 'comments'>
      {
        this.state.comments.map((c)=>{
          return <li>

          </li>
        })
      }

            
    </ul>

  }

}
export default SongPage;