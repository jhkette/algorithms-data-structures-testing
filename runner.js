const fs = require("fs");
const path = require("path");
const render = require('./render')
const chalk = require('chalk')

class Runner {
  // constructor 
  constructor() {
    // testfiles and forbiddenDirs 
    // and forbiddenDirs
    this.testFiles = [];
    this.forbiddenDirs = ["node_modules"];
  }

  async runTests() {
    for (let file of this.testFiles) {
      // the description 'should sum an array' and a function
      // are paramaters
      const beforeEaches = [];
      // global render function
      global.render = render;
      // global beforeEach 
      // pushes each function 
      // into beforeeaches
      global.beforeEach = fn => {
        beforeEaches.push(fn);
      };
      global.it = async (desc, fn) => {
        // call beforeeach functions (a loop that loops through)
        beforeEaches.forEach(func => func());
        try {
          // call fn (a parameter in the global it function)
          await fn();
          // Console.log description (a parameter of it function)
          console.log(chalk.green(`\tOK - ${desc}`));
        } catch (err) {
          // catch Console.log description again
          console.log(chalk.red(`\tX - ${desc}`));
           // catch Console.log err.message
          console.log(chalk.red('\t', err.message));
        }
      };
      try {
        // require file.name
        require(file.name);
      } catch (err) {
        console.log(chalk.red(err));
      }
    }
  }
  // This function collects files and push 
  // to this.testfiles()
  // target path is the description
  async collectFiles(targetPath) {
    const files = await fs.promises.readdir(targetPath);
    console.log(targetPath);

    for (let file of files) {
      const filepath = path.join(targetPath, file);
      const stats = await fs.promises.lstat(filepath);

      if (stats.isFile() && file.includes("test.js")) {
        this.testFiles.push({ name: filepath });
      } else if (stats.isDirectory() && !this.forbiddenDirs.includes(file)) {
        const childFiles = await fs.promises.readdir(filepath);

        files.push(...childFiles.map(f => path.join(file, f)));
      }
    }
  }
}

module.exports = Runner;
