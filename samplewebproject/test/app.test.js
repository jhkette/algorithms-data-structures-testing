const assert = require('assert')

it('has a text input', async () => {
    const dom = await render('index.html');
    
    const input = dom.window.document.querySelector('input');

    assert(input)
})


it('shows a success message with a valid emai', async () => {
    const dom = await render('index.html');
  
    const input = dom.window.document.querySelector('input');
    input.value = 'alskdjf@aslkdjf.com';
    dom.window.document
      .querySelector('form')
    //  dispatch event 'submit' (ie like submitting form)
      .dispatchEvent(new dom.window.Event('submit'));
  
    const h2 = dom.window.document.querySelector('h2');
  
    console.log('Contents of h2', h2.innerHTML);
  });