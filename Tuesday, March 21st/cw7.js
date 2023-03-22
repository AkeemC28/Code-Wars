// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.





function findAverage(array) {
  if (array.length === 0) {
    return 0;  // return 0 for empty arrays
  }
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum / array.length;  // calculate and return the average
}