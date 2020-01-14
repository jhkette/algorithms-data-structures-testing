#!/usr/bin/env node

const Runner = require("./runner");
// new instatation of Runner class
const runner = new Runner();

// create an async function 
// that collects files
// then run tests
const run = async () => {
  await runner.collectFiles(process.cwd());
  runner.runTests();
};
//  run the function
run();
