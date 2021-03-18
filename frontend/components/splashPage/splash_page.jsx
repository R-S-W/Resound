
import React from 'react';
import VerificationContainer from '../verification/verification_container';
// import 
class SplashPage extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div>
        <h2>Splash Page</h2>
        <VerificationContainer/>
        {/* <button onClick = {this.props.demoLogin}>Demo Login</button> */}
      </div>
    )
  }

}

export default SplashPage;