
import React from 'react'
import { Link } from 'react-router-dom'
import { determineUsernameOrEmail } from '../../util/misc_utils'

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    // this.defaultState = { username: 'Your Username', password: 'Your Password', email: 'Your Email' };
    this.defaultState = {
      username: '',
      password: '',
      email: '',
      className: props.className,
      isFormSent: false

    }
    this.state = this.defaultState;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.oppositeFormType = (props.formType === "signup") ? 'login' : 'signup';

    this.firstErrorArray = this.props.errors;
  }


  //will accept types of username, email, and usernameOrEmail
  handleChange(type) {
    return (e) => {
      let value = e.target.value;
      this.setState({
        [type]: value
      });
    }
  }



  handleSubmit(e) {
    e.preventDefault();

    let newObj;  //used as argument in props.processform    

    if (this.props.formType === "login") {
      //Determine whether a username or email was passed in.
      //If an email was passed in,
      if (determineUsernameOrEmail(this.state.usernameOrEmail) === 'email') {
        newObj = {
          email: this.state.usernameOrEmail,
        };
      } else { //A username was passed in.
        newObj = {
          username: this.state.usernameOrEmail,
        };
      }
      newObj.password = this.state.password;

      // delete this.state.usernameOrEmail;


    } else {// If this is a signup form,
      // this.props.processForm(Object.assign({}, this.state));   //##
      newObj = {
        username:this.state.username,
        email: this.state.email,
        password:this.state.password
      }
    }
    // this.setState(this.defaultState);

    this.oldErrors = this.props.errors;
    this.props.processForm(newObj);



    this.setState({ isFormSent: false })
    // this.state.isFormSent = true;////


    //the setstates should change the state first so when processFormcomes around everything is correct for the ajax call.


  }



  //Component rendering functions_________


  usernameDiv() {
    let prefillText;
    let inputType;
    if (this.props.formType === "signup") {
      //if signup, create new attribute for state called username-or-email
      prefillText = " Your Username"
      inputType = 'username'
    } else {
      prefillText = " Your Username or Email";
      inputType = 'usernameOrEmail'
    }

    return (
      <div className='username'>
        { this.state.isFormSent ?
          <label className = 'error-message'>{this.props.errors[0]}</label>
          :
          null
        }
        <input
          type="text"
          onChange={this.handleChange(inputType)}
          value={this.state.inputType}
          placeholder={prefillText}
        />
      </div>
    )
  }


  emailDiv() {
    if (this.props.formType === 'signup') {
      return (
        <input
          className='email'
          type="text"
          onChange={this.handleChange('email')}
          value={this.state.email}
          placeholder=" Your Email"
        />
      )
    }
  }


  passwordDiv() {
    return (
      <input
        className='password'
        type="password"
        onChange={this.handleChange('password')}
        placeholder=" Your Password"
        value={this.state.password}
      />
    )
  }

  // errorList(){
  //   return <ul>
  //     {
  //       this.props.errors.map((err)=>{
  //         return <li>{err}</li>
  //       })
  //     }
  //   </ul>
  // }


  render() {
    
    return (

      <div className={`session-form-component ${this.props.className}`}>

        <div className='background-screen'>

          <button
            className='background-screen-button'
            onClick={this.props.handleSwitch}
          ></button>

          <img className="x-button-picture" src={window.xButtonURL} />

          <div className='top-modal-components'>

            <h4 className='form-title'>{this.props.formType.toUpperCase()}

              <form
                className='sesh-form'
                onSubmit={this.handleSubmit}
              // onBlur = {this.props.handleSwitch}
              >
                {this.usernameDiv()}

                {this.emailDiv()}

                {this.passwordDiv()}

                <button
                  className='press-button'
                  id='submit-button'
                >Continue
                    </button>
              </form>
            </h4>

          </div>



        </div>



        {/* <Link to = {`${this.oppositeFormType}`}></Link> */}

        {/* {this.errorList()} */}
      </div>
    )
  }



  componentDidUpdate() {

    // if (this.state.isFormSent){
    //   // this.setState({isFormSent:false});
    //   debugger
    //   if (this.props.errors.length === 0) {
    //   }


    // }
    if (this.firstErrorArray !== this.props.errors) {
      if (this.props.errors.length === 0) {
        this.props.handleSwitch();
      }
    }

    if (!this.state.isFormSent && this.oldErrors && this.oldErrors !== this.props.errors) {
      this.setState({ isFormSent: true })
      //#-#  do I do more with old errors?
    }

  }




}

const isStringArraysEqual = (a1, a2) => {
  if (a1.length !== a2.length) return false;
  for (let i = 0; i < a1.length; i++) {
    if (a1[i] !== a2[i]) return false;
  }
  return true;
}



export default SessionForm;