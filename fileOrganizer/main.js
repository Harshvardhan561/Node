let helpFunc = require("./commands/help");
let orgFun = require("./commands/organize");
let treeFunc = require("./commands/tree");
// console.log(helpFunc.ghoda());
let inputArr = process.argv.slice(2);
let command = inputArr[0];
let path = inputArr[1];
switch(command)
{//organizee
  case "tree":
      //call tree function
      // console.log("tree function called and executed succesfully on path "+path);
      treeFunc.tree(path);
      break;
  
  case "organize":
      // console.log("organize function called and executed succesfully on path "+path);
      orgFun.org(path);
      //call organize function
      break;

  case "help":
    console.log("help function called and executed succesfully on path "+path);
      
      //call help function
      helpFunc.help();
      break;

   default:
       console.log("command not recongized");
       break;
       
}