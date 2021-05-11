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




export const shuffleArray = (arr) => {
  let newArr = [];
  let indArr = generateIndices(arr.length);
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[indArr[i]]);
  }
  return newArr;
}

const generateIndices = (num) => {
  let indArr = [];
  while (indArr.length < num && isNoRepeatElements(indArr)) {
    let x = Math.floor(Math.random() * num);
    if (indArr.indexOf(x) === -1) {
      indArr.push(x);
    }
  }
  return indArr;
}

const isNoRepeatElements = (arr) => {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]]) {
      obj[arr[i]]++;
    } else {
      obj[arr[i]] = 1;
    }
  }
  let objVals = Object.values(obj);
  for (let j = 0; j < objVals.length; j++) {
    if (objVals[j] > 1) return false;
  }
  return true;
}