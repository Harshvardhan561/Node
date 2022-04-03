let url="https://www.espncricinfo.com//series//ipl-2020-21-1210595";

const request = require("request");
const cheerio = require("cheerio");
const allMatchObj = require("./allMatch.js");

request(url , cb);

function cb(err , res , body)
{
  if(err)
  {
      console.log("error", err);
  }
  else
  {
    handleHTML(body);
  }
}


function handleHTML(html)
{
    let selecTool = cheerio.load(html); // loads the hhtml of that webpage
    let anchorElem = selecTool('a[data-hover="View All Results"]');
    //console.log(anchorElem);
    // attr methods -> Methods for getting all attributes  and their values
    let relativeLink = anchorElem.attr("href");
    let fullLink = "https://www.espncricinfo.com" + relativeLink;
    // console.log(fullLink);
    allMatchObj.getAllMatch(fullLink);
    
}

//currpage  link = https://www.espncricinfo.com/series/ipl-2020-21-1210595

//nextPge link = https://www.espncricinfo.com/series/ipl-2020-21-1210595/match-results