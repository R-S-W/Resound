//These are used in the session_form.jsx

export const isValidEmail =(str)=>{
  if (str.length <7){ return false;}
  let c = 0;
  let c2 = 0;
  let strArray = str.split('');
  strArray.forEach((l)=>{
    if (l==="@") c++;
    if (l===".") c2++;
  });
  let dotIndex = str.search('.');
  let atIndex = str.search('@');
  if(
    c !==1 ||
    c2 !== 1 || 
    dotIndex===str.length-1 || 
    str.search('@.')!== -1 ||
    dotIndex< atIndex){
      return false;
  }
  return true;
}
export const isValidUsername = (str)=>{
  return !isValidEmail(str);
}

export const determineUsernameOrEmail = (str)=>{
  if (isValidEmail(str)){
    return 'email';
  }else{
    return 'username';
  }
}

