
import React from 'react'
import {Link} from 'react-router-dom'

class SessionForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      username:'Your Username',
      password:'Your Password',
      email: 'Your Email',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.oppositeFormType = (props.formType==="signup") ?  'login' : 'signup';
    
    

    // prefilled values.
    //Used for handlefocus and handleChange
    
    // this.handleFocus = this.handleFocus.bind(this);
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

    //#-# check order of these async lines 
    this.props.handleSwitch();///////
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
          className='password'
          type="password"
          onChange={this.handleChange('password')}
          // value={this.state.password}
          />
      </label>
      )
    }
  }

  emailDiv(){       
    if (this.props.formType === 'signup'){
      return (
        <label htmlFor = 'email'>Email:
          <input 
            className = 'email'
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
    // debugger
    return (
      

      <div className = {`session-form-component ${this.props.className}`}>

        <img className = "x-button-picture" src={window.xButtonURL}/>

        <h4 className='form-title'>{this.props.formType.toUpperCase()}</h4>
        <form 
          className ='sesh-form' 
          onSubmit= {this.handleSubmit}
          onBlur = {this.props.handleSwitch}
        >
          <label htmlFor= 'username'>Username:
            <input 
              className = 'username'
              type="text"
              // onFocus = {this.handleFocus('username')}
              onChange = {this.handleChange('username')}
              // value = {this.state.username}
              autofocus
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