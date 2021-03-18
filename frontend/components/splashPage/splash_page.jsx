
import React from 'react';
import VerificationContainer from '../verification/verification_container';
// import 
class SplashPage extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div id = 'splash-page'>
        <div className = 'rectangle'></div>
        <header>
          <div id = 'logo-title'>
            <img id= 'logo' src = {window.resoundLogoURL}/>
            <h1 id = 'title'>RESOUND</h1>
          </div>
          <VerificationContainer/>

        </header>
        <img id ='stars-pic' src={window.soundcloudStarsURL} />
        
        
      </div>
    )
  }

}

export default SplashPage;