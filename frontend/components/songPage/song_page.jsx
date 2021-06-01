import React from 'react';
import {Link} from 'react-router-dom';
import { GoPlay} from 'react-icons/go';
import {BsPlayFill} from 'react-icons/bs';
import {FaCommentAlt} from 'react-icons/fa';
import {MdDelete} from 'react-icons/md';
import {ImPencil} from 'react-icons/im';

class SongPage extends React.Component{
  constructor(props){
    super(props);
    let songId = this.props.match.params.songId 
    this.state = {
      songId,
      song: this.props.songs[songId],
      content: '',
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
      setTimeout(()=>{this.props.fetchSongComments(this.state.songId);}, 500);
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
        
        {
          this.props.currentUserId === this.state.song.artist_id  ? 
          <article className = {'song-UD'}>
            <Link to = {`/songs/edit/${this.state.songId}`}>
              <button className = 'update-button'>
                  <span>Edit</span>
                  <ImPencil/>
              </button>
            </Link>
            <button className = 'delete-button'>
              <span>Delete</span>
              <MdDelete/>

            </button>
          </article>
          :
          null
        }

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
    let songCommentIds = this.props.songs[this.state.songId]?.commentIds;
    if ((!this.state.comments && songCommentIds)  || 
      (this.state.comments && this.state.comments.length !== songCommentIds.length)){
      let commentList = this.props.songs[this.state.songId].commentIds.map((cid)=>this.props.comments[cid]);
      this.setState({comments:commentList});
    }

    


    
  }
  
  handleChange(type){
    return (event)=>{
      this.setState({[type]:event.currentTarget.value});
    };
  }

  handleSubmit(e){
    e.preventDefault();
    let data = {
      comment: {
        user_id: this.props.currentUserId,
        username: this.props.username,
        song_id: this.state.songId,
        content: this.state.content
      }
    };
    this.props.createComment(data);
    this.setState({content:''});
  }
  commentsComponent(){
    if (!this.state.comments) return null;

    let title = this.state.comments.length !==1 ? ' comments' : ' comment';
    title = `${this.state.comments.length}` + title;

    return <aside className = 'comments'>
      <span>
        <FaCommentAlt className = 'comment-icon'/>
        {title}
      </span>
      <ul>
        {
          this.state.comments.map((c)=>{
            let liClasses = "";
            if (c.user_id === this.props.currentUserId) liClasses +=' user-comment';
            
            return <li id = {`comment-${c.id}`} className = {liClasses}>
              <img src={window.profilePic}/>
              <span className = 'comment-username'>{c.username}</span>
              <span className = 'comment-content'>{c.content}</span>
              <span className = 'comment-time'>{this.props.printHowLongAgo(c.created_at)}</span>
              {
                c.user_id === this.props.currentUserId ? 
                  <button className = 'comment-delete' onClick= {()=>{this.props.deleteComment(c.id, c.song_id);}}>
                    <MdDelete/>
                  </button>
                  :
                  null
              }

            </li>
          })
        }

              
      </ul>
    </aside>

  }

}
export default SongPage;