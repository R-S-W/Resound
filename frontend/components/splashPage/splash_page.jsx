
import React from 'react';
import VerificationContainer from '../verification/verification_container';
import LoginFormContainer from '../sessionForm/login_form_container';
import SignupFormContainer from '../sessionForm/signup_form_container';
// import 
class SplashPage extends React.Component{
  constructor(props){
    super(props);
    this.state={
      isLoginVisible: false,
      isSignupVisible: false
    }
    this.handleModal = this.handleModal.bind(this);
  }

  handleModal(type){//Types are login and signup
    let isSessionFormVisible;
    isSessionFormVisible =  (type === 'signup') ?  'isSignupVisible' : 'isLoginVisible';
    
    return (e)=>{
      
      this.setState({ [isSessionFormVisible] : !this.state[isSessionFormVisible]});
    }
    //don't need to care about whether both bools are true, since our page will make sure the other verifictation button is unclickable.
  }

  render(){
    return (
      <div className = 'splash-page'>
        <div className = 'rectangle'></div>
        <header>
          <div className = 'logo-title'>
            <img className= 'logo' src = {window.resoundLogoURL}/>
            <h1 className = 'title'>RESOUND</h1>
          </div>
          <VerificationContainer
            handleModal = {this.handleModal}
          />

        </header>
        <img className ='stars-pic' src={window.soundcloudStarsURL} />



        <LoginFormContainer
          className = {this.state.isLoginVisible ? 'modal  show-modal' : 'modal  hide-modal'}
          handleSwitch = {this.handleModal('login')}
          //be careful if this will overwrite other classes you need for styling.
        /> 
        <SignupFormContainer
          className={this.state.isSignupVisible ? 'modal  show-modal' : 'modal  hide-modal'}
          handleSwitch={this.handleModal('signup')}
        />
      </div>
    )
  }

}

export default SplashPage;