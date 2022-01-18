console.log(`cm.\tcol.\t|\tcol.\tcm.`);

const diff = 2.54;

for(let i = 1; i <= 10; i++){
    console.log(i + '\t' + (i * diff).toFixed(2) + '\t|\t' + i + '\t' + (i / diff).toFixed(2));
}