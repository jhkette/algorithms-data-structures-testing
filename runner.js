const fs = require("fs");
const path = require("path");

class Runner {
  constructor() {
    this.testFiles = [];
    this.forbiddenDirs = ["node_modules"];
  }

  async runTests() {
    for (let file of this.testFiles) {
      // the description 'should sum an array' and a function
      // are paramaters
      const beforeEaches = [];
      global.beforeEach = fn => {
        beforeEaches.push(fn);
      };
      global.it = (desc, fn) => {
        beforeEaches.forEach(func => func());
        try {
          fn();
          console.log(`Ok - ${desc}`);
        } catch (err) {
          console.log(`X - ${desc}`);
          console.log("\t", err.message);
        }
      };
      try {
        require(file.name);
      } catch (err) {
        console.log(err);
      }
    }
  }

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
