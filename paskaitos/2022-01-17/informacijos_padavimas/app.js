//sugebes perskaityti is terminalo paduota info ir sugrazint ja i koda, kad ja galetume apdorot. 1:26min
const readline = require('readline');  //readline yra MODULIS

//reikia susikurti pora argumentu readline'ui
const interface = readline.createInterface({     // metodas .createInterface reikalauja dvieju argumentu
    //pirmas argumentas: globalus objektas su .reiksmemis
input: process.stdin,
 //antras argumentas: globalus objektas su .reiksmemis
output: process.stdout
});

const diff = 2.54;

//komentaras, callback
interface.question('iveskite centimetrus: \n', reiksme => {
    console.log('Centimetrai konvertuoti i colius yra: ' + (reiksme * diff).toFixed(2));
    //uzdarom aplikacija     1:37h
    interface.close();
});