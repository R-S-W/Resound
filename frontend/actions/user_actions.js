import * as UserAPIUtil from "../util/user_api_utils"
export const RECEIVE_USER = "RECEIVE_USER";

export const receiveUser = (user) =>{
  return {
    type: RECEIVE_USER,
    user
  }
}

export const fetchUser = (id)=> (disp)=>{
  return UserAPIUtil.fetchUser(id)
    .then((user)=>{disp(receiveUser(user));})
}