
function getIndexToIns(arr, num) {
  // Find my place in this sorted array.

  // push num to the array then sort it
  arr.push(num);
  arr = arr.sort(function(a,b){
    return a - b;
  });

  //return the index of num
  return arr.indexOf(num);
}

getIndexToIns([40, 60], 50);
