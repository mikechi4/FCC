
function bouncer(arr) {
  function isTruthy(arg){
    return Boolean(arg);
  }
  var filteredArray = arr.filter(isTruthy);
  return filteredArray;
}

bouncer([7, "ate", "", false, 9]);
