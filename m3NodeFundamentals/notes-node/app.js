console.log("starting app.js");

//loading the modules
const fs = require('fs');
const os = require('os');

//requiring ourown modules
const notes = require('./notes.js');

//option 1
// fs.appendFile('greetings2.txt', 'Hello World' , function(err){
//   if(err){
//     console.log('unable to write to file');
//   }
// });

var user = os.userInfo();
//console.log(user)

var msg = ` Hello ${user.username} !  You are ${notes.age}. `
//option 2
//fs.appendFileSync('greetings1.txt', msg);
console.log(msg);

var res = notes.addNote();
console.log(`The returned msg is ${res}`);

var sum = notes.addNumbers(2,3);
console.log(`The returned sum is ${sum}`);
