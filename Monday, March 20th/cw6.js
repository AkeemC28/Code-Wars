// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.//




function digitize(n) {
    if (n === 0) {
      return [0];
    }
    
    const digits = [];
    
    while (n > 0) {
      digits.push(n % 10);
      n = Math.floor(n / 10);
    }
    
    return digits;
  }