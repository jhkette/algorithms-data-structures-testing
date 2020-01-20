
const unique = require('../index.js');
const assert = require('assert');

it('the function works', ()=> {
    let x = unique([0,2,3,4,5,6,6,6,6,6,6,6,6]);

    assert.strictEqual(x, 6)
})


