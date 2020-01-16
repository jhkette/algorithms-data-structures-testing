const maxChars = require('../index.js');
const assert = require('assert');


it('maxchars function exists', ()=> {
    const x = maxChars('sadadf gggggggg');
    let y;
    if(x){
        y = true;
    }
    assert.strictEqual(y, true)
})


it('maxchars function works', ()=> {
    const x = maxChars('sadadf gggggggg');
    assert.strictEqual(x, 'g')
})