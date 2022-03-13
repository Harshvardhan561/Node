//fs -> file system module  -> it helps us to make files/folders append data in them , delete data , read data 
const fs = require("fs");
//console.log(fs);
//const f1 = require("./f1.txt");
//const abc = require("../js/temp");  // to access temp file in js folder
// require method , goes to the file that is needed to be required . executes that file. And if there is something that is exported we get that in variable 'abc'

// console.log(abc);
// let ans = abc.add(45,4);
// console.log(ans);


//appendilesync appends data into file, if file is not present  , it creates the file and then appends the data.

                              //file path //message to be appended  
// let res = fs.appendFileSync("f1.txt","Hello i am f2 file");
// fs.appendFileSync("f1.txt","\nYou guys are smart");
// console.log(res);
//let data = fs.readFileSync("f1.txt");
//data recieved is an object type ,data is in buffer format. for it to be readable , we convert it from buffer to string .
//console.log(data  + ""); //automatic type conversion se buffer , string mein covert ho gayi hai

//let data = fs.readFileSync("f1.txt","utf-8");
//console.log(data);

