
import {RECEIVE_CURRENT_USER,LOGOUT_CURRENT_USER} from '../actions/session_actions';


const defaultState= {session:{id: null} };
const sessionReducer = (state=defaultState, action)=>{
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_CURRENT_USER:
      return  Object.assign({}, state,{session:{id:action.currentUser.id}});
    case LOGOUT_CURRENT_USER:
      return Object.assign({}, state, { session: { id:null } });
    default:
      return state;
  }
}
export default sessionReducer;