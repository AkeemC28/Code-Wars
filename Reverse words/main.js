// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

// Solution:

function reverseWords(str) {

  const words = str.split(" ");

  const reversedWords = words.map(word => {

    const chars = word.split("");

    return chars.reverse().join("");
  });

  return reversedWords.join(" ");
}