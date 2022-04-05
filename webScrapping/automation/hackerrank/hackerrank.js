const puppeteer = require("puppeteer");

let browserOPenPromise = puppeteer.launch(
    {
        headless:false,//it is false so that we can see the chromium browser . if it is true then we can't see chromium
        defaultViewport:null,
        args:["--start-maximized"],
        // executablePath:"/path/to/Chrome", //this is not working
    }
);

browserOPenPromise.then(function (browser){
  console.log("browser open");

});

