const fs = require('fs');
const path = require('path');
const { program } = require('commander');

const projectDir = __dirname
const testDirPath = path.join(projectDir, 'test-dir');

const files = fs.readdirSync(testDirPath);

let count = 0;

files.forEach(file => {
    if (path.extname(file) === '.txt') {
        count++;
        const oldPath = path.join(testDirPath, file);
        const newPath = path.join(testDirPath, `kemiroglu${count}${path.extname(file)}`);
        
        fs.renameSync(oldPath, newPath);
    }
})



