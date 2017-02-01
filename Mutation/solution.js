
function mutation(arr) {

  // iterate through the array and lowercase all strings
  arr = arr.map(function(e) {
    return e.toLowerCase();
  });

  // Create a flag variable that will track a true/false status of index
  var flag;

  // loop each letter in the second index of the arr
  for(var i = 0; i < arr[1].length; i++) {
    // if the letter from the second arg is not found in the first index, immediately return false
    if (arr[0].indexOf(arr[1][i]) === -1) {
      flag = false;
      return flag;
    } else {
      flag = true;
    }
  }
  return flag;
}

mutation(["heLlo", "hey"]);
