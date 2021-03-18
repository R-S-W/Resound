import React from 'react';
import SplashPageContainer from './splashPage/splash_page_container';
// import GreetingContainer from './verification/verification_container';
import LoginFormContainer from './sessionForm/login_form_container';
import SignupFormContainer from './sessionForm/signup_form_container';
import { AuthRoute,ProtectedRoute} from '../util/route_utils'
import {Route, Switch} from 'react-router-dom'
import TestContainer from './test_container';
const App = ()=>{
  
  return (
    <div>
      <header>
        <h1>Resound App! Woohoo!</h1>
        {/* <Route  path = '/' component={GreetingContainer}/> */}
        <Route path='/' component={SplashPageContainer} />
        <Switch>
          <AuthRoute  path = "/login" exact component={LoginFormContainer}/>
          <AuthRoute path="/signup" exact component={SignupFormContainer} />

          <ProtectedRoute path='/users/:userId' component={ TestContainer} />
          <ProtectedRoute path='/songs/:songId' component={ TestContainer} />
          <ProtectedRoute path='/songs/new' component={TestContainer} />
          <ProtectedRoute path='/songs/edit' component={TestContainer} />

        {/* <ProtectedRoute path='' component={ } />    also for albums */}
        </Switch>

          
      </header>
    </div>
    

  )
}
export default App;