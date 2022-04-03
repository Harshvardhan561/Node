const request = require("request");
const cheerio = require("cheerio");

function getINnfoFromScorecard(url)
{
    console.log("from scorecards.js ",url);
    request(url , cb);
}

function cb(err , res , body)
{
   if(err)
   {
    console.log(err);
   }
   else
   {
     getMatchDetails(body);
   }

//getMatchDetails(body);
// console.log(body);
}

function getMatchDetails(html)
{
    // selecTool contains html of ith scorecard
    let selecTool = cheerio.load(html);
    //get venue
    //get date
    let desc = selecTool(".match-header-info.match-info-MATCH");
    //console.log(desc.text());
    let descArr = desc.text().split(",");
    //MATCH (N) , Abu Dhabi , Oct 25 2020 , Indian Premier League
    //console.log(descArr);
    let dateOfMatch = descArr[2];
    let venueOfMatch = descArr[1];
    console.log(dateOfMatch);
    console.log(venueOfMatch);
    // 3. get result
    let matchResEle = selecTool(
        ".match-info.match-info-MATCH.match-info-MATCH-half-width>.status-text"
    );
    console.log(matchResEle.text());
    // 4. get team names
    let teamNameArr = selecTool(".name-detail>.name-link");

    let team1 = selecTool(teamNameArr[0]).text();
    let team2 = selecTool(teamNameArr[1]).text();

    console.log(team1);
    console.log(team2);
    //5. get innings

    let allBatsmenTable = selecTool(".table.batsman tbody");
    console.log("number of batsmen tables are -> ",allBatsmenTable.length);
    let htmlString="";
    let count = 0;
    for (let i=0;  i<allBatsmenTable.length ;i++)
    {
        htmlString = htmlString + selecTool(allBatsmenTable[i]).html();
        // Get the descendants (table rows ) of each element (table)
        let allRows = selecTool(allBatsmenTable[i]).find("tr");// -> data of batsmen + empty rows

        for (let i=0;i<allRows.length;i++)
        {
          //Check to see if any of the matched elemnts have the given className
          let row = selecTool(allRows[i]);
          let firstColmnOfRow = row.find("td")[0];
          if(selecTool(firstColmnOfRow).hasClass("batsman-cell")){
              //will be getting valid data
            //   count++;
            //   console.log("inside "+count);
              //name | runs | balls | 4's | 6's | sr
          }  
        } 
    }
}


//visit every scorecard and get info
module.exports = {
    gifs:getINnfoFromScorecard
}
