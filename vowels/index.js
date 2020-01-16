

function vowels(str){
    let y = str.match(/[aeiou]/gi)
    return y ? y.length : -1;
}
module.exports = vowels;