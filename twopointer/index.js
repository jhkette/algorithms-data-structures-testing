// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
// # Two pointer technique for finding two sum
// # THIS IS THE WAY TO FIND A SUM FROM AN ARRAY -
// # USING A TWO POINTER TECHNIQUE

function findsum(numbers, target){
    let i =0;
    let j= numbers.length -1;
    while(i < j){
        if(numbers[i] + numbers[j]== target){
            return [i,j];
        }else if(numbers[i] + numbers[j] < target){
            i++;
        }else{
            j --;
        }
    }
  
}

module.exports = findsum;