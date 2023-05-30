// Problem:
// You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

// The returned value must be a string, and have "***" between each of its letters.

// You should not remove or add elements from/to the array.



// Solution:

function twoSort(s) {
  //P is a string
  //R the first value
  //E ['dog'] => 'd***o***g'
  //P method to sort, we're going to return the first index of the string
  // once we have the first index, we'll split the characters and join with the three stars
  s.sort()
  return (s[0].split('').join('***'))
}