// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str){
    const chars = str.split('')
    const hash ={}
    for(let c of chars){
        if(hash[c]){
            hash[c] += 1
        }else{
            hash[c] = 1;
        }

    }
    return Object.keys(hash).reduce((a,b) => {
          return hash[a] > hash[b] ? a:b
    })
}

module.exports = maxChar;