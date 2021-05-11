import { connect } from "react-redux"
import { login } from "../../actions/session_actions";
import SessionForm from './session_form';


const mapStateToProps = (state, ownProps)=>{
  return {
    errors: state.errors.session,
    formType: 'login',
    className: ownProps.className,
    
    handleSwitch: ownProps.handleSwitch
  }
}

const mapDispatchToProps = (disp)=>{
  return {
    processForm: (user)=>{
      disp(login(user))
    },
    
  }
}
export default  connect(mapStateToProps, mapDispatchToProps)(SessionForm);