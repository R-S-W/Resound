
import React from 'react'
import {Link} from 'react-router-dom'
import {determineUsernameOrEmail} from '../../util/misc_utils'

class SessionForm extends React.Component{
  constructor(props){
    super(props);
    // this.defaultState = { username: 'Your Username', password: 'Your Password', email: 'Your Email' };
    this.state = {
      username:'',
      password:'',
      email:''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.oppositeFormType = (props.formType==="signup") ?  'login' : 'signup';
    
    
    
    // this.handleFocus = this.handleFocus.bind(this);
    // this.handleBlur = this.handleBlur.bind(this);
    // this.isUnfilledDict = {username: true, password: true, email:true}
  }


  //will accept types of username, email, and usernameOrEmail
  handleChange(type){
    return (e)=>{
      let value = e.target.value;
      this.setState({
        [type]: value
      });
    }
  }

  

  handleSubmit(e){
    e.preventDefault();
    debugger
    let newObj;
    //#-# check order of these async lines 
    if (this.props.formType === "login"){
      if (determineUsernameOrEmail(this.state.usernameOrEmail) === 'email'){
        newObj = {
          email: this.state.usernameOrEmail,
        };
      }else{
        newObj = {
          username: this.state.usernameOrEmail,
          usernameOrEmail:undefined
        };
      }
      newObj.password = this.state.password;
      this.props.processForm(newObj);   //##

    }else{
      this.props.processForm(Object.assign({}, this.state));   //##
    }
    //the setstates should change the state first so when processFormcomes around everything is correct for the ajax call.
    this.props.handleSwitch();///////
  }



  //Component rendering functions_________


  usernameDiv(){
    let prefillText; 
    let inputType;
    if (this.props.formType === "signup"){
      //if signup, create new attribute for state called username-or-email
      prefillText= " Your Username" 
      inputType = 'username'
    }else{
      prefillText=   " Your Username or Password" ;
      inputType = 'usernameOrEmail'
    }
    
    return (
      <input
      className='username'
      type="text"
      onChange={this.handleChange(inputType)}
      placeholder= {prefillText}
      />
    )
  }


  emailDiv(){       
    if (this.props.formType === 'signup'){
      return (
        <input 
          className = 'email'
          type="text"
          onChange={this.handleChange('email')}
          placeholder = " Your Email"
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


  render(){
    return (

      <div className = {`session-form-component ${this.props.className}`}>

        <div className ='background-screen'>

          <button 
            className='background-screen-button'
            onClick = {this.props.handleSwitch}
          ></button>

          <img className="x-button-picture" src={window.xButtonURL} />

          <div className = 'top-modal-components'>

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
                    id = 'submit-button'
                  >Continue
                    </button>
                </form>
            </h4>

          </div>


   
        </div>



        <Link to = {`${this.oppositeFormType}`}></Link>
        
        {/* {this.errorList()} */}
      </div>
    )
  }
}

export default SessionForm;