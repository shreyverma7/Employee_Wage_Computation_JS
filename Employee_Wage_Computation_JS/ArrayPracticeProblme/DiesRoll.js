function rollDie() {
    // Simulate rolling a 6-sided die and return the result
    return Math.floor(Math.random() * 6) + 1;
  }
  
  function simulateDieRolls() {
    const results = {};
    let maxTimes = 0;
    let minTimes = Infinity;
    let maxNumber = null;
    let minNumber = null;
  
    while (true) {
      const result = rollDie();
  
      // Count the number of times each result occurs
      if (!results[result]) {
        results[result] = 1;
      } else {
        results[result]++;
      }
  
      // Check if any number has reached 10 times
      if (results[result] === 10) {
        console.log(`Number ${result} reached 10 times!`);
        break;
      }
  
      // Update max and min counts and numbers
      if (results[result] > maxTimes) {
        maxTimes = results[result];
        maxNumber = result;
      }
  
      if (results[result] < minTimes) {
        minTimes = results[result];
        minNumber = result;
      }
    }
  
    console.log("Results:", results);
    console.log("Number that reached the maximum times:", maxNumber);
    console.log("Number that reached the minimum times:", minNumber);
  }
  
  simulateDieRolls();
  