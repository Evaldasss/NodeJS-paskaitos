//VEIKIA NARSYKLEJE  PORT:5500

const fs = require("fs");
const path = require("path");
const express = require("express");
const handlebars = require("express-handlebars");
const multer = require("multer");
const app = express();
const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, "./uploads");
  },
  filename: function (req, file, callback) {
    //console.log(file);
    callback(null, Date.now() + file.originalname);
  },
});
const upload = multer({ storage: storage });

app.use(
  express.urlencoded({
    extended: false,
  })
);

//Statiniu failu padavimo direktorija
app.use("/public", express.static("public"));
app.use("/uploads", express.static("uploads"));


app.set("views", __dirname + "/templates");


app.engine(
  "hbs",
  handlebars.engine({
    extname: "hbs",
    layoutsDir: __dirname + "/templates/layouts",
    defaultLayout: "layout",
  })
);


app.set("view engine", "hbs");


app.get("/", (req, res) => {
  res.render("index");
});


let routeArr = ["atsiliepimai.hbs", "login.hbs", "index.hbs"];

routeArr.map((el) =>
  app.get(`/${el.replace(".hbs", "")}`, (req, res) => {
    let readers = "Tinklapio sveciai: " + Math.floor(Math.random() * 100);
    let masyvas = []; //['Jonas', 'Petrauskas', 'Petras', 'Jonauskas'];
    let objektas = {
      vardas: "Jonas",
      pavarde: "Petrauskas",
    };

    res.render(el.replace(".hbs", ""), {
      masyvas,
      objektas,
      readers,
    }); /*jei noretusi pervadinti perduodama kintamaji 'turinys', 
                                                      tai naudoti sintakse: ' {pervadintas: ankstesnis}', 
                                                      o layout faile reikia ideti kintamaji '{pervadintas}'*/
  })
);

//console.log(routeArr);
//console.log(routeArr.map(el => el.replace('.hbs', '')));
routeArr.map((el) => el.replace(".hbs", ""));


app.get("/adform", (req, res) => {
  res.render("adform");
});


app.get('/adformsubmit', (req, res) => {
  res.render('adform');
})



app.post("/adformsubmit", upload.single("photo"), (req, res) => {
  //kelias iki nuotraukos (ivardijam savo img su let variable):
  let image = "/uploads/" + req.file.filename;
  let category = false;

    if(req.body.category == 1){
        category = true;
    }

    if(req.body.category == 2){
        category = true;
    }

    if(req.body.category == 3){
        category = true;
    }

  res.render("adform", { image, info: req.body, category });
});



/*
 Skirtas kelioms foto ikelti- array
(kai turim daugiau nei viena failo input su tuo paciu pavadinimu) 
 */

app.post('/adformsubmit', upload.array('failas'), (req, res) => {
  //kelias iki nuotraukos (ivardijam savo img su let variable):
  req.files
  let image = "/uploads/" + req.file.filename;
   
    console.log(req.files);   //daugiskaita, nes bus daugiau nei vienas failas
   
    res.render('submited', {image, data: req.body});
});



app.listen(5500);
