// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24


// Solution:

function grow(x){
  let initialValue = 1
return x.reduce((accumulator, currentValue) => accumulator * currentValue, initialValue);
}