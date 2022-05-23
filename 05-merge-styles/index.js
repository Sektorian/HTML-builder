//Импорт всех требуемых модулей
const fs = require('fs');
const path = require('path');

//Чтение содержимого папки styles

const pathToFile = path.join(__dirname, 'styles');
const destFile = path.join(__dirname, 'project-dist', 'bundle.css');

const output = fs.createWriteStream(destFile);



fs.readdir(pathToFile, {withFileTypes: true}, (err, data) => {
    if(err) {console.log('Возникла ошибка:\n', error.message)}
    
    data.forEach(file => {
        if (file.isFile()) {
            const pathToCurFile = path.join(pathToFile, file.name);
            
            fs.stat(pathToCurFile, (err, stats) => {
                if(err) {console.log('Возникла ошибка:\n', error.message)}
                const fileExt = path.extname(path.join(pathToFile, file.name));

                if(fileExt.slice(1) === 'css') {
                    const input = fs.createReadStream(pathToCurFile, 'utf-8');
                    input.on('data', chunk => data += chunk);
                    input.on('end', () => output.write(data));
                    input.on('error', error => console.log('Возникла ошибка:\n', error.message));
                }
            });
        }
    })
});








/*
const file = path.join(__dirname, 'text.txt');
const input = fs.createReadStream(file, 'utf-8');
let data = '';
input.on('data', chunk => data += chunk);
input.on('end', () => console.log(data));
input.on('error', error => console.log('Возникла ошибка:\n', error.message));

*/


//Проверка является ли объект файлом и имеет ли файл нужное расширение
//Чтение файла стилей
//Запись прочитанных данных в массив
//Запись массива стилей в файл bundle.css