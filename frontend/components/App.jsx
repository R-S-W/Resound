import React from 'react';
import SplashPageContainer from './splashPage/splash_page_container';
import LoginFormContainer from './sessionForm/login_form_container';
import SignupFormContainer from './sessionForm/signup_form_container';
import { AuthRoute,ProtectedRoute} from '../util/route_utils'
import {Route, Switch} from 'react-router-dom'
import TestContainer from './test_container';
const App = ()=>{
  
  return (
    <div>
        {/* <Route  path = '/' component={GreetingContainer}/> */}
        <Switch>
          <Route path='/' exact component={SplashPageContainer} />
          <AuthRoute  path = "/login" exact component={LoginFormContainer}/>
          <AuthRoute path="/signup" exact component={SignupFormContainer} />

          <ProtectedRoute path='/users/:userId' exact component={ TestContainer} />
          <ProtectedRoute path='/songs/:songId' exact component={ TestContainer} />
          <ProtectedRoute path='/songs/new' exact component={TestContainer} />
          <ProtectedRoute path='/songs/edit' exact component={TestContainer} />

        {/* <ProtectedRoute path='' component={ } />    also for albums */}
        </Switch>

          
    </div>
    

  )
}
export default App;