// Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

// Examples
// "()"              =>  true
// ")(()))"          =>  false
// "("               =>  false
// "(())((()())())"  =>  true
// Constraints
// 0 <= length of input <= 100

// All inputs will be strings, consisting only of characters ( and ).
// Empty strings are considered balanced (and therefore valid), and will be tested.
// For languages with mutable strings, the inputs should not be mutated.

// Solution:

// In this implementation, we iterate over each character in the parenStr string. If we encounter an opening parenthesis, we increment the counter, and if we encounter a closing parenthesis, we decrement the counter. If at any point the counter becomes negative, we know that there are more closing parentheses than opening parentheses, so we return false to indicate an invalid string. Finally, after iterating through the entire string, we check if the counter is zero. If it is, it means all opening parentheses have their closing counterparts, so we return true. Otherwise, we return false.

function validParentheses(parenStr) {
  let counter = 0;

  for (let i = 0; i < parenStr.length; i++) {
    if (parenStr[i] === "(") {
      counter++;
    } else if (parenStr[i] === ")") {
      counter--;
    }

    if (counter < 0) {
      return false;
    }
  }

  return counter === 0;
}
