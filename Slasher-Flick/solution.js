
function slasher(arr, howMany) {
  // it doesn't always pay to be first
  // if 'howMany' = 0, just return the array
  if (howMany === 0) {
    return arr;
  } else {
    //reassign arr to itself by splicing.
   arr = arr.splice(howMany, arr.length-1);
  return arr;
  }

}

slasher([1, 2, 3], 2);
