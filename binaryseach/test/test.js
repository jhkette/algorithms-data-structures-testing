const search = require('../index.js');
const assert = require('assert');


it('the function is present', () =>  {
    const x =  search([0,1,2,3,4,5,6,7],5);
    let y;
    if(x){
        y = true;
    }
    assert.strictEqual(y,true); 
})




it('the correct index is shown', () =>  {
   const x =  search([0,1,2,3,4,5,6,7],5)
   assert.strictEqual(x,5);   
});

