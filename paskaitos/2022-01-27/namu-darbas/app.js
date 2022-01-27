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
const target = path.join(__dirname, "database", "adform.json");


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



let routeArr = ["atsiliepimai.hbs", "login.hbs", "index.hbs"];

routeArr.map((el) =>
  app.get(`/${el.replace(".hbs", "")}`, (req, res) => {
    let readers = "Tinklapio sveciai: " + Math.floor(Math.random() * 100);
    let masyvas = []; //['Jonas', 'Petrauskas', 'Petras', 'Jonauskas'];
    let objektas = {
      vardas: "Jonas",
      pavarde: "Petrauskas",
    };

    res.render(el.replace(".hbs", ""), {masyvas, objektas, readers}); /*jei noretusi pervadinti perduodama kintamaji 'turinys', 
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
  /*let category = false;
  
  if(req.body.category == 1){
    category = true;
  }
  
  if(req.body.category == 2){
    category = true;
  }
  
  if(req.body.category == 3){
    category = true;
  }*/
    let image = "/uploads/" + req.file.filename;
    req.body.image = image;
    
    let data = JSON.stringify(req.body);
    console.log(data);
    
  //res.render("adform", { image, info: req.body, category });
  res.redirect('/adform');
});



/*
 Skirtas kelioms foto ikelti- array
(kai turim daugiau nei viena failo input su tuo paciu pavadinimu) 
 */
/*
app.post('/adformsubmit', upload.array('failas'), (req, res) => {
  //kelias iki nuotraukos (ivardijam savo img su let variable):
  //req.files
  let image = "/uploads/" + req.file.filename;
   
      
    res.render('submited', {image, data: req.body});
});
*/

//Duomenu konvertavimas i JSON stringa
app.post('/simplesubmit', (req, res) => {
  let data = JSON.stringify(req.body);
  console.log(data);  
  res.redirect('/simple');
});

app.get('/simple', (req, res) => {
  res.render('simple');
})


app.get('/', (req, res) => {
  fs.readFile(target, 'UTF-8', (error, data) => {
      //if (error) throw error;
      let obj = JSON.parse(data);
      console.log(data);  //gaunam JSON stringa, kuri reikia konvertuoti i JS objekta
      console.log(obj);   //konsoleje matom JS objekta
    }
  );

  res.render('skelbimai');
});


//DUOMENU KONVERTAVIMAS

//skelbimo formos adresasa GET metodu
app.get('/adformsubmit', (req, res) => {
  res.render('adform');
})


//skelbimo formos adresas POST metodu
app.post("/adformsubmit-sub", upload.single("photo"), (req, res) => {
  let photography = '/uploads/' + req.file.filename;
  req.body.photo = photography;
  let data_JSON = JSON.stringify(req.body);  //konvertuojam i JSON stringa
  console.log(data_JSON);
  //console.log(target);
    
  //duomenu irasymas naudojantis filesystem
  fs.writeFile(target, data_JSON, (err) => {
    if(err) throw err;
    console.log('JSON file succesfully created');
  });
  res.redirect('/adform');
});


//CRUD -create, read, update, delete


app.listen(5500);
