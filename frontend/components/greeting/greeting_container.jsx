import {connect} from 'react-redux';
import Greeting from './greeting';
import {logout} from '../../actions/session_actions';



const mapStateToProps = (state)=>{  //triggers rerender if props are changed. 
  return {
    currentUser: state.entities.users[state.session.id]

  }
}
const mapDispatchToProps = (disp)=>{
  return {
    logout: ()=>disp(logout())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);