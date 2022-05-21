const fs = require('fs');
const path = require('path');
const file = path.join(__dirname, 'text.txt');
const input = fs.createReadStream(file, 'utf-8');
let data = '';
input.on('data', chunk => data += chunk);
input.on('end', () => console.log(data));
input.on('error', error => console.log('Возникла ошибка:\n', error.message));