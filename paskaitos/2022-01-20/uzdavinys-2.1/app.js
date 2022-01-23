//VEIKIA NARSYKLEJE   port:5500

/*Sukurkite 2 HTML failus, juose turetu buti headeris su navigacija, o joje dvi nuorodos: "Apie mus", "Kontaktai". 
HTML failu turinys turi buti atitinkamas puslapiams. 
Nuorodu adresai: "apie-mus", "kontaktai". Pasinaudodami path ir fs moduliais 
integruokite html failus i res.send() metoda abiem auksciau isvardintiems adresams. */
const fs = require("fs");
const path = require("path");
const express = require('express');
const app = express();


//Midleware
app.get('/apie-mus', (req, res) => {
    fs.readFile(path.join(__dirname, "apie-mus.html"), "utf8", (error, data) => {
          if (error) throw error;
          res.send(data);
          //console.log(data);
     });
});

app.get('/kontaktai', (req, res) => {
    fs.readFile(path.join(__dirname, "kontaktai.html"), "utf8", (error, data) => {
          if (error) throw error;
          res.send(data);
          //console.log(data);
     });
});

app.listen(5500);


/*
fs.stat(path.join(__dirname, "/uzdavinys-2"), {}, (error, stats) => {
  if (stats == undefined) {
    fs.mkdir(path.join(__dirname, "/uzdavinys-2"), {}, (error) => {
      if (error) throw error;
      console.log("direktorija sekmingai sukurta");
    });
  }
});


fs.writeFile(path.join(__dirname, "/uzdavinys-2", "file2.html"), "Test2", (err2) => {
    if (err2) throw err2;
    console.log("File created");
 });

 fs.readFile(
    path.join(__dirname, "/testineDirektorija", "test.html"), "utf8", (error, data) => {
      if (error) throw error;
      console.log(data);
    }
  );

*/