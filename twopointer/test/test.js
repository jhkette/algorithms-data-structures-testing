

// LEETCODE

const findsum = require('../index.js');
const assert = require('assert');


it('is correct', ()=>{
  const x = findsum([0,1,2,3,4,5,6,7], 11);
  const y = x[0]
  const z = x[1]
  assert.strictEqual(y, 4)
  assert.strictEqual(z, 7)
});
