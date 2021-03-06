import React from 'react';
import {Route, Redirect, withRouter} from 'react-router-dom';
import {connect} from 'react-redux'

const Auth = ({loggedIn, path, component: Component, exact})=>{
  
  return <Route 
    path = {path}
    exact = {exact}
    render = { (props)=>(
      loggedIn ? (<Redirect to = '/'/>) : (<Component {...props}/>)
    )}
  />
}


const Protected = ({component: Component, exact, path, loggedIn})=>{
  return <Route
    path = {path}
    exact = {exact}
    render = {(props)=>(
      loggedIn ? (<Component {...props}/>) : (<Redirect to="/login"/>)
    )}
  />
}


const mapStateToProps = (state)=>{
  return {
    loggedIn: Boolean(state.session.id)
  };
}

export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));
export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));