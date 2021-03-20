
import React from 'react';



class SongBar extends React.Component {
  constructor(props){


    super(props);
    this.song= props.songPlaylist[0];
    this.state = {
      numLoops: 0
    }
    // this.audioRef = React.createRef();

  
    this.audio = new Audio('Song_3.mp3');
  }

  scrubberComponent(){

    // return (


    // )

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
        <img src={imgLink} />
      </button>
    )
  }

                    //////REMEMBER TO DECREMENT NUMLOOPS
  render(){
    // return (
    //   <div></div>
    // )
    return (
      <div className = 'songBar'>

        {/* <audio
          // src={require('../../../app/assets/audios/Song_3.mp3')}
          src = '/assets/audios/Song_3.mp3'
          ref = {this.audioRef} 
        /> */}

        <button className = 'forward-button'>
          <img src="#"/>
        </button>
        <button className = 'pause-button'
          onClick={(e) => { this.audio.paused = !this.audio.paused }}
        >
          <img src="#"/>
        </button>
        <button className = 'reverse-button'>
          <img src="#"/>
        </button>

        <button className='shuffle-button'>
          <img src="#" />
        </button>
        
        {this.loopButton()}

        
        <div className = 'song-time-bar'>
          {/* <span className = 'current-time'>{ this.audioRef.current.currentTime }</span> */}
          {this.scrubberComponent()}
          <span className = 'song-length'>{this.song.length}</span>
        </div>

      </div>
    )
  }
}
export default SongBar;