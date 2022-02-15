//const express = require('express')

import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use("/img", express.static("img"));

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
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

function showTime() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  const adjustedHours = hours < 10 ? "0" + hours : hours;
  const adjustedMinutes = minutes < 10 ? "0" + minutes : minutes;
  const adjustedSeconds = seconds < 10 ? "0" + seconds : seconds;
  const time = adjustedHours + ":" + adjustedMinutes + ":" + adjustedSeconds;
  return time;
}

setInterval(function () {
  return showTime();
}, 1000);

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
      first: "0",
      second: "0",
    },
    quarter: {
      number: "0",
      final: "final",
    },
  };

  res.json(objektas1);
});

app.get("/", function (req, res) {
  let objektas2 = {
    result: getRandomNumber(1, 3),
    quarter: {
      first: "1",
      second: "2",
      third: "3",
      fourth: "4",
    },
  };

  res.json(objektas2);
});

app.listen(3001);
