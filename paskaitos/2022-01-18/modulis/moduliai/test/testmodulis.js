const modulis1 = require('../modulis.js');

function execModulis(msg){
    modulis1.funkcija(msg);    //issaukiamas 'modulis.js' failas
    }
    
module.exports.execModulis = execModulis;


//MANO KURTAS MODULIS-2
const modulis3 = require('../modulis.js');

function execSandauga(msg){
    modulis3.sandauga(msg);    //issaukiamas 'modulis.js' failas
    }
    
module.exports.execSandauga = execSandauga;