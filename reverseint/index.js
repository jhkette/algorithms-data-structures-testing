
function reverseint(num){
    const x = num.toString().split('').reverse().join('');
    return parseInt(x) * Math.sign(num); 
 }

 module.exports = reverseint;