const reverse = require('../index.js');
const assert = require('assert');


it('the function exists', () =>  {
    const x = reverse('hello')
    let y;
    if(x){
        y = true;
    }
    assert.strictEqual(y, true)

 });


it('the correct answer is shown', () =>  {
    // const x =  search([0,1,2,3,4,5,6,7],5)
    // assert.strictEqual(x,5);   
    const x = reverse('hello')
    assert.strictEqual(x,'olleh')

 });
 