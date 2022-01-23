//VEIKIA NARSYKLEJE  PORT:5500

const fs = require("fs");
const path = require("path");
const express = require('express');
const handlebars = require('express-handlebars');
const app = express();

//Prijungiamas adreso url encodinimas
app.use(express.urlencoded({
    extended: false         //argumentas: reiksme
  })
);

//Nurodoma sablonu direktorija, is kurios automatiskai bus paimami failai
app.set('views', __dirname + '/templates');

/*Sukuriamas sablonu variklis su nustatymais:
* extname (extension name) - failo gale nurodomas tipas, pvz.html
* layoutsDir - direktorija, kurioje sukurtas pagrindinis sablono failas
* defaultLayout - standartinis pagrindinis sablonas */
app.engine('hbs', handlebars.engine({
    extname: 'hbs',     
    layoutsDir: __dirname + '/templates/layouts',
    defaultLayout: 'layout'
}));

//priskiriamas auksciau nurodytas sablonu variklis
app.set('view engine', 'hbs');  //hbs- handlebars extension'as:  apie-mus.hbs, index.hbs


//titulinis puslapis, kaip sablonas, kad be jokio adreso ismestu standartini turini
app.get('/', (req, res) => {
   res.render('index');  /* kadangi jau pajungtas metodas 'engine()', kuris reikalingas, kad veiktu 'render()' metodas, 
                         'render()' kreipiasi i app.set() eilutej nurodyta 'views' direktorija '/templates', tai paleidus 'render()' metoda,
                          jis kreipsis i direktorija '/templates', isfiltruos visus failus, kuriuos turim toje direktorijoje ir joje susiras 
                         'index.hbs' faila, t.y. kas irasyta skliausteliuose.
                            Viska, kas irasyta 'index.hbs' faile, jis sudes i 'layout.hbs' faila, kur nurodytas {{body}} kintamasis 
                            ir ta galutini rezultata atvaizduos narsyklej.
                         */
});

//aprasomi router'iai
app.get('/apie-mus', (req, res) => {
    res.render('apie-mus');
});

app.get('/kontaktai', (req, res) => {
    res.render('kontaktai');
   
});

app.get('/index', (req, res) => {
    res.render('index');
   
});

app.listen(3000);


/*
sukurti ir sustylintint penkiu puslapiu nav su nuorodomis. Nuorodos turi buti: 
imones istorija, 
atsiliepimai, 
mes spaudoje, 
valdymas, 
skaidrumas
*/
 