
import { connect } from 'react-redux';
import SplashPage from './splash_page';

// const mapStateToProps = (state)=>{
//   return {
//     // currentUser: state.entities.users[state.session.id]
//   }
// }

// const mapDispatchToProps = (disp)=>{
//   return {
    
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(SplashPage);
export default connect(null)(SplashPage);