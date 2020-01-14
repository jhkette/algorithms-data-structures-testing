const path = require ('path');
const jsdom = require('jsdom');
const {JSDOM} = jsdom;

// This render function
// takes function 
const render = async filePath => {
  const dom = await JSDOM.fromFile(filePath,{
      runScripts: 'dangerously',
      resources: 'usable'
  })
  // return dom
  return dom;

}

module.exports = render;