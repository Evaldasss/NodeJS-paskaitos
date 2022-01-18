// kviesti node app.js ant ...paskaitos\2022-01-18-\modulis\moduliai>
const modulis = require('./moduliai/modulis');  
modulis.funkcija('tai yra testine zinute');

//kviesti node app.js ant ...paskaitos\2022-01-18-\modulis>
const modulis1 = require('./moduliai/test/testmodulis');   
modulis1.execModulis('is testmodulio issaukta funkcija');


//MANO KURTAS MODULIS-1
// kviesti node app.js ant ...paskaitos\2022-01-18-\modulis>
const modulis2 = require('./moduliai/modulis');     
modulis2.suma(5, 10);  


//MANO KURTAS MODULIS-2
// kviesti node app.js ant ...paskaitos\2022-01-18-\modulis>
const modulis3 = require('./moduliai/modulis');     
modulis3.sandauga(5, 10); 
