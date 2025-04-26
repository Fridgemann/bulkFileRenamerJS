const fs = require('fs');
const path = require('path');
const { program } = require('commander');

let testDirPath;

program
    .version('0.0.1')
    .description('simple bulk renamer')


    program
    .command('path <dirpath>')
    .action((dirpath) => {
        if (dirpath) {
            testDirPath = dirpath;
        }
    });

program.parse(process.argv);


const files = fs.readdirSync(testDirPath);

let count = 0;

files.forEach(file => {
    if (path.extname(file)) {
        count++;
        const oldPath = path.join(testDirPath, file);
        const newPath = path.join(testDirPath, `testFileName${count}${path.extname(file)}`);
        
        fs.renameSync(oldPath, newPath);
    }
})



