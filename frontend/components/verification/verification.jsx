import React from 'react';
import {Link} from 'react-router-dom'

const Verification  = (props)=>{
  let greetingMessage = 'Welcome ' 

  

  if (props.currentUser) {
    greetingMessage += props.currentUser.username;

    return (
      <div>
        <h3>{greetingMessage}</h3>
        <button onClick = {props.logout}>Logout</button>
      </div>
    );
  }else{
    return (
      <div>
        {/* <div>{greetingMessage}</div> */}
        <h2>Resound</h2>
        <button>
          <Link to='/signup'>Create Account</Link>     
        </button>
        <button>
          <Link to='/login'>Sign In</Link>
        </button>

        <button onClick={props.demoLogin}>Demo Login</button>
      </div>
    )
  }

}

export default Verification;