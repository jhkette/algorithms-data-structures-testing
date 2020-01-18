const capitalize = require('../index.js');
const assert = require('assert');


it('it capitalizes the sentence', ()=> {
    const x = capitalize('look, it is working!') 
    assert.strictEqual(x, 'Look, It Is Working!')
})

