


const RECEIVESOMETHING= 'RECEIVESOMETHING';


const songsReducer = (state= {}, action)=>{
  Object.freeze(state);
  switch(action.type){
    case RECEIVESOMETHING:
      return state;
    default:
      return state;
  }
}

export default songsReducer;