
import React from 'react';







class SongBar extends React.Component {
  constructor(props){


    super(props);

    this.state = {
      numLoops: 0,
      song: props.songPlaylist[0]
    }
    this.audioRef = React.createRef();

  
    // this.audio = new Audio('Song_3.mp3');
    this.handlePlay = this.handlePlay.bind(this);

    this.handleTheClick= this.handleTheClick.bind(this);
  }

  scrubberComponent(){

    // return (

    // )
  }


  playButton(){
    return (
      <button className='play-button'
      onClick={this.handlePlay}
      >
        <img src="#" />
      </button>
      )
  }

  loopButton(){


    return <div>Loopbutton</div>


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



  handlePlay(e){

    if (this.audioRef.current.paused){
      this.audioRef.current.play();
    }else{
      this.audioRef.current.pause();
    }
  }


  handleTheClick(e){
    this.props.fetchPlaylistSong(3);
    this.setState({ song: this.props.songPlaylist[0]})
  }
                    //////REMEMBER TO DECREMENT NUMLOOPS
  render(){
    debugger
    let aSong = this.props.songPlaylist[0];
    return (
      <div className = 'songBar'>

        <button onClick={this.handleTheClick}>Press</button>

        {
          aSong ? 
            <audio 
              src={aSong.audioURL} 
              controls 
              ref = {this.audioRef} 
            ></audio>
            :
            null
        }
      
        <button className = 'forward-button'>
          <img src="#"/>
        </button>
        
        {this.playButton()}

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
          {/* <span className = 'song-length'>{this.song.length}</span> */}
        </div>

      </div>
    )
  }
}
export default SongBar;