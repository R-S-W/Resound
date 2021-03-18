import React from 'react';
import {Link} from 'react-router-dom'

const Verification  = (props)=>{
  let greetingMessage = 'Welcome ' 

  

  if (props.currentUser) {
    greetingMessage += props.currentUser.username;

    return (
      <div id= 'verification-buttons'>
        {/* <h3>{greetingMessage}</h3> */}
        <button 
          id='logout-button'
          class='press-button'
          onClick = {props.logout}>
            Logout
        </button>
      </div>
    );
  }else{
    return (
      <div id='verification-buttons'>
        {/* <div>{greetingMessage}</div> */}
        <button id='login-button' class='press-button'>
          <Link to='/login'>Sign In</Link>
        </button>
        <button id='sign-up-button' class='press-button'>
          <Link to='/signup' >Create Account</Link>
        </button>

        <button 
          id='demo-login-button' 
          class='press-button' 
          onClick={props.demoLogin}>
          <span>Demo Login</span> 
        </button>
      </div>
    )
  }

}

export default Verification;