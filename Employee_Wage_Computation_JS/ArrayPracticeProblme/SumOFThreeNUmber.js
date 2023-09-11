
//Problem 4
function findTripletsWithZeroSum(nums) {
    const triplets = [];
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length - 2; i++) {
      if (i > 0 && nums[i] === nums[i - 1]) {
        continue; // Skip duplicate elements
      }
      let left = i + 1;
      let right = nums.length - 1;
      while (left < right) {
        const sum = nums[i] + nums[left] + nums[right];
        if (sum === 0) {
          triplets.push([nums[i], nums[left], nums[right]]);
          while (left < right && nums[left] === nums[left + 1]) {
            left++;
          }
          while (left < right && nums[right] === nums[right - 1]) {
            right--;
          }
          left++;
          right--;
        } else if (sum < 0) {
          left++;
        } else {
          right--;
        }
      }
    }
    return triplets;
  }
  // Example usage
  const numbers = [-1, 0, 1, 2, -1, -4];
  const result = findTripletsWithZeroSum(numbers);
  if (result.length > 0) {
    console.log("Triplets with zero sum:");
    result.forEach((triplet) => {
      console.log(triplet);
    });
  } else {
    console.log("No triplets with zero sum found.");
  }
  console.log("------PROBLEM 4----------");
  