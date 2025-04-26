const fs = require('fs');
const path = require('path');
const { program } = require('commander');

let dirPath;

program
    .version('0.0.1')
    .description('simple bulk renamer')


program
    .command('path <dirpath>')
    .action((dirpath) => {
        if (dirpath) {
            dirPath = dirpath;
        }
});

program.parse(process.argv);


const files = fs.readdirSync(dirPath);

let count = 0;

files.forEach(file => {
    if (path.extname(file)) {
        count++;
        const oldPath = path.join(dirPath, file);
        const newPath = path.join(dirPath, `testFile${count}${path.extname(file)}`);
        
        fs.renameSync(oldPath, newPath);
    }
})



