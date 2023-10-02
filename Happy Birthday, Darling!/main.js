// As you may know, once some people pass their teens, they jokingly only celebrate their 20th or 21st birthday, forever. With some maths skills, that's totally possible - you only need to select the correct number base!

// For example, if they turn 32, that's exactly 20 - in base 16... Already 39? That's just 21, in base 19!

// Your task is to translate the given age to the much desired 20 (or 21) years, and indicate the number base, in the format specified below.

// Note: input will be always > 21

// Solution:

function womensAge(n) {
  let base = Math.floor(n/2)
  let desiredAge = n % 2 === 0 ? 20 : 21
  if(n <= 32){
    return `${n}? That's just ${desiredAge}, in base ${base}!`
  } else if (n > 32){
     return `${n}? That's just ${desiredAge}, in base ${base}!`
  }
}