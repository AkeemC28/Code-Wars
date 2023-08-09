// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

// Solution:

function count(string) {
  if (string === "") {
    return {}; // Returning an empty object for an empty string
  }

  let charCount = {};

  for (let i = 0; i < string.length; i++) {
    let char = string[i];
    charCount[char] = charCount[char] ? charCount[char] + 1 : 1;
  }

  return charCount;
}


