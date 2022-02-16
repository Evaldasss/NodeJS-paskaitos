//const express = require('express')

import express from "express";
import cors from "cors";
import Krepsinis from "./krepsinis.js";

const app = express();

app.use(cors());
app.use("/img", express.static("img"));


function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}


function date() {
  const date = new Date();
  const [month, day, year] = [
    date.getMonth(),
    date.getDate(),
    date.getFullYear(),
  ];
  let data = date.toDateString();
  //console.log("DATA", data);
  return data;
}


//sita funkcija rodo einamaji laika, jei ji priskirtume prie  let objektas1 = {time: showTime()}
function showTime() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  //const seconds = date.getSeconds();

  const adjustedHours = hours < 10 ? "0" + hours : hours;
  const adjustedMinutes = minutes < 10 ? "0" + minutes : minutes;
  //const adjustedSeconds = seconds < 10 ? "0" + seconds : seconds;
  //const time = adjustedHours + ":" + adjustedMinutes + ":" + adjustedSeconds;
  const time = adjustedHours + ":" + adjustedMinutes;

  return time;
}



app.get("/", function (req, res) {
  let objektas1 = {
    round: getRandomNumber(1, 32),
    date: date(),
    stadium: "Peace And Friendship Stadium",
    time: showTime(),
    team: {
      first: "Olympiacos Piraeus",
      second: "Anadolu Efes Istanbul",
    },
    result: {
      first: 0,
      second: 0,
    },
    quarter: {
      number: "1st quarter",
      final: "final",
    },
  };

  res.json(objektas1);
});



//dinaminis variantas, rezultatas random, ne didejantis

app.get("/result", function (req, res) {
  let objektas2 = {
    result: {
      first: getRandomNumber(1, 100),      
      second: getRandomNumber(1, 100),
    },
    quarter: getRandomNumber(1, 5),
    time: showTime(),
  };

  res.json(objektas2);
});


// rezultatas pagal klase 'Krepsinis'
/*konstanta skirta klases inicijavimui ir pavertimui objektu 
(aprasoma virs route'o, nes jei aprasysim route, tai vis nuo nulio 
taskus rodys ir nedides taskai)*/
const rezultatas = new Krepsinis();
//console.log(rezultatas);

app.get("/checkscore", function (req, res) {
  res.json(rezultatas);
});



app.listen(3001);