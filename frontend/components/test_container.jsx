import React from 'react';


//test component just for testing whether the routes are protected.

import { connect } from "react-redux"

const mstp = (state)=>{
  return {}
}


const Test = (props)=>{
  return (
    <p>This is a Test</p>
  )
}




export default connect(mstp)(Test);