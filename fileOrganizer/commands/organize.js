const fs = require("fs");//fs module
const path = require("path");//path module
let types = {
    media:["mp4","mkv","mp3"],
    archives:['zip','7z','rar','tar','gz','ar','iso',"xz"],
    documents:['docx','doc','pdf','xlsx','xls','odt','ods','odp','odg','odf','txt','ps','tex'],
    app:['exe','dmg','pkg',"deb"],
    images : ['png','jpg','jpeg']

}

function organize(srcPath){
    if(srcPath == undefined)
    {
     //The process.cwd() method returns the current working directory of the Node.
     //js process.
     //console.log(srcPath);//undefined
     srcPath = process.cwd();
     //console.log("source path is ",srcPath);
    }
    
    console.log(srcPath);
    let organizedFiles = path.join(srcPath,"organized_files");
    console.log("organized files folder path is ",organizedFiles);
    if(fs.existsSync(organizedFiles) == false)
    {
        fs.mkdirSync(organizedFiles);
    }
    else
    {
        console.log('folder already exists');
    }

  //3. scan the entire srcPath(downloads folder in this case)
  
  //reads the contents of the directory -> basicallyy reads the names of files present in directory
  let allFiles = fs.readdirSync(srcPath);
  console.log(allFiles);

  //4. traverse  over all the files and classify them on the basis of their extension (.pdf , .mp3)
  for(let i=0;i < allFiles.length;i++)
  {
       // let ext = allFiles[i].split(".")[1]; // output : zip exe txt undefined  png mp3 
      // let ext =path.extname(allFiles[i]); // output :.zip .exe .txt .png .mp3 . extname :Return the extension of the path, from the last '.' to end of string in the last portion of the path. 
      // console.log(ext);
      let fullPathOfFile = path.join(srcPath,allFiles[i]);
      //console.log(fullPathOfFile);
      //1. check if it is a file or Folder ,
      //lstatsync gives the information regarding the link provided ,
      let isFile = fs.lstatSync(fullPathOfFile).isFile(); //true-> file hai to or false-> agar folder h
      console.log(allFiles[i]+" is "+isFile);
      if(isFile){
        //1.1 get ext name
        let ext = path.extname(allFiles[i]).split(".")[1];
        //console.log(ext);
        //1.2 get folder name from extension
        let folderName = getFolderName(ext); //archives
        console.log(folderName);
        //1.3 copy from src folder (srcPath) and paste in dest folder (folder_name e.g. document , media etc)
                      //copy    kya copy kro      paste 
        copyFileToDest(srcPath , fullPathOfFile , folderName);

      }
  }  

}

function getFolderName(ext)
{
   //magic
   for(let key in types)
   {
     //console.log(key);
     for(let i=0;i< types[key].length;i++)
     {
       if(types[key][i] == ext)
       {
         return key;
       }
     }
   }
  return "miscellaneuos" 
}

function copyFileToDest(srcPath , fullPathOfFile , folderName)
{
  //magic
  // 1.  folderName ka path banana hai
  let destFolderPath = path.join(srcPath, "organized_files", folderName); // ...../downloads/organized_files/archives
  //console.log(des);
  //2 check folder if exists , if it does not , then make folder
  if(!fs.existsSync(destFolderPath))
  {
    fs.mkdirSync(destFolderPath)
  }

  // 3. copy file from src folder to dest folder

  // Returns the last portion of a path
  let fileName = path.basename(fullPathOfFile);//abc.zip
  let detsFileName = path.join(destFolderPath , fileName);
                  // src            dest
  fs.copyFileSync(fullPathOfFile , detsFileName)
}

// let Path="G://pep coding web dev//Node//fileOrganizer//downloads";
// organize(Path);

module.exports = {
  org:organize ,
}
