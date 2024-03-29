// There's a "3 for 2" (or "2+1" if you like) offer on mangoes. For a given quantity and price (per mango), calculate the total cost of the mangoes.

// Examples
// mango(2, 3) ==> 6    # 2 mangoes for $3 per unit = $6; no mango for free
// mango(3, 3) ==> 6    # 2 mangoes for $3 per unit = $6; +1 mango for free
// mango(5, 3) ==> 12   # 4 mangoes for $3 per unit = $12; +1 mango for free
// mango(9, 5) ==> 30   # 6 mangoes for $5 per unit = $30; +3 mangoes 

// Solution:

function mango(quantity, price) {
    let total = Math.floor(quantity / 3) * 2 * price; 
    total += (quantity % 3) * price; 
    return total;
}

// // another solution:
// function mango(quantity, price){
//     let quan = []
//     for(let i = 1; i <= quantity; i++) {
//   //     had to do <= instead of <
//       quan.push(i)
//     }
//    let mangoes = quan.filter((i) => i % 3 !== 0)
//   //   had to do !== instead of ===
//    return price * (mangoes.length)
//   //   didn't need to do length - 1
//   }

function mango(quantity, price){
    let mangoPack = []
  
    for(let i = 1; i <= quantity; i++){
      if(i % 3 === 0){
        mangoPack.push(i)
      }
    } return (quantity - mangoPack.length) * price
  }