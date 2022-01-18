const path = require('path');

console.log(path.basename('C:\\temp\\myfile.html'));
//console.log(__filename);

// failo pavadinimas
console.log(path.basename(__filename));  

//directory name - direktorijos kelias
console.log(path.dirname(__filename));            

//extension name - grazina tik failo tipa 
console.log(path.extname('C:\\temp\\myfile.html'));   

//failo informacijos objektas
console.log(path.parse(__filename));

//
console.log(path.join(__dirname));




