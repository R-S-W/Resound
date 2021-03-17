import React from 'react';


//test component just for testing whether the routes are protected.

import { connect } from "react-redux"

const mstp = (state)=>{
  return {}
}


const Test = (props)=>{
  return (
    <div>This is a Test</div>
  )
}




export default connect(mstp)(Test);