// You are given a string allowed consisting of distinct characters and an array of strings words. A string is consistent if all characters in the string appear in the string allowed.

// Return the number of consistent strings in the array words.

// Solition: 

var countConsistentStrings = function(allowed, words) {
    let count = 0 

    for (let j = 0; j < words.length; j++) {
        let isConsistent = true;

        for (let i = 0; i < words[j].length; i++) {
            if (!allowed.includes(words[j][i])) {
                isConsistent = false;
                break;
            }
        }

        if (isConsistent) {
            count++;
        }
    }

    return count;
};