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
      console.log(i + "\t" + (i * diff).toFixed(2) + "\t|\t" + i + "\t" + (i / diff).toFixed(2));
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
  
    //let inch = cm * 2.54;
    //let html = "<table><tr><td>" + cm + "</tr></td></html>";
    response.send(html);
  });
  
  app.listen(3000);
  
  
  
  /*Sukurkite 2 HTML failus, juose turetu buti headeris su navigacija, o joje dvi nuorodos: "Apie mus", "Kontaktai". 
  HTML failu turinys turi buti atitinkamas puslapiams. 
  Nuorodu adresai: "apie-mus", "kontaktai". Pasinaudodami path ir fs moduliais 
  integruokite html failus i res.send() metoda abiem auksciau isvardintiems adresams. */
  
  //perkelta i C:\Users\nerma\Desktop\Visual Studio Code\NodeJS paskaitos\paskaitos\2022-01-20\uzdavinys-2> 
  const fs = require("fs");
  const path = require("path");
  
  fs.stat(path.join(__dirname, "/uzdavinys-2"), {}, (error, stats) => {
    if (stats == undefined) {
      fs.mkdir(path.join(__dirname, "/uzdavinys-2"), {}, (error) => {
        if (error) throw error;
        console.log("direktorija sekmingai sukurta");
      });
    }
  });
  
  
  /*
  const direktorijos = ["uzdavinys-2"];
  const failai = ["apie-mus.html", "kontaktai.html"];
      
  for(let i = 0; i <= failai.length; i++) {
      // let dirName = path.join(__dirname, "/uzdavinys-2");
      // let directory = path.join(dirName, failai[i]);
      fs.writeFile(path.join(__dirname, "/uzdavinys-2", failai[i]), "Test2", (err2) => {
          if (err2) throw err2;
          console.log("File created");
          i++;
         });
       };
  */
  
  fs.writeFile(path.join(__dirname, "/uzdavinys-2", "file2.html"), "Test2", (err2) => {
      if (err2) throw err2;
      console.log("File created");
   });
  
      