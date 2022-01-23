//VEIKIA NARSYKLEJE   port:5500
//console.log("NPM paleistas log");   

const express = require("express");
const app = express();

//GET request


app.get("/test/", (request, response) => {   //cia kreipiasi vartotojas
  console.log(request);   
  response.send("Labas pasauliau");         //cia issiunciama vartotojui
});


app.get("/test/:id", (request, response) => {
  console.log(request.params.id);
  response.send(request.params.id);
});

app.listen(5500);

