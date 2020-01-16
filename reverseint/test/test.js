
const reverseint = require('../index.js');
const assert = require('assert');

it('function reverses numbers', () => {
    const x = reverseint(123);
    assert.strictEqual(x,321)
})