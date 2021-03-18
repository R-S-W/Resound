
import React from 'react'
import {Link} from 'react-router-dom'

class SessionForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      username:'Your Username',
      password:'Your Password',
      email: 'Your Email'
    };
    this.handleChange = this.handleChange.bind(this);
    // this.handleFocus = this.handleFocus.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
    // this.emailDiv = this.emailDiv.bind(this);  //#####
    this.oppositeFormType = (props.formType==="signup") ?  'login' : 'signup';

    // this.isUsernameUnchanged = true; 
    // this.isPasswordUnchanged = true;
    // this.isEmailUnchanged = true;
    //Used for handlefocus and handleChange

    /// this.isUnchangedDict = {username: true, password: true, email:true}
  }

  handleChange(type){
    return (e)=>{
      let value = e.target.value;

      this.setState({
        [type]: value
      });
    }
  }

  // handleFocus(type) {//Takes away the prefilled data from the username
  //   return (e)=>{
  //     if (this.isUnchangedDict[type]){
  //       e.target.value = '';           /////////i will not change the isUnchangedDict element to false here. It is changedin handlechanged
  //       this.isUnchangedDict[type] = false;
  //     }
  //     this.setState({[type]:e.target.value});
  //   }

  // }

  handleSubmit(e){
    e.preventDefault();
    
    this.props.processForm(Object.assign({},this.state));   //##
  }

passwordDiv(){
  if (       false  ){ //       this.isUnchangedDict.password){
    // return (
    //   <input type="text"
    //     id = 'password'
    //     onFocus = {this.handleFocus('password')}
    //     value = "Password"
    //   />
    // )
  }else{
    return (
      <label htmlFor='password'>Password:
      <input
        id='password'
        type="password"
        onChange={this.handleChange('password')}
        // value={this.state.password}
        />
    </label>
    )
  }

}

  emailDiv(){                             
                    //#-#
    if (this.props.formType === 'signup'){
      return (
        <label htmlFor = 'email'>Email:
          <input 
            id = 'email'
            type="text"
            onChange={this.handleChange('email')}
            // value = {this.state.email}
          />
        </label>
      )
    }
  }

  errorList(){
    return <ul>
      {
        this.props.errors.map((err)=>{
          return <li>{err}</li>
        })
      }
    </ul>
  }


  //REDIRECT USER TO / IF LOGGED IN



  render(){
    // if (this.props.match.params.)
    return (
      <div id = "session-form-component">
        <h4 id='form-title'>{this.props.formType.toUpperCase()}</h4>
        <form id ='sesh-form' onSubmit= {this.handleSubmit}>
          <label htmlFor= 'username'>Username:
            <input 
              id = 'username' 
              type="text" 
              // onFocus = {this.handleFocus('username')}
              onChange = {this.handleChange('username')}
              // value = {this.state.username}
            />
          </label>
          {this.emailDiv()}

          {this.passwordDiv()}


          <button className = 'press-button'>Continue</button>
        </form>
        <Link to = {`${this.oppositeFormType}`}></Link>
        
        {this.errorList()}
      </div>
    )
  }
}

export default SessionForm;