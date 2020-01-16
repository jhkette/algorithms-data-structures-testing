// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
// # Two pointer technique for finding two sum
// # THIS IS THE WAY TO FIND A SUM FROM AN ARRAY -
// # USING A TWO POINTER TECHNIQUE

function findsum(numbers, target){
    i = 0;
    j = numbers.length -1;
    while(i < j){
       let temp = numbers[i] + numbers[j];
       if(temp == target){
           let arr =[i, j]
           return arr;
       }
        else if(temp < target){
           i ++
        }
        else{
            j --
        }
    }
    return []
}

module.exports = findsum;