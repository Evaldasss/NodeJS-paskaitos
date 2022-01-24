//VEIKIA NARSYKLEJE  PORT:5500

/*
1) Sukurkite prisijungimo formą atvaizduojamą adresu '/login', kurioje būtų du laukeliai: 
El. pašto adresas ir slaptažodis. Taip pat sukurkite 'post' užklausą,
 kurioje būtų priiama persiunčiama informacija. Sutikrinkite informaciją 
 su žemiau pateiktais duomenimis ir, priklausomai nuo rezultato, grąžinkite atsakymą į konsolę. 
 
Administratoriaus prisijungimai:
info@bit.lt
1234

2) Atvaizduoti zinute .hbs faile

*/

const fs = require("fs");
const path = require("path");
const express = require('express');
const handlebars = require('express-handlebars');
const app = express();



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
 
 let routeArr = ['atsiliepimai.hbs', 'login.hbs', 'index.hbs'];

 routeArr.map((el) => 
 app.get(`/${el.replace('.hbs', '')}`, (req, res) => {
   let readers = 'Tinklapio sveciai: ' + Math.floor(Math.random() * 100);
   let masyvas = []; //['Jonas', 'Petrauskas', 'Petras', 'Jonauskas'];
   let objektas = {
     vardas:'Jonas',
     pavarde: 'Petrauskas'
   }

   res.render(el.replace('.hbs', ''), {masyvas, objektas, readers});   /*jei noretusi pervadinti perduodama kintamaji 'turinys', 
                                                      tai naudoti sintakse: ' {pervadintas: ankstesnis}', 
                                                      o layout faile reikia ideti kintamaji '{pervadintas}'*/
 }));
 
 console.log(routeArr);
 console.log(routeArr.map(el => 
 el.replace('.hbs', '')));


app.get('/login', (req, res) => {
  res.render('login');
});

app.post('/login', (req, res) => {
   let message = '';

      if(req.body.mail === 'info@bit.lt' && req.body.passw === '1234'){
       message = 'Sveiki atvyke i savo paskyra!';
    } else {
       message = 'Neteisingi prisijungimo duomenys';
    }

    res.render('login', {message});
});

 
 app.listen(5500);


 
