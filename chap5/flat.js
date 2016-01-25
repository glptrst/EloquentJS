var arrays = [[1, 2, 3], [4, 5], [6]];
// Your code here.
var flat = arrays.reduce(function(flat, cur) {
  return flat.concat(cur);
});

console.log(flat);