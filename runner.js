const fs = require("fs");
const path = require("path");
const render = require("./render");
const chalk = require("chalk");

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
      // define GLOBAL 'it' function
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
          console.log(chalk.red("\t", err.message));
        }
      };
      try {
        // require file.name
        require(file.name);
      } catch (err) {
        // chalk err
        console.log(chalk.red(err));
      }
    }
  }
  // This function collects files and push
  // to this.testfiles()
  // target path is the description
  async collectFiles(targetPath) {
    // readdir from the target directory
    const files = await fs.promises.readdir(targetPath);

    // loop through files
    for (let file of files) {
      // join path
      const filepath = path.join(targetPath, file);
      // stats gets file status (lstat is the function does this)
      const stats = await fs.promises.lstat(filepath);
      // stats is a file and includes 'test.js'
      if (stats.isFile() && file.includes("test.js")) {
        // push file
        this.testFiles.push({ name: filepath });
      }
      // directory && is not in forbidden dirs
      else if (stats.isDirectory() && !this.forbiddenDirs.includes(file)) {
        
        const childFiles = await fs.promises.readdir(filepath);
        //  push new files into 'files' array.
        files.push(...childFiles.map(f => path.join(file, f)));
      }
    }
  }
}

module.exports = Runner;
