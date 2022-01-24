//VEIKIA NARSYKLEJE  PORT:5500

/*
Sukurkite penkių puslapių navigaciją su nuorodomis. Nuorodos būtų tokios:
Įmonės istorija, Atsiliepimai, Mes spaudoje, Valdymas, Skaidrumas. 
*/

const fs = require("fs");
const path = require("path");
const express = require('express');
const handlebars = require('express-handlebars');
const app = express();

/*
////////////////// Sukuriama nauja direktorija ir 6 failai joje  //////////////////

const dirArr = ['templates'];
let fileArr = ['atsiliepimai.hbs', 'istorija.hbs', 'skaidrumas.hbs', 'spauda.hbs', 'valdymas.hbs', 'index.hbs'];

for (let i = 0; i < dirArr.length; i++){
    fs.stat(path.join(__dirname, "/templates"), {}, (error, stats) => {
        if (stats == undefined) {
          fs.mkdir(path.join(__dirname, "/templates"), {}, (error) => {
            if (error) throw error;
            console.log("direktorija sekmingai sukurta");
          });
        }
      });

      for (let i = 0; i < fileArr.length; i++){
        fs.writeFile(path.join(__dirname, "/templates", fileArr[i]), "Test2", (err2) => {
           if (err2) throw err2;
           console.log("File created");
 });

         fs.readFile(
           path.join(__dirname, "/templates", fileArr[i]), "utf8", (error, data) => {
           if (error) throw error;
           console.log(data);
    }
   )
  }
};



////////////////// Sukuriama nauja direktorija ir failas joje //////////////////

const dirArr1 = ['layouts'];
let fileArr1 = ['layout.hbs'];

for (let i = 0; i < dirArr1.length; i++){
    fs.stat(path.join('C:/Users/nerma/Desktop/Visual Studio Code/NodeJS paskaitos/paskaitos/2022-01-21/namu-darbas/templates', "/layouts"), {}, (error, stats) => {
        if (stats == undefined) {
          fs.mkdir(path.join('C:/Users/nerma/Desktop/Visual Studio Code/NodeJS paskaitos/paskaitos/2022-01-21/namu-darbas/templates', "/layouts"), {}, (error) => {
            if (error) throw error;
            console.log("direktorija sekmingai sukurta");
          });
        }
      });

      for (let i = 0; i < fileArr1.length; i++){
        fs.writeFile(path.join('C:/Users/nerma/Desktop/Visual Studio Code/NodeJS paskaitos/paskaitos/2022-01-21/namu-darbas/templates', "/layouts", fileArr1[i]), "Test2", (err2) => {
           if (err2) throw err2;
           console.log("File created");
 });

         fs.readFile(
           path.join('C:/Users/nerma/Desktop/Visual Studio Code/NodeJS paskaitos/paskaitos/2022-01-21/namu-darbas/templates', "/layouts", fileArr1[i]), "utf8", (error, data) => {
           if (error) throw error;
           console.log(data);
    }
   )
  }
};

*/
///////////

app.use(express.urlencoded({
    extended: false
  })
);


app.set('views', __dirname + '/templates');


app.engine('hbs', handlebars.engine({
    extname: 'hbs',     
    layoutsDir: __dirname + '/templates/layouts',
    defaultLayout: 'layout'
}));


app.set('view engine', 'hbs');


app.get('/', (req, res) => {
    res.render('index');  
 });
 
 let routeArr = ['atsiliepimai.hbs', 'istorija.hbs', 'skaidrumas.hbs', 'spauda.hbs', 'valdymas.hbs', 'index.hbs'];

 routeArr.map((el) => 
 app.get(`/${el.replace('.hbs', '')}`, (req, res) => {
   //let turinys= 'tai yra perduodamas turinys ' + Math.floor(Math.random() * 100);
   let masyvas = []; //['Jonas', 'Petrauskas', 'Petras', 'Jonauskas'];
   let objektas = {
     vardas:'Jonas',
     pavarde: 'Petrauskas'
   }

   res.render(el.replace('.hbs', ''), {masyvas, objektas});   /*jei noretusi pervadinti perduodama kintamaji 'turinys', 
                                                      tai naudoti sintakse: ' {pervadintas: ankstesnis}', 
                                                      o layout faile reikia ideti kintamaji '{pervadintas}'*/
 }));
 
 console.log(routeArr);
 console.log(routeArr.map(el => 
 el.replace('.hbs', '')));


app.get('/forma', (req, res) => {
  res.render('forma');
});

app.post('/forma', (req, res) => {
  console.log(req.body.laukelis);
  res.render('forma');
});
 
 app.listen(5500);


 
