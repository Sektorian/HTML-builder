const fs = require('fs');
const path = require('path');

const pathSrc = path.join(__dirname, 'files');
const pathDest = path.join(__dirname, 'files-copy');

    fs.mkdir(pathDest, {recursive: true}, (err) => {
        if(err) {console.log('Возникла ошибка:\n', error.message)}
    });

    fs.readdir(pathDest, (err, data) => {
        if(err) {console.log('Возникла ошибка:\n', error.message)}
        
        data.forEach(file => {

            fs.unlink(path.join(pathDest, file), (err) => {
                if(err) {console.log('Возникла ошибка:\n', error.message)}
            });
        })
    });

    fs.readdir(pathSrc, (err, data) => {
        if(err) {console.log('Возникла ошибка:\n', error.message)}
        
        data.forEach(file => {

            fs.copyFile(path.join(pathSrc, file), path.join(pathDest, file), (err) => {
                if(err) {console.log('Возникла ошибка:\n', error.message)}
            });

        })
    });
    
