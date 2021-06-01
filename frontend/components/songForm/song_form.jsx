import React from 'react';
import {Redirect} from 'react-router-dom';//#-#
import {AiFillCamera} from 'react-icons/ai';



class SongForm extends React.Component{

  constructor(props){
    super(props)
    this.defaultState = {
      audio: null,
      albumCover: null,
      // albumCoverURL:null,
      name: null,
      info: null,
      genre: null,
      songId: undefined
    }
    if (props.formType === 'update'){
      this.defaultState.songId = parseInt(this.props.match.params.songId);
    }else{
      this.defaultState.albumCover = window.defaultAlbumCoverURL;
    }
    
    this.state = Object.assign({}, this.defaultState);



    this.preventDefault = this.stopDefaults.bind(this);
    this.handleDrop = this.handleDrop.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleFile = this.handleFile.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }



  componentDidMount(){
    console.log('mounted')
    if (this.props.formType === 'update' && this.props.songs[this.state.songId]){
      this.updateSongState();
      console.log('updatesongstate in componentdidmount')
    }else if(this.props.formType === 'update'){
      this.props.fetchSong(this.state.songId);
    }
    //listen to changes in the url string
    this.unlisten = this.props.history.listen((location, action)=>{
      let lastSlashIdx = location.pathname.lastIndexOf('/');
      let songIdNum = parseInt(location.pathname.slice(lastSlashIdx+1));
      this.setState({songId: songIdNum });

    })
  }
  componentDidUpdate(){
    if (this.props.formType === 'update' && !this.song){
      this.updateSongState();
    }
    //If the url path is changed 
    if (this.props.formType==='update' && this.song.id !== this.state.songId){
      this.song = undefined;
      this.props.fetchSong(this.state.songId);
    }
  }

  
  render(){
    if (this.props.formType === 'update' && 
      // !this.props.users[this.props.currentUserId].songIds.includes(this.songId)){
      !this.props.currentUserSongIds.includes(this.state.songId)){
      return <Redirect to='/'/>
    }
    return (    
      
      <div className = 'song-form-component'>

      
        <form className = 'song-form' onSubmit = {this.handleSubmit}>
          {
            this.props.formType === 'create' && !this.state.audio ?
            <div className = 'audio-upload-box'
              onDragEnter = {this.stopDefaults}
              onDragLeave = {this.stopDefaults} 
              onDragOver = {this.stopDefaults}
              onDrop = {this.handleDrop}
            >
              <span className = 'audio-title'>Drag & drop your track here</span>
              <label className = 'audio-upload'>
                <input type="file" accept='audio/*' onChange = {this.handleFile('audio')}/>
                <div className = 'audio-button-text'>or choose files to upload</div>
              </label>      
            </div>
            :
            null
          }
          {
            this.state.audio  ?
            <div className= 'audio-success-box'>
              <span className = 'audio-title'>File Loaded</span>
            </div>
            :
            null
          }
          <div className = 'form-inputs'>
            <div className = 'image-upload-box'>
            <img 
              src={this.state.albumCover}
              className = 'album-cover-image'
            />
              <label className = 'image-upload'>
                <input type="file" accept = 'image/*' onChange = {this.handleFile('albumCover')}/>
                <AiFillCamera/> 
                <span>Upload Image</span>
              </label>
          </div>
            <div className= 'column-2'>
              <label className = 'title'>
                <div className = 'title-text'>
                  <span className ='input-name'>Title</span>
                  <span className = 'asterisk'>*</span>
                </div>
                <input type="text" 
                  className = 'title-input' 
                  onChange = {this.handleChange('name')}
                  value = {this.state.name}
                />
              </label>
              <label className = 'genre'>
                <span className ='input-name'>Genre</span>
                <select className = 'genre-select' 
                  name="Genres" 
                  id="genres"
                  onChange = {this.handleChange('genre')}
                  >
                  {
                  }
                  <option value="Alternative">Alternative</option>
                  <option value="Classical">Classical</option>
                  <option value="Electronic">Electronic</option>
                  <option value="Hip-hop">Hip-hop</option>
                  <option value="Jazz">Jazz</option>
                  <option value="Pop">Pop</option>
                  <option value="Rock">Rock</option>
                  <option value="World">World</option>
                </select>
              </label>
              <label className = 'description'>
                <span className = 'input-name'>Description</span>
                <textarea name="description" 
                  id="description"
                  className = 'description' 
                  onChange = {this.handleChange("info")}
                  value = {this.state.info}
                  >
                </textarea>         
              </label>
            </div>
          </div>
          
          <div className = 'form-buttons'>
            <span className = 'asterisk'>*</span>
            <span className= 'input-name'>Required fields</span>
            <span className=  'spacer'></span>
            <button className= 'cancel-button' 
              onClick = {this.handleCancel}>Cancel
            </button>
            <button className = 'save-button'>Save</button>
          </div>          
        </form>
        <span className = 'legal-stuff input-name' >
          By uploading, you confirm that your sounds comply with our Terms of Use and you don't infringe anyone else's rights.
        </span>
      </div>
    )
  }



  componentWillUnmount(){
    this.unlisten();
  }

  updateSongState(){
    this.song = this.props.songs[this.state.songId];
    debugger
    this.setState({
      name:this.song.name,
      info: this.song.info, 
      albumCover: this.song.albumCover || window.defaultAlbumCoverURL,
      artist_name: this.song.artist_name
    });
  }

  stopDefaults(e){
    e.preventDefault();
    e.stopPropagation();
  }
  handleDrop(e){
    this.stopDefaults(e);
    let dt = e.dataTransfer;
    let aFile = dt.files[0]
    
    const fileReader  = new FileReader();
      fileReader.onloadend = ()=>{
        this.setState({
          audio: aFile,
          audioURL:URL.createObjectURL(aFile)
        });
      };
      fileReader.readAsDataURL(aFile);
  }

  handleCancel(e){ 
    e.preventDefault();
    // <Redirect to = '#'/>
    // this.setState({
      //   isDragAndDrop: false,
      //   isShowForm: false
      // });


      //Should I prevent default if it submits?

  }



  handleFile(type){
    return (e)=>{
      let aFile = e.currentTarget.files[0];
      const fileReader  = new FileReader();

      fileReader.onloadend = ()=>{
        this.setState({
          [type]: aFile,
          [`${type}`]:URL.createObjectURL(aFile)
        });
      };
      fileReader.readAsDataURL(aFile);
    }
  }

  handleChange(type){
    return (e)=>{
      this.setState({
        [type]: e.currentTarget.value
      });
    }
  }

  handleSubmit(e){
    console.log('trying to submit')
    e.preventDefault();
    const formData = new FormData();
    formData.append('song[name]', this.state.name);
    formData.append('song[artist_id]', this.props.currentUserId);
    
    if (this.state.info) formData.append('song[info]', this.state.info);
    if (this.state.albumCover) formData.append('song[album_cover]', this.state.albumCover);
    if (this.state.audio) formData.append('song[audio]', this.state.audio);
    if (this.state.genre) formData.append('song[genre]', this.state.genre);

    if (this.props.formType === 'create'){
      formData.append('song[artist_name]', this.props.currentUserUsername);
    }

    debugger

    this.props.handleSong(formData, this.state.songId);
    this.setState(this.defaultState);

  }
}
export default SongForm;