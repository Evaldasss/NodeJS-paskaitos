const express = require("express");
const app = express(); //== inicijuojamas metodas 'express()' ir priskiriamas kintamajam
/*
//siunciam paprasta json stringa ir ji paduodam
app.get("/", (req, res) => {   //kur kreipiames su GET metodu; '/' reiskia, kad kreipiames i domena  
  
    /////// ATVAIZDAVIMO metodai /////// (galimi ir GET ir POST metoduose)
  //res.send("Hello World");  // kai norim paduoti paprasta info (siunciam paprasta HTML, paprasta plain teksta ir pan.)
  //res.render("index");      // kai siunciam failus (jis isijungia kai pajungiam 'views' direktorija prie 'app.set()'; pgl direktorija susiranda failus ir nurodom tik failo pav.)
  //res.json();               // naudojam su API, persiusti duomenis json formatu; paduodam i rezultata json formatu (gausim objekta json formatu- stringu)

  /////// PERADRESAVIMO metodas ///////
  //res.redirect();

  //cia pajungiam 'index.html' faila is 'views' direktorijos
  //res.sendFile(__dirname + '/views/index.html');   // kai norim persiusti duomenis pimtus is failo; kad rastu faila, reikia nurodyt pilna kelia iki failo, kur tas failas randasi
  
  res.json({ message: "test", data: "test2" });  // kadangi paduodamas vienas argumentas- objektas, tai jame key: value gali buti kokiais nori pavadinimais. pgl key imsim info is to objekto.
});
*/

//sitas routeris tures priimineti paduodama middleware
/*
app.get('/:id/:kitas-id', (req, res) => {  // galima paduoti 2 parametrus, bet tada adresu juostoje ir reik nurodyti 2 argumentus
    res.send('veikia');
});
*/


/*
app.get('/:id', (req, res) => {         // reiksme 'id' bus rasoma narsykles adresu juostoje po '/' ir 'id' isivardinsim kaip kintamaji ir
     console.log(re.params);            // bandysim ji pasiimt is req.params. reiksme, irasant identifikatoriau pavadinima, siuo atveju 'id'
     console.log(re.params.id);     //konsoleje matome kaip objekta ({ id: '1452' }), kas buvo ivesta narsykles adresu juostoje po domeno pavadinimo ( localhost:3000/ 1452)

     let name = req.params.id;

    if(name == 'amelija' &&  (name.slice(-1) == 'a' || 'e')) {
    res.json({ name: 'Amelija', gender: ' yra moteriskas vardas' });
    } else {
    res.send('Tokio vardo nera');
    }
});
*/


/////////////////////////////////////////////////////////////////////////////

// UZDUOTIS
// Ivedus varda i adresu juosta, gauti koks tai  vardas- vyriskas ar moteriskas.
// Atsakyma atvaizduoti narsykleje HTML faile
// kas vyksta cia galima stebeti adresu: 'localhost:3000/vardas'

app.get("/:vardas", (req, res) => {
  let name = req.params.vardas;
  //console.log("vardas", req.params.vardas);

  let objektas = { rezultatas: name }; //toki objekto formata paduoti i 'response.json()' metoda
  //console.log("objektas", objektas);

  if (name === "asta" && (name.slice(-1) === "a" || "e")) {
    objektas.rezultatas = "moteriskas vardas";
  } else if (name === "jonas" && name.slice(-1) === "s") {
    objektas.rezultatas = "vyriskas vardas";
  } else {
    objektas.rezultatas = "tokio vardo lyciai priskirti neimanoma";
  }

  res.json(objektas); //kad json metodas suprastu ka jam paduodam, objektas turi buti json formato- stringas
});

app.listen(3000);
