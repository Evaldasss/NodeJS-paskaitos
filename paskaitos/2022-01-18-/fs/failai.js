const { fstat } = require("fs");














fs.readFile(path.join(__dirname, '/testine direktorija', 'test.html'), 'utf8', (error, data) => {
if(error) throw error;
console.log("failas sekmingai sukurtas");
});


//pervadinti faila kitu pavadinimu
fs.rename(
    path.join(__dirname, '/testine direktorija', 'test.html'),
 path.join(__dirname, '/testine direktorija', 'pervadintasFailas.html'),
  error => {
    if(error) throw error;
    console.log("failas sekmingai pervadintas");
  });


//folderio sukurimas
fs.stat(1 , {}, (error, stats) => {
    //console.log(stats);
    if(stats != undefined){
        console.log("Direktorija egzistuoja");
    }
});

fs.stat(1 , {}, (error, stats) => {
    //console.log(stats);
    if(stats = undefined){
        fs.mkdir(path.join(__dirname, '/testine direktorija'),)
    }
});
