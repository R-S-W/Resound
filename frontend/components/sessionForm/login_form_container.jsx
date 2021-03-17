import { connect } from "react-redux"
import { login } from "../../actions/session_actions";
import SessionForm from './session_form';


const mapStateToProps = (state, ownProps)=>{
  return {
    errors: state.errors.session,
    formType: 'login'
  }
}

const mapDispatchToProps = (disp)=>{
  return {
    processForm: (user)=>{
      return disp(login(user))
    }
  }
}
export default  connect(mapStateToProps, mapDispatchToProps)(SessionForm);