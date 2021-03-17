import React from 'react';
import {Link} from 'react-router-dom'

const Greeting  = (props)=>{
  let greetingMessage = 'Welcome ' 

  if (props.currentUser) {
    greetingMessage += props.currentUser.username;
    debugger

    return (
      <div>
        <h3>{greetingMessage} AAA </h3>
        <button onClick = {()=>{props.logout}}>Logout</button>
      </div>
    );
  }else{
    return (
      <div>
        <div>{greetingMessage}</div>
        <Link to='/signup'>Create Account</Link>
        <Link to='/login'>Sign In</Link>
      </div>
    )
  }

}

export default Greeting;