const fs = require("fs");
const promises = require("fs/promises");
const path = require("path");

console.log(promises);

const ext = ["js", "txt", "html", "css"];
const direktorijos = ["js", "text", "html", "style"];
const sukurtosDir = [];
direktorijos.forEach((dir) => {
  fs.mkdir(path.join(__dirname, `/${dir}`), {}, (err) => {
    if (err) throw err;
    console.log("Direktorija sekmingai sukurta");
  });

  sukurtosDir.push(path.join(__dirname, `/${dir}`));

  sukurtosDir.forEach((el, i) => {
    fs.writeFile(
      path.join(el, `test.${ext[i]}`),
      "<h1>Hello World<h1>",
      (err) => {
        if (err) throw err;
      }
    );
  });
});
