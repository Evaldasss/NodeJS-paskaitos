//require'inam handlebarsus
const handlebars = require("express-handlebars");  

//priskiriam helper'i
handlebars.registerHelper('if_eq', function(a, b, opts) { 
    if (a == b) return opts.fn(this);
    else return opts.inverse(this);
   });

   //priskiriam i exports, kad paduotu atgal ta pacia reiksme
   module.exports = handlebars;
  