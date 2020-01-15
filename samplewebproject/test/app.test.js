const assert = require('assert');

// check that a text input field is in HTML file
it('has a text input', async () => {
  const dom = await render('index.html');

  const input = dom.window.document.querySelector('input');

  assert(input);
});

// checks a success message is shown
it('shows a success message with a valid emai', async () => {
  // assign dom to render function
  const dom = await render('index.html');
  // input querySelector 
  const input = dom.window.document.querySelector('input');
  // add value 
  input.value = 'alskdjf@aslkdjf.com';
  // dom.window.document = 
  // querySelector('form')
  // dispatchEvent submit 
  dom.window.document
    .querySelector('form')
    .dispatchEvent(new dom.window.Event('submit'));
  // h2 select h2
  const h2 = dom.window.document.querySelector('h2');
  // strict equal 
  assert.strictEqual(h2.innerHTML, 'Looks good')
});