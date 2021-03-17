import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from './sessionForm/login_form_container';
import SignupFormContainer from './sessionForm/signup_form_container';
import {AuthRoute} from '../util/route_util'

const App = ()=>{
  return (
    <div>
      <header>
        <h1>Resound App! Woohoo!</h1>
        <GreetingContainer/>
        <AuthRoute  path = "/login" exact component={LoginFormContainer}/>
        <AuthRoute path="/signup" exact component={SignupFormContainer} />
          
      </header>



    </div>
    

  )
}
export default App;