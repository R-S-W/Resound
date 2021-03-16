import React from 'react';
import ReactDOM from 'react-dom';
import configureStore  from './store/store';


document.addEventListener('DOMContentLoaded', ()=>{
  const root = document.getElementById('root');
  // const store = configureStore();
  
  ReactDOM.render( <Root store= {store}/> ,root);
  // ReactDOM.render( <h1>HELLO WORLD, this is Resound.jsx!</h1>, root);
})