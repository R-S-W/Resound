
import React from 'react';

import { FaPlay, FaPause} from 'react-icons/fa';
import { IoPlaySkipBackSharp, IoPlaySkipForwardSharp} from 'react-icons/io5';
import { ImShuffle, ImLoop} from 'react-icons/im';
import { RiVolumeDownFill, RiVolumeUpFill, RiVolumeMuteFill} from 'react-icons/ri';
import { MdRepeatOne} from 'react-icons/md';


class SongBar extends React.Component {
  constructor(props){
    super(props);

    let aSong;
    if (props.playlistIndex){
      aSong = props.playlist[props.playlistIndex];
    }


    this.state = {
      numLoops: 0, //=0,1,or 2
      // songPlaylist:props.songPlaylist,
      // playlistIndex: props.playlistIndex,
      song: aSong,
      isPaused:true,
      currentTime: 0,
      volume: 1,
      isVolumeVisible: false,

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
    this.handleAudioEnded = this.handleAudioEnded.bind(this);

    this.interval;  //handles the interval that rerenders component every second
    // this.setThisInterval = this.setThisInterval.bind(this);


    this.test= this.test.bind(this);
  }


  playButton(){
    return (
      <button className='play-button'
      onClick={ (e)=>{
        // debugger
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
      styleString = `linear-gradient(90deg, #ff0000  ${100 * progPercent}%, #000000 ${100 * progPercent}%)`
    }else{
      styleString  = '##000000'
    }

    return (
      <input className = 'scrubber-input-range'
        type="range"
        max='1'
        step = '.01'
        // defaultValue = '0'
        value = {this.audioRef.current ? this.audioRef.current.currentTime/this.audioRef.current.duration : 0} //ugly
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
          //   debugger
          //   audio.src = newSong.audioURL;
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
          // debugger
          console.log('two')
          this.audioRef.current.play();
          this.audioRef.current.currentTime = 0;
        }
  }


  nextPlaylistSong(){
    // debugger
    if (!this.props.playlistIndex){
      this.setState({ 
        song: this.props.songPlaylist[0] 
      });
    }else if (this.props.playlist.length > this.props.playlistIndex){
      // this.audioRef.current.currentTime = 0;
      this.setState({song: this.props.playlist[this.props.playlistIndex]}); //
      // this.audioRef.current.play();
    }else{
      this.state.song = null; //#-#
    }
    this.props.nextSong();
  }


  audioTag(){


    
  
    return (this.state.song ?
      <audio
        src={this.state.song.audioURL}
        className='audio'
        key={this.state.song.id}
        // controls 
        ref={this.audioRef}
        onEnded={this.handleAudioEnded}
        preload = 'auto'
      >
        {/* <source src = {this.state.song.audioURL} /> */}

      </audio>
      :
      <audio className='audio' />
    )
  

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
            
            <div className='scrubber-background' ref = {this.scrubberBackgroundRef}></div>
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
    this.handleTheClick();
  }
      
  componentDidUpdate(){
    // this.prevPlaylistIndex;
    

    if (!this.state.song && this.props.songPlaylist.length > 0){
      if (!this.props.playlistIndex)   this.nextPlaylistSong();
      else{
        this.setState({
          song:this.props.songPlaylist[this.props.playlistIndex],
          isPaused: false
        });
      }
      //else is already handled in constructor.
      // this.setState({song: this.props.songPlaylist[0]});
    }
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

  test(e){
    // debugger
  }

  handleTheClick(e) { //helper function to load 1 playlist song for development
    // setTimeout(() => { console.log("World!"); }, 2000);
    setTimeout(() => { this.props.fetchPlaylistSong(1); }, 500);
    // setTimeout(() => { this.props.fetchPlaylistSong(4); }, 1000);
    // setTimeout(() => { this.props.fetchPlaylistSong(7); }, 1500);
      //4, 7. 15,16
    // this.props.fetchPlaylistSong(4);
    // this.props.fetchPlaylistSong(7);
  }

      
}

  const formatSeconds = (seconds)=>{
  // debugger
    console.log(seconds, (typeof seconds));
    // if (seconds === NaN  || !(seconds instanceof Number)) return '--:--';
    if (Number.isNaN(seconds)) return '--:--';
    return new Date(1000 * Math.round(seconds))
      .toISOString()
      .slice(14, 19);
  }

export default SongBar;