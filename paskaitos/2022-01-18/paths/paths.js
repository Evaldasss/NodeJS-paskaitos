const path = require('path');

//bazinio failo pavadinimas is argumento skliausteliuose
console.log(path.basename('C:\\temp\\myfile.html'));

// failo, kuriame leidziamas sis modulis, pavadinimas
console.log(path.basename(__filename));  
//console.log(__filename);

//directory name - direktorijos kelias
console.log(path.dirname(__filename));            

//extension name - grazina tik failo tipa 
console.log(path.extname('C:\\temp\\myfile.html'));   

//objekto sukurimas- failo informacijos objektas
console.log(path.parse(__filename));

//is objekto paimti extension'a
console.log(path.parse(__filename).ext);

//prie failo kelio(path) pridedamas aplanko pavadinimas ir failo pavadinimas
console.log(path.join(__dirname, 'test', 'test.html'));




