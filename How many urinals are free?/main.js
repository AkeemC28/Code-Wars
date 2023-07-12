// How many urinals are free?
// In men's public toilets with urinals, there is this unwritten rule that you leave at least one urinal free between you and the next person peeing. For example if there are 3 urinals and one person is already peeing in the left one, you will choose the urinal on the right and not the one in the middle. That means that a maximum of 3 people can pee at the same time on public toilets with 5 urinals when following this rule (Only 2 if the first person pees into urinal 2 or 4).

// Imgur Urinals

// Your task:
// You need to write a function that returns the maximum of free urinals as an integer according to the unwritten rule.

// Input
// A String containing 1s and 0s (Example: 10001) (1 <= Length <= 20)
// A one stands for a taken urinal and a zero for a free one.

// Examples
// 10001 returns 1 (10101)
// 1001 returns 0 (1001)
// 00000 returns 3 (10101)
// 0000 returns 2 (1001)
// 01000 returns 1 (01010 or 01001)

// Note
// When there is already a mistake in the input string (for example 011), then return -1

// Have fun and don't pee into the wrong urinal ;)

// Solution:

function getFreeUrinals(urinals) {
  let freeUrinalCount = 0;
  let urinalStr = urinals.toString();

  // Check for a mistake 
  if (urinalStr.includes('11')) {
    return -1;
  }

  for (let i = 0; i < urinalStr.length; i++) {
    if (urinalStr[i] === '0') {
      // Check the neighboring characters
      if ((i === 0 || urinalStr[i - 1] === '0') && (i === urinalStr.length - 1 || urinalStr[i + 1] === '0')) {
        freeUrinalCount++;
        // Marking the current urinal as taken 
        urinalStr = urinalStr.substring(0, i) + '1' + urinalStr.substring(i + 1);
      }
    }
  }

  return freeUrinalCount;
}