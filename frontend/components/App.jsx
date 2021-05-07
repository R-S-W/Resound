import React from 'react';
import SplashPageContainer from './splashPage/splash_page_container';
import LoginFormContainer from './sessionForm/login_form_container';
import SignupFormContainer from './sessionForm/signup_form_container';
import { AuthRoute,ProtectedRoute} from '../util/route_utils'
import {Route, Switch} from 'react-router-dom'
import TestContainer from './test_container';
import Test2 from './test2';
import AudioPlayerContainer from './audioPlayer/audio_player_container';
import CreateSongFormContainer from '../components/songForm/create_song_form_container';
import EditSongFormContainer from '../components/songForm/edit_song_form_container';

import SongPageContainer from '../components/songPage/song_page_container';

const App = ()=>{
  
  return (
    <div className = 'app'>
        {/* <Route  path = '/' component={GreetingContainer}/> */}
        <Switch>


          <Route path='/' exact component={SplashPageContainer} />
          <AuthRoute  path = "/login" exact component={LoginFormContainer}/>
          <AuthRoute path="/signup" exact component={SignupFormContainer} />

          <ProtectedRoute path='/users/:userId' exact component={ TestContainer} />
          {/* <ProtectedRoute path='/songs/:songId' exact component={ SongPageContainer} /> */}
          <ProtectedRoute path='/songs/new' exact component={CreateSongFormContainer} />
          <ProtectedRoute path='/songs/edit/:songId' exact component={EditSongFormContainer} />

          {/* <ProtectedRoute path='' component={ } />    also for albums */}
        </Switch>
          
        <AudioPlayerContainer/>
    </div>

    

  )
}
export default App;