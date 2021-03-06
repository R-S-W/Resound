import { connect } from "react-redux"
import { signup } from "../../actions/session_actions";
import SessionForm from './session_form';


const mapStateToProps = (state, ownProps) => {
  return {
    errors: state.errors.session,
    formType: 'signup',
    className: ownProps.className,

    handleSwitch: ownProps.handleSwitch
  }
}

const mapDispatchToProps = (disp) => {
  return {
    processForm : (user)=>{
      disp(signup(user));
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);