// # Given nums = [2, 7, 11, 15], target = 9,

// # Because nums[0] + nums[1] = 2 + 7 = 9,
// # return [0, 1]. ie the indexes

// # 1. Two Sum

// # THE ARRAY IS NOT SORTED - TWO POINTER ARRAY WILL NOT WORK

const twoSum = (nums, target) => { // nums target
    const map = {}; // hash table
  
    for (let i = 0; i < nums.length; i++) { // loop
      const another = target - nums[i]; // find value - target for each num in loop
  
      if (another in map) { // if another in map
        return [map[another], i]; // return map another and value of i
      }
  
      map[nums[i]] = i; // put nums[i] in map hash table
    }
  
    return null; // return null 
  };

module.exports = twoSum;