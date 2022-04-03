//cheerio
// Cheerio parses HTML and it traverses the html so html so that data can be manipulated according o user's needs
const cheerio = require("cheerio");

let html =`<ul id="fruits">
<li class="apple">Apple</li>
<li class="orange">Orange</li>
<li class="pear">Pear</li>
</ul>
`;

let selecTool = cheerio.load(html);

let fruitNameArr = selecTool('#fruits');
// console.log(fruitName);// prints the object
// console.log(typeof fruitName); // object 
//console.log(fruitName.text());// Pear , text() method gives the text 
// console.log(fruitNameArr); // object printed
// console.log(fruitNameArr.text());// text
// console.log(fruitNameArr.length); // length