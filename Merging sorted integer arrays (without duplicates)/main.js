// Write a function that merges two sorted arrays into a single one. The arrays only contain integers. Also, the final outcome must be sorted and not have any duplicate.


// Solution:

function mergeArrays(a, b) {
  let newArr = a.concat(b);
  newArr.sort((a, b) => a - b);

  for (let i = 0; i < newArr.length - 1; i++) {
    if (newArr[i] === newArr[i + 1]) {
      newArr.splice(i, 1); 
      i--;
    }
  }

  return newArr;
}

