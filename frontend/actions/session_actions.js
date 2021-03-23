
import * as SessionAPIUtil from '../util/session_api_util'

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
const demoUser = {username:"Guest", password:'demodemo', email:"demoUser@demomail.com"};


export const  receiveCurrentUser = (currentUser) => {
  return {
    type : RECEIVE_CURRENT_USER,
    currentUser
  }
}
export const  logoutCurrentUser = () => {
  return {
    type: LOGOUT_CURRENT_USER
  }
}

export const  receiveErrors = (errors) => {
  
  return {
    type: RECEIVE_ERRORS,
    errors
  }
}

export const login = (user) => disp => {
  return SessionAPIUtil.login(user)
    .then((u) => {return disp(receiveCurrentUser(u));})
    .fail((err)=>{return disp(receiveErrors(err.responseJSON))})
}
export const logout = () => disp => {
  return SessionAPIUtil.logout()
    .then(() => {return disp(logoutCurrentUser());})
    .fail((err) => { return disp(receiveErrors(err.responseJSON)) })
}
export const signup = (user) => disp => {
  return SessionAPIUtil.signup(user)
    .then((u) => {return disp(receiveCurrentUser(u));})
    .fail((err) => { debugger; return disp(receiveErrors(err.responseJSON)) })
}

export const demoLogin = () => {
  return login(demoUser);
}