const majority = require('../index.js');
const assert = require('assert');

it('a function works', () => {
   const x = majority([1,2,3,4,5,6,6,6,6,6,6,7]);
   assert.strictEqual(x, 6);
})