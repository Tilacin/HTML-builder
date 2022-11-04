
const fs = require('fs')
fs.readFile(__dirname + '/text.txt', {flag: 'r+', encoding: 'utf8'}, function (err, data) {
    if(err) {
     console.error(err);
     return;
    }
    console.log(data);
});

 