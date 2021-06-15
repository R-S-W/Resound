import React from 'react';
import {Link} from 'react-router-dom'

const Verification  = (props)=>{
  let greetingMessage = 'Welcome ' 

  

  if (props.currentUser) {
    greetingMessage += props.currentUser.username;

    return (
      <div className= 'verification-buttons'>
        {/* <h3>{greetingMessage}</h3> */}
        {/* <button 
          className='logout-button press-button'
          onClick = {props.logout}>
            Logout
        </button> */}
      </div>
    );
  }else{
    return (
      <div className='verification-buttons'>
        <button 
          className='login-button press-button '
          onClick = {props.handleModal('login')}
        >
          {/* <Link to='/login'>Sign In</Link> */}
          Sign In
        </button>
        <button 
          className='sign-up-button press-button'
          onClick = {props.handleModal('signup')}
        >
          {/* <Link to='/signup' >Create Account</Link> */}
          Create Account
        </button>

        <button 
          className='demo-login-button press-button' 
          onClick={props.demoLogin}>
          <span>Demo Login</span> 
        </button>
      </div>
    )
  }

}

export default Verification;