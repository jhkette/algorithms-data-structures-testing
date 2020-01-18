const twoSum = require('../index.js');
const assert = require('assert');


it('works!', ()=> {
    const x = twoSum([0,2,5,3,6,5], 11)
    assert.strictEqual(x[0],2)
    assert.strictEqual(x[1],4)
})