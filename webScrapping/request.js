const request = require("request");
request("https://www.worldometers.info/coronavirus/",cb);// cb is called after cb has done some work . this is call back

function cb(err , res , body){
    console.error("error" , err);
    //console.log(res);
    console.log(body);
}