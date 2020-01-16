

function reverse(str){
    let x = '';
    for(let c of str){
        x = c + x;
    }
    return x;
}


// function reverse(str){
//     return str.split('').reverse('').join('');
// }
module.exports = reverse;