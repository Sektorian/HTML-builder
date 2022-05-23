const fs = require('fs');
const path = require('path');

const pathToFile = path.join(__dirname, 'styles');
const destFile = path.join(__dirname, 'project-dist', 'bundle.css');
const output = fs.createWriteStream(destFile);

fs.readdir(pathToFile, {withFileTypes: true}, (err, data) => {
    if(err) {console.log('Возникла ошибка:\n', error.message)}
    
    data.forEach(fileCSS => {
        if (fileCSS.isFile()) {
            const pathToCurFile = path.join(pathToFile, fileCSS.name);
            const input = fs.createReadStream(pathToCurFile, 'utf-8');

            fs.stat(pathToCurFile, (err, stats) => {
                if(err) {console.log('Возникла ошибка:\n', error.message)}
                const fileExt = path.extname(path.join(pathToFile, fileCSS.name));

                if(fileExt.slice(1) === 'css') {
                    let text = '';
                    input.on('data', chunk => text += chunk);
                    input.on('end', () => output.write(text));
                    input.on('error', error => console.log('Возникла ошибка:\n', error.message));
                }
            });
        }
    })
});