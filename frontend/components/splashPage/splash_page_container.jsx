
import { connect } from 'react-redux';
import SplashPage from './splash_page';

const mapStateToProps = (state)=>{
  return {
    currentUserId: state.session.id
  }
}

// const mapDispatchToProps = (disp)=>{
//   return {
    
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(SplashPage);
export default connect(mapStateToProps)(SplashPage);