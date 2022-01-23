//VEIKIA NARSYKLEJE   port:5500

const express = require('express');
const app = express();

//GET REQUESTAI
/* Integruoti cm ir coliu konvertavima i get requesta ir atvaizduoti gauta rezultata narsykleje, 
konvertuojamu skaiciu kiekis turi priklausyti nuo narsykles adrese ivesto skaiciaus. */
app.get("/test/:id", (request, response) => {
  let id = request.params.id;
  const diff = 2.54;
  let html = "";
  //console.log(`cm.\tcol.\t|\tcol.\tcm.`);

  html =
    "<table>" +
     "<thead>" +
      "<th>cm</th>" +
      "<th>col</th>" +
      "<th>|</th>" +
      "<th>col</th>" +
      "<th>cm</th>" +
     "</thead>" +
    "<tbody>";
    
  for (let i = 1; i <= id; i++) {
    let convert = i + "\t" + (i * diff).toFixed(2) + "\t|\t" + i + "\t" + (i / diff).toFixed(2);
    console.log(convert);
    html += 
     "<tr>" + 
        "<td>" + i + "</td>" + 
        "<td>" + (i * diff).toFixed(2) + "</td>" +
        "<td>|</td>" +
        "<td>" + i + "</td>" +
        "<td>" + (i / diff).toFixed(2) + "</td>" +
     "</tr>";
  }

  html += "</tbody></table>";

  //let html = '<table><tr><td>' + request.params.id + '</td></tr></table>';
  response.send(html);
});

app.listen(5500);




