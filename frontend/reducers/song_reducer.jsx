


const RECEIVESOMETHING= 'RECEIVESOMETHING';


const SongReducer = (state= {}, action)=>{
  Object.freeze(state);
  switch(action.type){
    case RECEIVESOMETHING:
      return state;
    default:
      return state;
  }
}

export default SongReducer;