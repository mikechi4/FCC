
function destroyer(arr) {
  // loop through the arguments object on the function
  for(var i in arguments) {
    // we don't want the first argument because it is an array
    var destroy = arguments[i];
    if(i > 0) {
      // loop through arr. if val at index i is equal to destroy, remove from array
      for(var j = arr.length - 1; j >= 0; j--) {
        if(arr[j] == destroy) {
          arr.splice(j, 1);
        }
      }
    }
  }
  return arr;
}

// destroyer([1, 2, 3, 1, 2, 3], 2, 3);
