// Numbers ending with zeros are boring.

// They might be fun in your world, but not here.

// Get rid of them. Only the ending ones.

// 1450 -> 145
// 960000 -> 96
// 1050 -> 105
// -1050 -> -105
// Zero alone is fine, don't worry about it. Poor guy anyway

// Solution:

function noBoringZeros(n) {
  let numArr = n.toString().split('');
  
  for (let i = numArr.length - 1; i >= 0; i--) {
    if (numArr[i] === '0') {
      numArr.pop();
    } else {
      break;
    }
  }
  
  return +numArr.join('');
}