const fs = require("fs");
const path = require("path"); //kadangi dirbant su FS reikes nurodyti kelia, kur issaugoti naujai sukurta faila

//make directory - sukuriama direktorija - saukti tik vienakart, nes antrakart ismes klaida.
//Tam, kad nemestu klaidos, reikia susikurti if salyga, kad patikrintu ar toks folderis yra
fs.stat(path.join(__dirname, "/testineDirektorija"), {}, (error, stats) => {
  //console.log(stats);
  if (stats != undefined) {
    console.log("Direktorija egzistuoja");
  }
});

//cia salyga tikrina ar toks folderis yra, jei ne- ji sukuria
fs.stat(path.join(__dirname, "/testineDirektorija"), {}, (error, stats) => {
  if (stats == undefined) {
    fs.mkdir(path.join(__dirname, "/testineDirektorija"), {}, (error) => {
      if (error) throw error;
      console.log("direktorija sekmingai sukurta");
    });
  }
});

//write file - sukuriamas failas, jo turini galima keisti irasant nauja teksta vietoj zodzio 'HELLO'
fs.writeFile(
  path.join(__dirname, "/testineDirektorija", "test.txt"), "HELLO", (error) => {
    if (error) throw error;
    console.log("failas sekmingai sukurtas");
  }
);

//failo skaitymas
fs.readFile(
  path.join(__dirname, "/testineDirektorija", "test.html"), "utf8", (error, data) => {
    if (error) throw error;
    console.log(data);
  }
);

//pervadinti faila kitu pavadinimu
fs.rename(
  path.join(__dirname, "/testineDirektorija", "test.html"), //buves kelias iki failo, senasis failo pavad.
  path.join(__dirname, "/testineDirektorija", "pervadintasFailas.html"), // kelias iki failo, naujas pavadinimas
  (error) => {
    if (error) throw error;
    console.log("failas sekmingai pervadintas");
  }
);
