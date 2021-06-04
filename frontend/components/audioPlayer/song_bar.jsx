
import React from 'react';

import { FaPlay, FaPause} from 'react-icons/fa';
import { IoPlaySkipBackSharp, IoPlaySkipForwardSharp} from 'react-icons/io5';
import { ImShuffle, ImLoop} from 'react-icons/im';
import { RiVolumeDownFill, RiVolumeUpFill, RiVolumeMuteFill} from 'react-icons/ri';
import { MdRepeatOne} from 'react-icons/md';
// import "animate.css";


// import {sliderProgressBarBackgroundColor} from '../../../app/assets/stylesheets/_variables.scss';


class SongBar extends React.Component {
  constructor(props){
    super(props);

    let aSong = this.props.songPlaylist[0];

    this.state = {
      numLoops: 0, //=0,1,or 2
      // songPlaylist:props.songPlaylist,
      // playlistIndex: props.playlistIndex,
      song: aSong,
      isPaused:true,
      currentTime: 0,
      volume: 1,
      isVolumeVisible: false,
      c: 0

    }
    this.audioRef = React.createRef();
    this.scrubberBackgroundRef = React.createRef();
    this.scrubberInputRangeRef = React.createRef();
    this.volumeComponentInputRef = React.createRef();


  
    // this.audio = new Audio('Song_3.mp3');
    this.handlePlay = this.handlePlay.bind(this);
    this.loadAtLeastOneSong= this.loadAtLeastOneSong.bind(this);
    this.handleTimeChange = this.handleTimeChange.bind(this);
    this.handleVolumeChange = this.handleVolumeChange.bind(this);
    this.handleVolumeModal = this.handleVolumeModal.bind(this);
    this.handleMute = this.handleMute.bind(this);
    this.handleAudioEnded = this.handleAudioEnded.bind(this);
    this.handlePlayPause = this.handlePlayPause.bind(this);

    this.interval;  //handles the interval that rerenders component every second

    this.test= this.test.bind(this);
  }



  audioTag() {
    return (this.state.song ?
      <audio
        src={this.state.song.audio}
        className='audio'
        key = {this.props.songPlaylist[0].id}
        ref={this.audioRef}
        onEnded={this.handleAudioEnded}
        preload='auto'
      />   
      :
      <audio className='audio' />
    )
  }



  playButton(){
    return (
      <button className='play-button'
      onClick={ this.handlePlayPause }
      >
        {!this.audioRef.current || this.audioRef.current.paused ? 
          <FaPlay className = 'play-icon'/>  
          : 
          <FaPause className = 'play-icon'/>}         
      </button>
    )
  }


  loopButton(){
    const  loopIcon  = ()=>{

      switch(this.state.numLoops){
        case 0:
          return  <ImLoop className = "loop-icon"/>;
        case 1:
          console.log('1')
          return  <MdRepeatOne className = 'loop-icon loop-icon-1'/>
        case 2:
          return  <ImLoop className = 'loop-icon active-loop-icon'/>
      }
    }

    return (
      <button className='loop-button'
        onClick={(e)=>{          
          this.setState({
            numLoops: (this.state.numLoops + 1) % 3
          });
        }}
      >
        {loopIcon()}
      </button>
    )
  }


  scrubber() {
    let styleString;
    if (this.audioRef.current){
      let progPercent = this.audioRef.current.currentTime/this.audioRef.current.duration;
      styleString = `linear-gradient(90deg, #ff5000  ${100 * progPercent}%, #cccccc ${100 * progPercent}%)` // '#cccccc'
    }else{
      styleString  = '#cccccc'
    }

    return (
      <input className = 'scrubber-input-range'
        type="range"
        max='1'
        step = '.01'
        // defaultValue = '0'
        value = {
          this.state.song === this.props.songPlaylist[0] &&  
          this.audioRef.current ? 
          this.audioRef.current.currentTime/this.audioRef.current.duration : 
          0
        } 
        ref = {this.scrubberInputRangeRef}
        onChange = {this.handleTimeChange}
        style={{ background: styleString}}
      />
    )
  }

  volumeComponent(){
    const volumeIcon = ()=>{  
      if (this.state.song){ // Handle volume button icons
        if (this.state.volume >= .5){
          return (<RiVolumeUpFill className = 'volume-icon'/>);
        }else if (this.state.volume === 0){
          return (<RiVolumeMuteFill className='volume-icon'/>);
        }
        return (<RiVolumeDownFill className='volume-icon'/>);
      }
    }
    return (
      <div className = 'volume-component'
        onMouseEnter = {this.handleVolumeModal}
        onMouseLeave = {this.handleVolumeModal}
      >
        <button className = 'volume-button'  
          onClick = {this.handleMute}
        >
          {volumeIcon()}
        </button>
        {
          (this.state.isVolumeVisible && this.state.song) ? 
          <div className = "volume-background animate__animated animate__slideInUp">
            <div className = 'volume-background-rectangle'>

              
              <div className = 'volume-slider-colorbar'
                style={{ background: `linear-gradient(90deg, #ff5000  ${100*this.state.volume}%, #000000 ${100*this.state.volume}%)`}}
              ></div>

              <input className = 'volume-slider-input slider' 
                type="range"
                max='1' 
                step = '.01'
                value = {this.state.volume}
                ref= {this.volumeComponentInputRef}
                onChange = {this.handleVolumeChange}

              />
            </div>
            <div className = 'volume-background-border-triangle'></div>
            <div className = 'volume-background-triangle'></div>
          </div>
          :
          null
        }
        
        <button className = 'volume-button'  
          onClick = {this.handleMute}
        >
          {volumeIcon()}
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

  handlePlayPause(e){ 
    if (this.state.isPaused) {
      this.audioRef.current.play();
      this.setState({isPaused: false});
      this.setThisInterval();
    } else {
      this.audioRef.current.pause();
      clearInterval(this.interval);
      this.setState({isPaused: true})
    }
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


  handleAudioEnded(e){
      switch (this.state.numLoops) {
        case 0:
          // this.nextPlaylistSong();
          // if (this.props.playlist.length > this.props.playlistIndex) {
          //   // this.audioRef.current.currentTime = 0;
          //   let newSong = this.props.playlist[this.props.playlistIndex + 1];
          //   // this.setState({ song: newSong }); //
          //   
          //   audio.src = newSong.audio;
          //   audio.pause();
          //   audio.load();
          //   audio.play();
          //   // this.audioRef.current.play();
          // }
          
          this.setState({isPaused:true});
          this.audioRef.current.currentTime = 0;

          
        // this.state.playlist.shift();
        // this.setState({
        //   playlist: this.state.playlist,
        //   song: this.state.playlist[0]
        // })
          console.log('zero');
          break;
        case 1:
          this.setState({ numLoops: this.state.numLoops - 1 });
          this.audioRef.current.play();
          this.audioRef.current.currentTime = 0;
          console.log('one');
          break;
        case 2:
          console.log('two')
          this.audioRef.current.play();
          this.audioRef.current.currentTime = 0;
        }
  }


  nextPlaylistSong(){
    if (!this.props.playlistIndex){
      this.setState({ 
        song: this.props.songPlaylist[0] 
      });
    }else if (this.props.songPlaylist.length > this.props.playlistIndex){
      // this.audioRef.current.currentTime = 0;
      this.setState({song: this.props.songPlaylist[this.props.playlistIndex]}); //
      // this.audioRef.current.play();
    }else{
      this.state.song = null; //#-#
    }
    this.props.nextSong();
  }




  //LIFECYCLE METHODS___________________

                    //////REMEMBER TO DECREMENT NUMLOOPS
  render(){
    // let aSong = this.props.songPlaylist[0];

    return (
      <div className = 'song-bar'>
        {/* <button onClick={this.handleTheClick}>Load Test Song</button> */}

        {this.audioTag()}
        

        <button className = 'reverse-button'>
          <IoPlaySkipBackSharp className ='reverse-icon'/>
        </button>
      
        {this.playButton()}

        <button className = 'forward-button'>
          <IoPlaySkipForwardSharp className = 'forward-icon'/>
        </button>

        <button className='shuffle-button' 
          onClick = {this.test}
        >
          <ImShuffle className = 'shuffle-icon'/>
        </button>
        
        {this.loopButton()}



        
        <div className = 'song-time-bar' >

          {this.state.song && this.audioRef.current ?
            <span className = 'current-time'>
              {formatSeconds(this.audioRef.current.currentTime)}
            </span>
            :
            <span className = 'current-time'>--:--</span>
          }

        
          <div className='control-bar'>
            
            {/* <div className='scrubber-background' ref = {this.scrubberBackgroundRef}></div> */}
            {this.scrubber()}

          </div>

          {this.state.song && this.audioRef.current ?
            <span className = 'song-length'>
              {this.state.song && this.audioRef.current ? formatSeconds(this.audioRef.current.duration) : '--:--'}
            </span>
            :
            <span className='song-length'>--:--</span>
          }
        </div>

        {this.volumeComponent()}



      </div>
    )
  }
  
  componentDidMount() {
    this.loadAtLeastOneSong();    
  }
      
  componentDidUpdate(){
    if (!this.audioRef.current && !this.interval){
      this.interval = setInterval(()=>{
        if ( this.state.song !== this.props.songPlaylist[0]    ){
          this.setState({song: this.props.songPlaylist[0]});
        }else{
          clearInterval(this.interval)
        }
      },1000)
    }
    if (this.audioRef.current && this.state.song !== this.props.songPlaylist[0]){
      let audio = this.audioRef.current;

      this.setState({
        song : this.props.songPlaylist[0],
      });
      if (!this.state.isPaused){
        this.handlePlay();
      }else{

        this.setThisInterval();
      }
      audio.src = this.props.songPlaylist[0].audio;
      audio.load();
      audio.volume = this.state.volume;
      
      setTimeout(()=>{
        this.handlePlay();
        this.setState({currentTime: audio.currentTime})
      }, Math.round(300*audio.currentTime/30));


      //   let audio = this.audioRef.current;
      //   audio.pause();
      //   audio.currentTime = 0;
      //   audio.load();
      //   // audio.play();
      //   if (this.gate ===0){
      //     this.gate++;
      //     this.setState({
      //       currentTime: 0,
      //       isPaused:true
      //     });
      //   }
      // },1000);
      
    }
    
    // if (!this.prevSong && this.state.song){
    //   this.prevSong = this.state.song;
    // }else if (this.prevSong!==this.state.song){
    //   let audio = this.audioRef.current;
    //   debugger;

    //   this.setState({song: this.props.songPlaylist[0]})
    //   // audio.pause();
    //   // audio.currentTime=0;
    //   // audio.play();

    //   this.prevSong = this.state.song;
    // }




    // if (this.props.playlistIndex){
    //   debugger
    //   if ( !this.prevPlaylistIndex){
    //     this.prevPlaylistIndex = this.props.playlistIndex;
    //   }else if (this.props.playlistIndex !== this.prevPlaylistIndex){

    //     this.prevPlaylistIndex = this.props.playlistIndex;
    //     this.audioRef.load();
    //   }

    // }



    // if (this.state.song && this.audioRef.current && this.props.playListIndex){
    //   // this.audioRef.current.load();
    //   debugger
    //   this.audioRef.current.autoplay = true;
    //   if (this.audioRef.currrent.paused)   this.audioRef.current.play();
    // }


    // if (this.state.song && !this.interval) { ///
    //   this.setThisInterval();
      
    // }
  }
  
  

  componentWillUnmount() {
    if (this.state.song){
      clearInterval(this.interval);
    }
  }

  test(e){
    this.state;

    // debugger
  }

  loadAtLeastOneSong(e) {

    setTimeout(() => { 
      // if (Object.keys(this.props.songs).length > 2){////////////////////////////////////////
        // this.props.fetchPlaylistSong(1);
        // this.props.fetchPlaylistSong(Object.values(this.props.songs)[0].id); 
      this.props.fetchPlaylistSong(1);
      
    }, 1000);
    
    // setTimeout(() => { this.props.fetchPlaylistSong(4); }, 1000);
    // setTimeout(() => { this.props.fetchPlaylistSong(7); }, 1500);
      //4, 7. 15,16
    // this.props.fetchPlaylistSong(4);
    // this.props.fetchPlaylistSong(7);
  }

      
}

  const formatSeconds = (seconds)=>{
    // console.log(seconds, (typeof seconds));
    // if (seconds === NaN  || !(seconds instanceof Number)) return '--:--';
    if (Number.isNaN(seconds)) return '--:--';
    return new Date(1000 * Math.round(seconds))
      .toISOString()
      .slice(14, 19);
  }

export default SongBar;