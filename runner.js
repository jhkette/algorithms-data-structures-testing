const fs = require('fs')
const path = require('path')

class Runner {
    // a data structure that stores a reference to every file 
    // we discover

    constructor(){
        this.files = [];
    }

    async collectFiles(targetPath){
        const files = await fs.promises.readdir(targetPath)

        for (let file of files){
            const filepath = path.join(targetPath, file);
            const stats = await fs.promises.lstat(filepath);
        }
        if(stats.isFile() && file.includes('.test.js')){
            this.files.push({name: filepath})
        }else if(stats.isDirectory()){
            const childFiles = await fs.promises.readdir(filepath);

            file.push(...childFiles.map(f => path.join(file, f)));

        }
        

    }

}

module.exports = Runner;