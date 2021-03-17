import {connect} from 'react-redux';
import Greeting from './greeting';
import {logout} from '../../actions/session_actions';



const mapStateToProps = (state)=>{
  return {
    currentUser: state.entities.users[state.session.id]

  }
}
const mapDispatchToProps = (disp)=>{
  return {
    logout: ()=>{return disp(logout())}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);