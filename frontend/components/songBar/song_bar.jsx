
import React from 'react';

import { FaPlay, FaPause} from 'react-icons/fa';
import { IoPlaySkipBackSharp, IoPlaySkipForwardSharp} from 'react-icons/io5';
import { ImShuffle, ImLoop} from 'react-icons/im';
import { TiArrowLoop} from 'react-icons/ti';
import { BsDiamondFill} from 'react-icons/bs';
import { RiVolumeUpFill} from 'react-icons/ri';



class SongBar extends React.Component {
  constructor(props){


    super(props);

    this.state = {
      numLoops: 0,
      song: props.songPlaylist[0],
      isPaused:true,
      currentTime: 0


    }
    this.audioRef = React.createRef();
    this.scrubberBackgroundRef = React.createRef();
    this.scrubberRef = React.createRef();
    this.volumeSliderInputRef = React.createRef();


  
    // this.audio = new Audio('Song_3.mp3');
    this.handlePlay = this.handlePlay.bind(this);
    this.handleTheClick= this.handleTheClick.bind(this);
    this.handleTimeChange = this.handleTimeChange.bind(this);
    this.handleVolumeChange = this.handleVolumeChange.bind(this);

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

        {!this.audioRef.current || this.audioRef.current.paused ? <FaPlay/>  : <FaPause/>}
         
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
        <ImLoop className = 'scrubber-slider-button'/>
      </button>
    )
  }


  scrubber() {

    return (
      <button className='scrubber'
        ref={this.scrubberRef}
        onClick={this.handleTimeChange}
      >
        <div className='progress-bar'
          style={{ color: 'blue' }, { height: '100%' }, { width: '0' }}
        >
          <BsDiamondFill className = 'progress-bar-slider-button hide'/>

        </div>

      </button>
    )
  }

  volumeSlider(){
    return (
      <button className = 'volume-slider'  >
        
        {this.state.song ?
          <input className = 'volume-slider-input' 
            type="range"
            max='1' 
            step = '.01'
            // value=".5"
            ref= {this.volumeSliderInputRef}
            onChange = {this.handleVolumeChange}
          />
          :
          null
        }
        <RiVolumeUpFill className='volume-icon' />

        


      </button>
    )
  }



  //METHODS____________________

  handleTimeChange(e) { //Change the currentTime of the song with the controlbar.
    let backgroundCoords = this.scrubberBackgroundRef.current.getBoundingClientRect();
    let x = e.clientX - backgroundCoords.left;
    let backgroundX = (backgroundCoords.right - backgroundCoords.left);
    let songTimePercent = x / backgroundX;
    //Update progress Bar
    this.scrubberRef.current.children[0].style = `width:${x}px`//{{ color: 'blue' }, { height: '100%' }, { width:x } };
    //Update audio tag to correct time.
    let audio = this.audioRef.current;
    audio.currentTime = Math.round(songTimePercent * audio.duration);
    this.setState({ currentTime: audio.currentTime })
    this.setThisInterval();
  }


  incrementProgressBar() {
    let backgroundCoords = this.scrubberBackgroundRef.current.getBoundingClientRect();
    let backgroundX = (backgroundCoords.right - backgroundCoords.left);
    let songTimePercent = this.state.currentTime / this.audioRef.current.duration;  //we assume this.state.currentTime is already updated.
    let x = backgroundX * songTimePercent;
    this.scrubberRef.current.children[0].style = `width:${x}px`
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
  }



  //LIFECYCLE METHODS___________________

                    //////REMEMBER TO DECREMENT NUMLOOPS
  render(){
    // debugger
    // let aSong = this.props.songPlaylist[0];
    return (
      <div className = 'song-bar'>

        <button onClick={this.handleTheClick}>Load Test Song</button>

        {
          this.state.song ? 
            <audio 
              src={this.state.song.audioURL} 
              // controls 
              ref = {this.audioRef} 
            ></audio>
            :
            null
        }
        

        <button className = 'reverse-button'>
          <IoPlaySkipBackSharp/>
        </button>
      
        {this.playButton()}

        <button className = 'forward-button'>
          <IoPlaySkipForwardSharp/>
        </button>

        <button className='shuffle-button' 
          onClick = {this.findPos}
        >
          <ImShuffle/>
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

        {this.volumeSlider()}

      </div>
    )
  }
  
  // componentDidMount() {}
      
  componentDidUpdate(){
    if (!this.state.song){
      this.setState({song: this.props.songPlaylist[0]});
    }


    if (this.state.song && !this.interval) {
      this.setThisInterval();

      //reset volumeSliderInput here. maybe not
      // this.volumeSliderInputRef.current.value  = 1;
    }
  }
  
  componentWillUnmount() {
    if (this.state.song){
      clearInterval(this.interval);
    }
  }


  handleTheClick(e) { //helper function to load 1 playlist song for development
    this.props.fetchPlaylistSong(7);
  }

      
}

const formatSeconds = (seconds)=>{
    return new Date(1000 * Math.round(seconds))
      .toISOString()
      .slice(14, 19);
  }

export default SongBar;