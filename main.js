console.log('Hello, world!')
console.log("==PORT: ", process.env.PORT);

const fs = require('fs');
const figlet = require('figlet');

figlet("Hello CS 493!", function (err, data) {
    if (!err) {
        console.log(data);
    }
});

//In different way (function)

function asciiART(err, data) {
    if(!err) {
        console.log(data);
    }
}

figlet("Callback", asciiART);

const circum = require('./circle'); //bring another js file to the main js
//require will bring the result

console.log("== circum with radius(5: ", circle.circum(5)); //circle is object and circum is function inside the object