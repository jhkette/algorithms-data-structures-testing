
// refactored version of binary search

function search (arr,target){
    var start = 0;
    var end = arr.length -1;
    while(start <= end){
        var middle = Math.floor((start+end)/2)
        if(arr[middle]==target){
            return middle;
        }
        else{
            if(target < arr[middle]){
                end = middle -1
            }
            else{
                start = middle +1
            }
        }
    }
    return -1;
}


module.exports = search;