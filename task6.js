//Create a variable student and set ‘name’, ‘surname’ and ‘rate’ in json format
let name = require('randomstring');
let surname = require('randomstring');
let randomEmail = require('random-email');
let student = {
    "name": name.generate(5, 'alphabetic').toUpperCase(),
    "surname": surname.generate(7, 'alphabetic').toUpperCase(),
    "rate": Math.floor((Math.random() * 100))
};

//Use JSON.stringify() method to make a JSON string and write it into file (not existed)
let string = JSON.stringify(student);
let fs = require('mz/fs');
fs.appendFile('./student.txt', string + "\r\n", 
    function (err) {
        if (err) throw err;
        console.log('Saved!');
    });


//Read this string from file and convert to object   //fs.readFile('student.txt','utf8').then(contents => console.log(contents)).catch(err => console.error(err));

fs.readFile('./student.txt', 'utf8',function (err, data) {
    if (err) throw err;
    content = data;
    processFile();
});

//Make some change to object and append is as new line to existed file
function processFile() {
    content = JSON.parse(content);
    content.age = Math.floor((Math.random() * 100));
    content.email = randomEmail();
    content = JSON.stringify(content);
    fs.appendFile('./student.txt', content + "\r\n");
    console.log ('File updated!');
}

