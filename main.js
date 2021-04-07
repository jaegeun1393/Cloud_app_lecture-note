console.log('Hello, world!')
console.log("==PORT: ", process.env.PORT);

const fs = require('fs');
const figlet = require('figlet');

figlet("Hello CS 493!", function (err, data) {
    if (!err) {
        console.log(data);
    }
});