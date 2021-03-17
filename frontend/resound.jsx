import React from 'react';
import ReactDOM from 'react-dom';
import configureStore  from './store/store';
import Root from  './components/root'

import * as SessionAPIUtil from './util/session_api_util'
import * as sessionActions from './actions/session_actions'

document.addEventListener('DOMContentLoaded', ()=>{
  const root = document.getElementById('root');
  let store;
  


  // ReactDOM.render( <h1>HELLO WORLD, this is Resound.jsx!</h1>, root);
  window.Alogin  = sessionActions.login;
  window.Asignup = sessionActions.signup;
  window.Alogout = sessionActions.logout;
  window.Ulogin = SessionAPIUtil.login;

  

  if (window.currentUser){
    const preloadedState = {
      entities:{
        users:{[window.currentUser.id]: window.currentUser},
      },
      session: {id: window.currentUser.id}
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  }else{
    store = configureStore();
  }



  window.getState = store.getState;
  window.dispatch = store.dispatch;

  


  ReactDOM.render( <Root store= {store}/> ,root);


})