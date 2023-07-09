// With the 1st floor being replaced by the ground floor and the 13th floor being removed, the numbers move down to take their place. In case of above 13, they move down by two because there are two omitted numbers below them.

// Basements (negatives) stay the same as the universal level.

// Examples
// 1  =>  0 
// 0  =>  0
// 5  =>  4
// 15  =>  13
// -3  =>  -3

// Solution:

function getRealFloor(n) {
  if (n === 1) {
    return 0; 
  } else if (n === 13) {
    return 12; 
  } else if (n > 13) {
    return n - 2; 
  } else if (n <= 0) {
    return n; 
  } else {
    return n - 1; 
  }
}