//VEIKIA NARSYKLEJE   port:5500

/*Sukurkite 2 HTML failus, juose turetu buti headeris su navigacija, o joje dvi nuorodos: "Apie mus", "Kontaktai". 
HTML failu turinys turi buti atitinkamas puslapiams. 
Nuorodu adresai: "apie-mus", "kontaktai". Pasinaudodami path ir fs moduliais 
integruokite html failus i res.send() metoda abiem auksciau isvardintiems adresams. */
const fs        = require('fs');
const path      = require('path');
const express   = require('express');
const app       = express();

//Midleware
app.get('/apie-mus', (req, res) => {
      res.sendFile(__dirname + '/apie-mus.html');
});

app.get('/kontaktai', (req, res) => {
      res.sendFile(__dirname + '/kontaktai.html');
});

app.listen(5500);