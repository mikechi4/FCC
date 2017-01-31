function chunkArrayInGroups(arr, size) {
  // Break it up

  // reassign arr to itself as a sliced array.
  arr = arr.slice();
  // create an empty array that will hold two-dimensional arrays
  var chunkyArr = [];
  //loop through the array and increment i by the size arg passed in
  for(var i = 0, len = arr.length; i < len; i+=size) {
    //slice arr and push to chunkyArr
    chunkyArr.push(arr.slice(0, size));
    arr = arr.slice(size);
  }
  return chunkyArr;
}
