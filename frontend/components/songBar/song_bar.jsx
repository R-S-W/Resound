
import React from 'react';

import { FaPlay, FaPause} from 'react-icons/fa';
import { IoPlaySkipBackSharp, IoPlaySkipForwardSharp} from 'react-icons/io5';
import { ImShuffle, ImLoop} from 'react-icons/im';
import { RiVolumeUpFill} from 'react-icons/ri';



class SongBar extends React.Component {
  constructor(props){


    super(props);

    this.state = {
      numLoops: 0,
      song: props.songPlaylist[0],
      isPaused:true,
      currentTime: 0,
      volume: 1,
      isVolumeVisible: false


    }
    this.audioRef = React.createRef();
    this.scrubberBackgroundRef = React.createRef();
    this.scrubberInputRangeRef = React.createRef();
    this.volumeComponentInputRef = React.createRef();


  
    // this.audio = new Audio('Song_3.mp3');
    this.handlePlay = this.handlePlay.bind(this);
    this.handleTheClick= this.handleTheClick.bind(this);
    this.handleTimeChange = this.handleTimeChange.bind(this);
    this.handleVolumeChange = this.handleVolumeChange.bind(this);
    this.handleVolumeModal = this.handleVolumeModal.bind(this);
    this.handleMute = this.handleMute.bind(this);

    this.interval;  //handles the interval that rerenders component every second
    // this.setThisInterval = this.setThisInterval.bind(this);

  }


  playButton(){
    return (
      <button className='play-button'
      onClick={ (e)=>{
        if (this.state.isPaused) {
          this.audioRef.current.play();
          this.setState({isPaused: false});
          this.setThisInterval();
          

        } else {
          this.audioRef.current.pause();
          clearInterval(this.interval);
          this.setState({isPaused: true})

        }
      }}
      >

        {!this.audioRef.current || this.audioRef.current.paused ? 
          <FaPlay className = 'play-icon'/>  
          : 
          <FaPause className = 'play-icon'/>}
         
      </button>
    )
  }


  loopButton(){

    let imgLink;
    switch (this.state.numLoops){
      case 0:
        imgLink= "#";
      case 1:
        imgLink = "#";
      case 2:
        imgLink = "#";
    }

    return (

      <button className='loop-button'
        onClick={(e)=>(
          this.setState({
            numLoops: (this.state.numLoops + 1) % 3
          })
        )}
      >
        <ImLoop className = 'loop-icon'/>
      </button>
    )
  }


  scrubber() {
    let styleString;
    if (this.audioRef.current){
      let progPercent = this.audioRef.current.currentTime/this.audioRef.current.duration;
      styleString = `linear-gradient(90deg, #ff0000  ${100 * progPercent}%, #000000 ${100 * progPercent}%)`
    }else{
      styleString  = '##000000'
    }

    return (
      // <div className = "scrubber">
        <input className = 'scrubber-input-range'
          type="range"
          max='1'
          step = '.01'
          defaultValue = '0'
          ref = {this.scrubberInputRangeRef}
          onChange = {this.handleTimeChange}
          style={{ background: styleString}}
        />
      // </div>

    )
  }

  volumeComponent(){
    
    return (
      <div className = 'volume-component'
        onMouseEnter = {this.handleVolumeModal}
        onMouseLeave = {this.handleVolumeModal}
      >
        {
          this.state.isVolumeVisible && this.state.song ?
          <div className = "volume-background ">

            <input className = 'volume-slider-input slider' 
              type="range"
              max='1' 
              step = '.01'
              value = {this.state.volume}
              ref= {this.volumeComponentInputRef}
              onChange = {this.handleVolumeChange}
              style={{ background: `linear-gradient(90deg, #ff0000  ${100*this.state.volume}%, #000000 ${100*this.state.volume}%)`}}
            />
          </div>
          :
          null
        }
        <button className = 'volume-button'  
          onClick = {this.handleMute}
        >
          <RiVolumeUpFill className='volume-icon' />
        </button>
      </div>
    )
  }



  //METHODS____________________


  handleTimeChange(e){
    let audio = this.audioRef.current;
    audio.currentTime = e.target.value*audio.duration;
    this.setState({currentTime: audio.currentTime});
  }

  incrementProgressBar(){
    let audio = this.audioRef.current;
    this.scrubberInputRangeRef.current.value = audio.currentTime/audio.duration;

  }



  handlePlay(e) { //Handle play button functionality
    if (this.audioRef.current.paused) {
      this.audioRef.current.play();
    } else {
      this.audioRef.current.pause();
    }
    this.setState({ isPaused: this.audioRef.current.paused });
  }


  setThisInterval() { //Set this.interval
    if (this.interval) clearInterval(this.interval);
    this.interval = setInterval(() => {
      this.setState({
        currentTime: this.audioRef.current.currentTime
      });
      this.incrementProgressBar();
    }, 1000);
  }

  handleVolumeChange(e){    
    this.audioRef.current.volume =  e.target.value;
    this.setState({volume: e.target.value})
  }


  handleVolumeModal(e){
    this.setState({isVolumeVisible: !this.state.isVolumeVisible});
  }

  handleMute(e){
    let v = 0 ;
    if (!this.prevVolume){
      this.prevVolume = this.state.volume;
    }else if (this.state.volume > 0){
      this.prevVolume = this.state.volume;
    }else{
      this.setState({volume: this.prevVolume})
      v = this.prevVolume;
      this.prevVolume= 0;
    }
    this.audioRef.current.volume = v;
    this.setState({volume:v});
  }


  //LIFECYCLE METHODS___________________

                    //////REMEMBER TO DECREMENT NUMLOOPS
  render(){
    // let aSong = this.props.songPlaylist[0];
    return (
      <div className = 'song-bar'>
        {/* <button onClick={this.handleTheClick}>Load Test Song</button> */}



        {
          this.state.song ? 
            <audio 
              src={this.state.song.audioURL}
              className = 'audio' 
              // controls 
              ref = {this.audioRef} 
            ></audio>
            :
            <audio className = 'audio'/>
        }
        

        <button className = 'reverse-button'>
          <IoPlaySkipBackSharp className ='reverse-icon'/>
        </button>
      
        {this.playButton()}

        <button className = 'forward-button'>
          <IoPlaySkipForwardSharp className = 'forward-icon'/>
        </button>

        <button className='shuffle-button' 
          onClick = {this.findPos}
        >
          <ImShuffle className = 'shuffle-icon'/>
        </button>
        
        {this.loopButton()}



        
        <div className = 'song-time-bar' >
          <span className = 'current-time'>
            {
              this.audioRef.current ? 
                formatSeconds(this.audioRef.current.currentTime)
                : 
                '--:--' 
            }
          </span>
        
          <div className='control-bar'>
            <div className='scrubber-background' ref = {this.scrubberBackgroundRef}></div>
            {this.scrubber()}
          </div>

          <span className = 'song-length'>
            {this.audioRef.current ? formatSeconds(this.audioRef.current.duration) : '--:--'}
          </span>
        </div>

        {this.volumeComponent()}



      </div>
    )
  }
  
  componentDidMount() {
    this.handleTheClick();
  }
      
  componentDidUpdate(){
    if (this.props.songPlaylist.length > 0 && !this.state.song ){
      this.setState({song: this.props.songPlaylist[0]});
    }


    if (this.state.song && !this.interval) {
      this.setThisInterval();

      //reset volumeComponentInput here. maybe not
      // this.volumeComponentInputRef.current.value  = 1;
    }
  }
  
  componentWillUnmount() {
    if (this.state.song){
      clearInterval(this.interval);
    }
  }


  handleTheClick(e) { //helper function to load 1 playlist song for development
    this.props.fetchPlaylistSong(16);  //4, 7. 15,16
  }

      
}

const formatSeconds = (seconds)=>{
    return new Date(1000 * Math.round(seconds))
      .toISOString()
      .slice(14, 19);
  }

export default SongBar;