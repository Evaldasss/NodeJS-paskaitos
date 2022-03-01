//const express = require('express')

import express from "express";
import cors from "cors";
import Krepsinis from "./krepsinis.js";
import * as fs from "fs";

const app = express();
const filePath = "./db/data.json";

app.use(cors());
app.use("/img", express.static("img"));

app.use(
  express.urlencoded({
    extended: false,
  })
);

app.use(express.json()); //automatinis stringo konvertavimas i objekta

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const rezultatas = new Krepsinis();
//console.log(rezultatas);

app.get("/checkscore", function (req, res) {
  res.json({ rezultatas });
});

app.post("/post-request", (req, res) => {
  let obj = {
    logo: {
      flogo: "http://localhost:3001/img/Olympiacos.png",
      slogo: "http://localhost:3001/img/Istanbul.png",
    },
  };

  console.log("body", req.body);
  let message = "";
  let reqbody = req.body;
  if (req.body.time >= "18:00" && req.body.time <= "21:30") {
    console.log("laikas tinkamas");
    res.json({ reqbody, obj, pavyko: true });
  } else {
    console.log("Netinkamas rungtyniu laikas");
    message = "Netinkamas rungtyniu laikas";

    res.json({ message, pavyko: false });
  }
});

/*
// sukuriamas duomenu saugojimo '.json' failas ir jame issaugoma reiksme is mazos formos
app.post("/save-request", (req, res) => {
  // let data = JSON.parse(req.body)
  console.log("req", req.body);
  fs.writeFile(filePath, JSON.stringify(req.body), "utf8", (err) => {
    //console.log("err", err)
    if (!err) {
      res.json("Informacija issaugota");
    } else {
      res.json("Nepavyko sukurti failo");
    }
  });
});
*/

/////////////////////////////////////////////////
/*
//sukuriamas duomenu saugojimo '.json' failas ir jame saugom visas input reiksmes is dideles formos
app.post("/save-request", (req, res) => {
  // let data = JSON.parse(req.body)
  let reqbody = req.body;
  console.log("req", req.body);
  fs.writeFile(filePath, JSON.stringify(req.body), "utf8", (err) => {
    //console.log("err", err)
    if (!err) {
      res.json({request: reqbody, message: "Informacija issaugota"});
    } else {
      res.json("Nepavyko sukurti failo");
    }
  });
});
*/

/////////////////////////////////////////////////
//skirta duomenu saugojimui spaudziant "Rodyti registruotas rungtynes" mygtuka
app.post("/save-request", (req, res) => {
  console.log(req.body);
  // let data = JSON.parse(req.body)
  let masyvas = []; //sukuriamas tuscias masyvas, i kuri bus pridedama naujai issaugoma informacija

  fs.access(filePath, (err) => {
    //tikrinama ar suskurtas duomenu saugojimo failas
    if (err) {
      //jei failo nera, ty ismetamas 'error'
      req.body.id = 0; //pradinis duomenu saugojimo 'id' tik sukurus faila butu 0
      masyvas.push(req.body); //i tuscia masyva sukelti req.body, kuri paimam is 'FETCH ('.../save-request') "body"
      fs.writeFile(filePath, JSON.stringify(masyvas), "utf8", (err) => {
        //cia sukuriamas ir irasomas failas.
        if (!err) {
          //Kadangi failas sukuriamas naujai, tai issaugomas turinys yra tas 'masyvas' paverstas i stringa
          res.json({ status: "success", message: "Informacija issaugota" });
        } else {
          res.json({ status: "failed", message: "Nepavyko sukurti failo" });
        }
      });
    } else {
      //jei failas jau sukurtas, tai ji reik perskaityti
      fs.readFile(filePath, "utf8", (err, data) => {
        //skaito faila
        if (err) {
          res.json({ status: "failed", message: "Ivyko klaida" }); //jei ivyko klaida, pvz negalejo perskaityti failo, pc beda ir tt.
          return false; //grazinti 'false', kad sustotu kodas ir toliau nebebutu vykdomas
        }
        let json = JSON.parse(data); //sukuriamas kintamasis- masyvas, kuriam priskiriami faile esantys duomenys(data), ty issifruotas i objekta .json stringas

        if (json.length === 0) {
          req.body.id = 0;
        } else {
          req.body.id = json[json.length - 1].id + 1; //identifikatoriui 'id' priskiriama reiksme: paskutini masyvo indeksa
        }

        json.push(req.body); //i ta objekta, kuri konvertavome is .json stringo, sukeliame(push) naujus gautus duomenis is FETCH "body", ty inputo info

        let info = JSON.stringify(json);

        fs.writeFile(filePath, info, "utf8", (err) => {
          //faile irasomas naujas turinys(data)- i objekta paverstas .json stringas
          if (!err) {
            res.json({ jsonResp: info, status: "success", message: "Informacija issaugoti pavyko" });
          } else {
            res.json({ status: "failed", message: "Nepavyko sukurti failo..." });
          }
        });
      });
    }
  });
});

/////////////////////////////////////////////////
//skirta mygtukui "Rodyti registruotas rungtynes". Aprasyta kaip paimti rezultata is formos
app.get("/show-matches", (req, res) => {
  //kreipiamasi nurodytu adresu
  fs.access(filePath, (err) => {
    let message = "Duomenų bazės failas nerastas";
    if (err) {
      res.json({ message, result: true });
    } else {
      fs.readFile(filePath, "utf8", (err, data) => {
        if (err) return false;

        let info = JSON.parse(data); // paimamas rezultatas is adreso, i kuri kreipiames su situo route'u
        res.json({ jsonResp: info, result: false });
      });
    }
  });
});

///////////////////////////////////////////////// 20:50

app.get('/get-match/:id', (req, res) => {
  let id = req.params.id;

  fs.readFile(filePath, 'utf8', (err, data) => {
    if(err) {
      res.json({ status: 'failed', message: 'Nepavyko perskaityti failo'})
      return false
    }

    let json = JSON.parse(data)    // visi duomenu failo duomenys- data
    let found = false               

    json.forEach((el, index) => {
      if(el.id == id) {   //jei, einamojo elemento id = persiustam id
        res.json({ status: 'success', message: 'Sėkmingai perskaityti duomenys', jsonResp: el})
        found = true   // jei surandam pagal ID reikiamus duomenis, tai reiksme pasikeicia i 'true'
      }
    })

    if(!found) {   // jei nebuvo rastas joks ID
      res.json({ status: 'failed', message: 'Nepavyko surasti tokio id'});
    }
  })

})

/////////////////////////////////////////////////
/* 
/////tikrinam ar yra failas duomenu saugojimui/////// 
app.get("/check-file", (req, res) => {
  fs.access(filePath, (err) => {
    if (err) {
      res.json({ result: "failed" });
    } else {
      res.json({ result: "success" });
    }
  });
});
*/

/////////////////////////////////////////////////
/*
app.put('/:id', (req, res) => {
  console.log(req.body);
  res.json({ resp: req.body});
})
*/

/////////////////////////////////////////////////
// duomenu istrynimas is duombazes ( 'data.json' failo)
/*
app.delete('/:id', (req, res) => {
  console.log("back", req.params.id);        //pgl 'id' esanti objekte istrinamas objektas is duombazes
  res.json({ resp: req.params.id});
})
*/

/////////////////////////////////////////////////
// duomenu istrynimas is duombazes ( 'data.json' failo)
app.delete("/:id", (req, res) => {
  //console.log("back cons", req.params.id);        //pgl 'id' esanti objekte istrinamas objektas is duombazes
  //res.json({ resp: req.params.id});

  fs.readFile(filePath, "utf8", (err, data) => {
    //console.log(data);   // konsolej matom visa duomenu faile esanti turini
    //paima 'data.json' faila ir ji perskaito

    if (err) {
      res.json({
        status: "failed",
        message: "Ivyko klaida, nepavyko perskaityti failo",
      });
      return false;
    }

    //****************** pirmas budas istrinti pagal indeksa ********
    let jsonData = JSON.parse(data); // cia yra masyvas, o jame visi issaugoti duomenys is formos
    let clickId = req.params.id; //mygtukui "delete" priskirtas 'id'

    let findId = jsonData.find((el) => el.id === parseInt(clickId)); //susirandame duomenu masyve objekta, kurio 'id' lygus "delete" mygtuko 'id'

    let indexOfId = jsonData.indexOf(findId); // susirandam objekto, kurio 'id' lygus "delete" mygtuko 'id', indeksa masyve
    jsonData.splice(indexOfId, 1); // is duomenu faile esancio masyvo iskerpa ta objekta, kurio indeksa jau susiradom ('id' lygus "delete" mygtuko 'id')
    //console.log("jsonData", jsonData);   //grazina masyva be tos istrintos reiksmes

    //****************** antras budas istrinti pagal indeksa ********
    /*
    jsonData.forEach((el, i, arr) => {
      if (el.id === req.params.id) {
        jsonData.splice(i, 1);
      }
    });
    */

    // *********************** Duomenu bazes failo trynimas ***********************
    /*
    if (jsonData.length == 0) {
      fs.unlink(filePath, (err) => {
        if (err) {
          res.json({ status: "failed", message: "Nepavyko istrinti failo" });
        }
      });

    } else { 
    */
    let jsonResp = JSON.stringify(jsonData);

    fs.writeFile(filePath, jsonResp, "utf8", (err) => {
      // i 'data.json' faila irasome likusius objektus
      if (!err) {
        res.json({
          jsonResp,
          status: "success",
          message: "Įrašas sėkmingai ištrintas",
        });
      } else {
        res.json({
          status: "failed",
          message: "Įvyko klaida, toks įrašas nerastas...",
        });
      }
    });
    // }
  });
});

app.listen(3001);
