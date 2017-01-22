function chunkArrayInGroups(arr, size) {
  // Break it up
  // It's already broken :(
  arr = arr.slice();
  var arr2 = [];
  for(var i = 0, len = arr.length; i < len; i+=size) {
    arr2.push(arr.slice(0, size));
    arr = arr.slice(size);
  }
  return arr2;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
