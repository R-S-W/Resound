import React from 'react';
import {Redirect} from 'react-router-dom';//#-#



class SongForm extends React.Component{

  constructor(props){
    super(props)
    this.defaultState = {
      audio: null,
      // audio_url: null,
      albumCover: null,
      name: null,
      info: null,
      genre: null,
    }
    if (props.formType === 'update'){
      this.songId = this.props.match.params.songId;
      // this.defaultState.id = this.songId;
    }else{
      this.defaultState.albumCover = window.defaultAlbumCover;
    }
    
    this.state = Object.assign({}, this.defaultState);


    this.imgRef = React.createRef();
    // this.handleSearch = this.handleSearch.bind(this);
    // this.handleTest= this.handleTest.bind(this);
    this.preventDefault = this.stopDefaults.bind(this);
    this.handleDrop = this.handleDrop.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleFile = this.handleFile.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  // handleSearch(e){//throw the search files thingy

  // }

  componentDidMount(){
    console.log('mounted')
    if (this.props.formType === 'update' && this.props.songs[this.songId]){
      this.updateSongState();
      console.log('updatesongstate in componentdidmount')
    }else{
      this.props.fetchSong(this.songId);
    }
  }
  componentDidUpdate(){
    if (this.props.formType === 'update' && !this.song){
      this.updateSongState();
    }
  }

  updateSongState(){
    this.song = this.props.songs[this.songId];
    this.setState({
      
      name:this.song.name,
      info: this.song.info, 
      albumCover: this.song.albumCover || window.defaultAlbumCover,
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
    let file = dt.files[0]
    imageRef.current.src = URL.createObjectURL(file);
  }

  handleCancel(e){ 
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
          // [type+"_url"]: fileReader.result
        });
      };
      fileReader.readAsDataURL(aFile);
    }
  }

  handleChange(type){
    // debugger
    return (e)=>{
      this.setState({
        [type]: e.currentTarget.value
      });
    }
  }

  handleSubmit(e){
    console.log('trying to submit')
    // debugger
    e.preventDefault();
    const formData = new FormData();
    formData.append('song[name]', this.state.name);
    formData.append('song[artist_id]', this.props.currentUserId);
    
    if (this.state.info) formData.append('song[info]', this.state.info);
    if (this.state.albumCover) formData.append('song[album_cover]', this.state.albumCover);
    if (this.state.audio) formData.append('song[audio]', this.state.audio);
    if (this.state.genre) formData.append('song[genre]', this.state.genre);
    // formData.append('song[id]', this.songId);
    // debugger
    debugger
    this.props.handleSong(formData, this.songId);

    // this.props.handleSong(this.state);


    this.setState(this.defaultState);

  }

  // handleTest(e){
  //   debugger
  //   this.setState({
  //     isShowForm:true,
  //     isDragAndDrop: false
  //   })

  // }

  songLoadComponent(){
    // return (
    //   <div className='song-load-component'>
        
    //     <button onClick={this.handleTest }>Test the form</button>


    //     { this.state.isDragAndDrop ?
    //       <div className='drag-and-drop-component' >
    //         <span>Drag and drop your tracks here</span>
    //         <button className='search-button'
    //           onClick={this.handleSearch}
    //         >or choose files to upload
    //         </button>
    //       </div>
    //       :
    //       <div className='search-thingy'>

    //       </div>
    //     }

    //   </div>
    // )

  }


  render(){
    
    // if (this.state.isDragAndDrop){
    //   return this.songLoadComponent();
    // }
    return (    
      
      <div className = 'song-form-component'>
        //
        {
          this.props.formType === 'create'  ?

          <div className = 'audio-upload-box'>
            { this.state.albumCover ? <img src={this.state.albumCover} /> : null}
            <span>Choose File to Upload:</span>
            <button className = 'audio-input-button'>
              <input type="file" accept='audio/*' onChange = {this.handleFile('audio')}/>
            </button>
          </div>
          :
          null
        }
        //
      
        <form className = 'song-form' onSubmit = {this.handleSubmit}>

          <div className = 'image-upload-box'
            onDragEnter = {this.stopDefaults}
            onDragLeave = {this.stopDefaults} 
            onDragOver = {this.stopDefaults}
            onDrop = {this.handleDrop}
          >
            <img 
              // src  = '#'
              src={this.state.albumCover}
              className = 'album-cover-image'
              ref = {this.imgRef}
            />
            <button>Song {this.songId} Upload Image
              <input type="file" accept = 'image/*' onChange = {this.handleFile('albumCover')}/>
            </button>
          </div>

          <label>
            <span className = 'asterisk'>*</span>
            <span>Title</span>
            <input type="text" 
              className = 'title-input' 
              onChange = {this.handleChange('name')}
              value = {this.state.name}
            />
          </label>

          <label>
            <span className = 'asterisk'>*</span>
            <span>Genre</span>
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
          <label>Description
            <textarea name="description" 
              id="description"
              className = 'description' 
              onChange = {this.handleChange("info")}
              value = {this.state.info}
            >
            </textarea>         
          </label>
        
          <button className= 'cancel-button' 
            onClick = {this.handleCancel}>Cancel
          </button>
          <button>Submit</button>
        
        </form>
      </div>
    )
  }

}
export default SongForm;