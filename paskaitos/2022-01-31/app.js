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
//const helpers = require('./helpers/handlebars');  //kreipiamasi i folderi ir i jame esanti faila
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
    helpers: {
      if_eq: function (a, b, opts) {
        if (a == b) return opts.fn(this);
        else return opts.inverse(this);
      },
  },
}));


app.set("view engine", "hbs");


app.get("/adform", (req, res) => {
  res.render("adform");
});



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


app.get('/', (req, res) => {
  fs.readFile(target, 'UTF-8', (error, data) => {
      let obj = JSON.parse(data);
      //console.log(data);  //gaunam JSON stringa, kuri reikia konvertuoti i JS objekta
      //console.log(obj);   //konsoleje matom JS objekta
      //console.log(obj.photo);   //konsoleje matom JS objekta
      //res.json(obj);
      //res.send(obj);
      res.render('skelbimai', {data: obj});  //keiciam pavadinima 'obj' i nauja pavadinima 'data'
    });
 });



//DUOMENU KONVERTAVIMAS

//skelbimo formos adresas GET metodu
app.get('/adformsubmit', (req, res) => {
  res.render('adform');
})



//skelbimo formos submit adresas POST metodu
app.post("/adformsubmit-sub", upload.single("photo"), (req, res) => {
  /* po zodzio '/uploads/' nurodomas dar vienas pasviras bruksnys, 
  kad kreiptusi i 'uploads' folderi, nes kitu atveju kreipsis i 'uploads' faila */
  let photo = '/uploads/' + req.file.filename;  
  req.body.photo = photo;
  //console.log(data_JSON);
  //console.log(target);
  //let test = req.body;  //visas musu formos duomenu turinys
  let test = [];  
  
  fs.readFile(target,  (err, eilutes) => {
    if(err) throw err;
    //console.log(eilutes);  //tikrinam ar perskaito paduodama informacija is formos
    //console.log(test);  
    let submit = req.body;
    let obj = JSON.parse(eilutes);
    //console.log(obj);
    test.push(obj);
    test.push(submit);
        
    console.log('test', test);
    
    let data_JSON = JSON.stringify(test);  //konvertuojam i JSON stringa

    //duomenu irasymas naudojantis filesystem
      fs.writeFile(target, data_JSON, (err) => {
        if(err) throw err;
        //console.log('JSON file succesfully created');
      });
    })
   res.redirect('/');
});



//////////////////////////////////////////////////////////////////
//Duomenu konvertavimas i JSON stringa
app.post('/simplesubmit', (req, res) => {
  console.log(req.body);  
  let data = JSON.stringify(req.body);
  console.log(data);  
  res.redirect('/simple');
});


app.get('/simple', (req, res) => {
  res.render('simple');
});


//CRUD -create, read, update, delete



app.listen(5500);
