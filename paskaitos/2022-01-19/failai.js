const fs = require("fs");
const path = require("path");

const direktorijos = ["dir1", "dir2", "dir3", "dir4"];
const failai = ["file1.html", "file2.css", "file3.js", "file4.txt"];

let index = 0;
direktorijos.forEach((dir) => {
  let dirName = path.join(__dirname, dir);
  fs.mkdirSync(dirName, {}, (err) => {
    if (err) throw err;
    console.log("Directory created");
  });
  let directory = path.join(dirName, failai[index]);
  fs.writeFile(directory, "Test2", (err2) => {
    if (err2) throw err2;
    console.log("File created");
  });
  index++;
});
