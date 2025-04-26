const fs = require('fs');
const path = require('path');
const { program } = require('commander');

let testDirPath;

program
    .version('0.0.1')
    .description('simple bulk renamer')


program
    .command('path <dirpath>')
    .option('-e, --extensions <ext...>', 'filter files by comma seperated extensions (.txt, .md etc)')
    .option('-n, --name <newFileName>', 'provide new name for files (e.g. newItem1, newItem2)')
    .action((dirpath, options) => {
        if (dirpath) {
            testDirPath = dirpath;
        }
    });

program.parse(process.argv);


const files = fs.readdirSync(dirPath);

let count = 0;

files.forEach(file => {
    if (extTypes.includes(path.extname(file))) {
        count++;
        const oldPath = path.join(testDirPath, file);
        const newPath = path.join(testDirPath, `testFileName${count}${path.extname(file)}`);
        
        fs.renameSync(oldPath, newPath);
    }
})



