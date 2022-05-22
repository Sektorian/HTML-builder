const fs = require('fs');
const path = require('path');

const pathToFile = path.join(__dirname, 'secret-folder');

fs.readdir(pathToFile, {withFileTypes: true}, (err, data) => {
    if(err) {console.log('Возникла ошибка:\n', error.message)}
    data.forEach(file => {
        if (file.isFile()) {
            const pathToCurFile = path.join(pathToFile, file.name);
            fs.stat(pathToCurFile, (err, stats) => {
                if(err) {console.log('Возникла ошибка:\n', error.message)}
                const fileSize = stats.size / 1024;
                const fileExt = path.extname(path.join(pathToFile, file.name));
                const fileName = path.parse(path.join(pathToFile, file.name)).name;
                console.log(`${fileName} - ${fileExt.slice(1)} - ${fileSize}kb`);
            })
        }
    })
});