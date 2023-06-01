// Problem: In this kata, your goal is to write a function which will reverse the vowels in a string. Any characters which are not vowels should remain in their original position. Here are some examples:

// "Hello!" => "Holle!"
// "Tomatoes" => "Temotaos"
// "Reverse Vowels In A String" => "RivArsI Vewols en e Streng"
// For simplicity, you can treat the letter y as a consonant, not a vowel.

// Good luck!

// Solution

function reverseVowels(str) {
  let vowelArr = ['a', 'e', 'i', 'o', 'u'];
  let splitStr = str.split('');

  let vowels = [];
  for (let i = 0; i < splitStr.length; i++) {
    if (vowelArr.includes(splitStr[i].toLowerCase())) {
      vowels.push(splitStr[i]);
    }
  }

  let vowelIndex = vowels.length - 1;

  for (let i = 0; i < splitStr.length; i++) {
    if (vowelArr.includes(splitStr[i].toLowerCase())) {
      splitStr[i] = vowels[vowelIndex];
      vowelIndex--;
    }
  }

  return splitStr.join('');
}