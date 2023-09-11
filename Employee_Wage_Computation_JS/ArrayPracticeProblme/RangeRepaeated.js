//Problem 5
function findNumbersWithRepeatedDigits(start, end) {
    const result = [];
    
    for (let i = start; i <= end; i++) {
      const digits = i.toString();
      let hasRepeatedDigits = false;
      
      for (let j = 0; j < digits.length; j++) {
        if (digits.indexOf(digits[j], j + 1) !== -1) {
          hasRepeatedDigits = true;
          break;
        }
      }
      
      if (hasRepeatedDigits) {
        result.push(i);
      }
    }
    
    return result;
  }
  
  const startRange = 0;
  const endRange = 100;
  const numbersWithRepeatedDigits = findNumbersWithRepeatedDigits(startRange, endRange);
  
  console.log("Numbers with repeated digits between", startRange, "and", endRange, "are:", numbersWithRepeatedDigits);
  console.log("------PROBLEM 5----------");
