// majority element
// Given an array of size n, find the majority element. 
// The majority element is the element that appears more than ⌊ n/2 ⌋ times.

// You may assume that the array is non-empty and the majority 
// element always exist in the array.

// Example 1:

// Input: [3,2,3]
// Output: 3

/**
 * @param {number[]} nums
 * @return {number}
 */


function majorityelement(arr){
    const hash ={};
    for(i=0; i <arr.length; i++){
        if(hash[arr[i]]){
            hash[arr[i]] += 1;
        } else{
          hash[arr[i]] =1;
        }

    }
   return Object.keys(hash).reduce((a,b) => {
        return hash[a] > hash[b] ? a : b
    })
}