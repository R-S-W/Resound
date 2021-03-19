
import React from 'react'
import {Link} from 'react-router-dom'

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
    //#-# check order of these async lines 
    this.props.handleSwitch();///////
    this.props.processForm(Object.assign({},this.state));   //##
  }


  


  // handleFocus(type) {//Takes away the prefilled data from the username
  //   return (e)=>{
  //     // debugger
  //     let val = e.target.value;
  //     if (this.isUnfilledDict[type]){
  //       val = '';           /////////i will not change the isUnchangedDict element to false here. It is changedin handlechanged
  //       this.isUnfilledDict[type] = false;
  //     }
  //     this.setState({[type]: val});
  //   }
  // }
  // handleBlur(type){
  //   return (e)=>{
  //     let val  = e.target.value;
  //     if (val ===''){
  //       this.isUnfilledDict[type]= true;
  //       this.setState({
  //         [type]: this.defaultState[type]
  //       })
  //     }
  //   }
  // }



  //Component rendering functions_________
  passwordDiv(){
    return (
      <input
        className='password'
        type="password"
        onChange={this.handleChange('password')}
        placeholder= " Your Password"
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
          // onFocus = {this.handleFocus('email')}
          // onBlur=  {this.handleBlur('email')}            
          // value = {this.state.email}
          placeholder = " Your Email"
        />
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

                  <input
                    className='username'
                    type="text"
                    onChange={this.handleChange('username')}
                    placeholder = " Your Username"
                    // onFocus={this.handleFocus('username')}
                    // onBlur={this.handleBlur('username')}
                    // value={this.state.username}
                  // autoFocus
                  />

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
        
        {this.errorList()}
      </div>
    )
  }
}

export default SessionForm;