const vowels = require('../index.js');
const assert = require('assert');

it('function works', ()=> {
    const x = vowels('hello');
    assert.strictEqual(x, 2)
})

it('function exists', ()=> {
    const x = vowels('hello');
    let y;
    if(x){
        y = true;
    }
    assert.strictEqual(y, true);
})

