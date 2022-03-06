//fs -> file system module
const fs = require("fs");
const f1 = require("./f1.txt");
const abc = require("../js/temp");
console.log(abc);


//appendilesync appends data into file, if file is not present  , it creates the file and then appends the data.
let res = fs.appendFileSync("f1.txt","Hello i am f2 file");
fs.appendFileSync("f1.txt","\nYou guys are smart");

//console.log(res);
//let data = fs.readFileSync("f1.txt");
// console.log(data);

let data = fs.readFileSync("f1.txt","utf-8");
console.log(data);

