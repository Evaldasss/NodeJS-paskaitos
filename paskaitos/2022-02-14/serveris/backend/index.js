//const express = require('express')

import express from "express";
import cors from "cors";

const app = express();

app.use(cors());

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

app.get("/", function (req, res) {
  let objektas = {
    status: {
      clouds: {
        stat: "Broken Clouds",
        img: "./img/broken-clouds.jpg",
      },
      sun: {
        stat: "Mostly Sunny",
        img: "./img/sunny.jpg",
      },
    },
    degree: getRandomNumber(10, 25),
    feeling: getRandomNumber(13, 27),
    humidity: getRandomNumber(50, 90),
  };
  //res.send(objektas)
  res.json(objektas);
});

app.listen(3001);
