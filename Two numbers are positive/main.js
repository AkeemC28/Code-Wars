// Task:
// Your job is to write a function, which takes three integers a, b, and c as arguments, and returns True if exactly two of of the three integers are positive numbers (greater than zero), and False - otherwise.

// Examples:
// twoArePositive(2, 4, -3) == true
// twoArePositive(-4, 6, 8) == true
// twoArePositive(4, -6, 9) == true
// twoArePositive(-4, 6, 0) == false
// twoArePositive(4, 6, 10) == false
// twoArePositive(-14, -3, -4) == false

// Solution:

function twoArePositive(a, b, c) {
  let count = 0
  let letters = [a,b,c]
  for(let i = 0; i < letters.length; i++){
    if(letters[i] > 0){
      count ++  
    } 
  }
    return count === 2
}