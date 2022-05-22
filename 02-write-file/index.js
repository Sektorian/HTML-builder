const {stdin, stdout} = process;
const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, 'text.txt');
const output = fs.createWriteStream(file);
let text = '';

fs.writeFile(
    file, //path.join(__dirname, 'text.txt')
    '',
    (err) => {
        if (err) {console.log('Возникла ошибка:\n', error.message)}
        console.log('Привет! Клацай по клаве (exit или Ctrl+C - завершение процесса):');
    }
);

stdin.on('data', data => {
    const isExit = data.toString();
        
    if (isExit.slice(0,4) === 'exit') {
        process.exit();
    } else {
        output.write(data);
    }
});

process.on('SIGINT', () => {
    process.exit();
});

process.on('exit', () => {
    console.log('Спасибо! Ваши данные переданы куда надо ))');
});