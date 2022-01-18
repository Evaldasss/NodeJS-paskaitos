const skaicius = 2.54;

for(let i = 1; i <= 10; i++){
    let cm = (skaicius * i).toFixed(2);
//console.log(cm);
let col = ((i / cm) * i).toFixed(2);
console.log(`${i} col.\t ${cm} cm.\t|\t ${i} cm.\t ${col} col.`);
}


//node paskaitos\2022-01-17\daugyba.js