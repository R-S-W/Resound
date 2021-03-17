import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import {Route} from 'react-router-dom'
import LoginFormContainer from './sessionForm/login_form_container';
import SignupFormContainer from './sessionForm/signup_form_container';


const App = ()=>{
  return (
    <div>
      <header>
        <h1>Resound App! Woohoo!</h1>
        <GreetingContainer/>
      </header>

      
      <Route  path = "/login" component={LoginFormContainer}/>
      <Route path="/signup" component={SignupFormContainer} />

    </div>
    

  )
}
export default App;