
import React from 'react'
import {Link} from 'react-router-dom'

class SessionForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      username:'',
      password:'',
      email: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.emailDiv = this.emailDiv.bind(this);  //#####
    this.oppositeFormType = (props.formType==="signup") ?  'login' : 'signup';
  }

  handleChange(type){
    return (e)=>{
      this.setState({
        [type]: e.target.value
      });
    }
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.processForm(Object.assign({},this.state));   //##
  }

  emailDiv(){                             
                    //#-#
    if (this.props.formType === 'signup'){
      return (
        <label onChange={this.handleChange('email')}>Email:
          <input type="text"/>
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
      <div>
        <h4>{this.props.formType.toUpperCase()}</h4>
        <form  onSubmit= {this.handleSubmit}>
          <label>Username:
            <input type="text" onChange = {this.handleChange('username')}/>
          </label>
          <label>Password:
            <input type="password" onChange={this.handleChange('password')} />
          </label>

          {this.emailDiv()}

          <button>Submit</button>
        </form>
        <Link to = {`${this.oppositeFormType}`}></Link>
        
        {this.errorList()}
      </div>
    )
  }
}

export default SessionForm;