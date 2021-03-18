import {connect} from 'react-redux';
import Verification from './verification';
import { logout } from '../../actions/session_actions'; 
import { demoLogin } from '../../actions/session_actions';




const mapStateToProps = (state)=>{  //triggers rerender if props are changed. 
  return {
    currentUser: state.entities.users[state.session.id]

  }
}
const mapDispatchToProps = (disp)=>{
  return {
    logout: ()=>disp(logout()),
    demoLogin: () => { disp(demoLogin()) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Verification);