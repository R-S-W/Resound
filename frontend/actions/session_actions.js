
import * as SessionAPIUtil from '../util/session_api_util'

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';



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
  debugger
  return SessionAPIUtil.login(user).then((u) => {
    return disp(receiveCurrentUser(u));
  });
}
export const logout = () => disp => {
  return SessionAPIUtil.logout().then(() => {
    return disp(logoutCurrentUser());
  });
}
export const signup = (user) => disp => {
  return SessionAPIUtil.signup(user).then((u) => {
    return disp(receiveCurrentUser(u));
  });
}