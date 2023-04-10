// Write a function that removes the spaces from the string, then return the resultant string.

// Examples:

// Input -> Output
// "8 j 8   mBliB8g  imjB8B8  jl  B" -> "8j8mBliB8gimjB8B8jlB"
// "8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd" -> "88Bifk8hB8BB8BBBB888chl8BhBfd"
// "8aaaaa dddd r     " -> "8aaaaaddddr"

// Solution: 

function noSpace(x) {
    while (x.indexOf(" ") !== -1) {
      x = x.replace(" ", "");
    }
    return x;
  }

//   MDN reference
//   Finding all the occurrences of an element
// const indices = [];
// const array = ["a", "b", "a", "c", "a", "d"];
// const element = "a";
// let idx = array.indexOf(element);
// while (idx !== -1) {
//   indices.push(idx);
//   idx = array.indexOf(element, idx + 1);
// }
// console.log(indices);
// // [0, 2, 4]