function fib(n, memo=[]){
    if(memo[n] !== undefined){
        return memo[n]
    }
    if (n <=2) return 1;
    var res = fib(n-1, memo) + fib(n - 2, memo); // save result as a variable - then we index as memo
    memo[n] =res; // store the result as memo
    return res;

}