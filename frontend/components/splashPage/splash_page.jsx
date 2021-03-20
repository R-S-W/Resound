
import React from 'react';
import VerificationContainer from '../verification/verification_container';
import LoginFormContainer from '../sessionForm/login_form_container';
import SignupFormContainer from '../sessionForm/signup_form_container';

// import {CSSTransition} from 'react-transition-group';

class SplashPage extends React.Component{
  constructor(props){
    super(props);
    this.state={
      isLoginVisible: false,
      isSignupVisible: false
    }
    this.handleModal = this.handleModal.bind(this);
    this.evalClassName = this.evalClassName.bind(this);
  }

  handleModal(type){//Types are login and signup
    debugger
    let isSessionFormVisible;
    isSessionFormVisible =  (type === 'signup') ?  'isSignupVisible' : 'isLoginVisible';
    
    return (e)=>{
      this.setState({ [isSessionFormVisible] : !this.state[isSessionFormVisible]});
    }
    //don't need to care about whether both bools are true, since our page will make sure the other verifictation button is unclickable.
  }


  // showFunc(){

  //   if ( this.state.isLoginVisible ){
  //     return (
  //     <CSSTransition
  //       key='loginFormTransition'
  //       classNames="session-form"
  //       in={this.state.isLoginVisible}
  //       timeout={2000}
  //     // umountOnExit
  //     >
  //       <LoginFormContainer
  //         className='modal  show-modal'
  //         handleSwitch={this.handleModal('login')}
  //       />

  //     </CSSTransition>
  //     )
  //   }
  //   // }

  // }

  evalClassName(aBool){
    return  aBool ? 'modal show-modal' : 'modal hide-modal'
  }




  render(){
    debugger
    return (
      <div className = 'splash-page'>
        <div className = 'rectangle'></div>
        <header>
          <div className = 'logo-title'>
            {/* <img className= 'logo' src = {window.resoundLogoURL}/> */}
            <img className='logo' src={window.resoundLogoWhiteBorderURL} />
            <h1 className = 'title'>RESOUND</h1>
          </div>
          <VerificationContainer
            handleModal = {this.handleModal}
          />

        </header>
        <img className ='stars-pic' src={window.soundcloudStarsURL} />




        {
          this.state.LoginVisible ?
            <LoginFormContainer
              className = {this.evalClassName(this.state.isLoginVisible)}
              handleSwitch = {this.handleModal('login')}
            /> 
          :
          null
        }


        {this.state.isSignupVisible ?
          <SignupFormContainer
            className={this.evalClassName(this.isSignupVisible)}
            handleSwitch={this.handleModal('signup')}
          />
          :
          null
        }





        {/* {this.makeAudioTag()} */}


        {/* {this.showFunc()} */}
          {/* <CSSTransition 
            key = 'loginFormTransition'
            classNames = "session-form"
            in = {this.state.isLoginVisible}
            timeout = {2000}
            // umountOnExit
            >
              <div id = 'a-box'> */}
             
          
                
              {/* </div>
              
          </CSSTransition> */}





          {/* 
          <CSSTransition
            key='loginFormTransition'
            classNames="session-form"
            in={this.state.isLoginVisible}
            timeout={2000}
          >
            <div id='testbox'></div>

          </CSSTransition> */}

 
      </div>
    )
  }

}

export default SplashPage;