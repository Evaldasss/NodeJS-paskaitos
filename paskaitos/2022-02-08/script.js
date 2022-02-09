console.log("---------------UZDUOTIS-1");
/*
Sugeneruokite masyvą iš 30 elementų (indeksai nuo 0 iki 29), 
kurių reikšmės yra atsitiktiniai skaičiai nuo 5 iki 25.

Naudodamiesi šiuo masyvu:
1. Suskaičiuokite kiek masyve yra reikšmių didesnių už 10;
2. Raskite didžiausią masyvo reikšmę ir jos indeksą arba indeksus,
 jeigu yra keli;
3. Suskaičiuokite visų porinių (lyginių) indeksų reikšmių sumą;
4. Sukurkite naują masyvą, kurio reikšmės yra 1 uždavinio masyvo 
reikšmes minus tos reikšmės indeksas;
5. Papildykite masyvą papildomais 10 elementų su reikšmėmis nuo 5 iki 25,
kad bendras masyvas padidėtų iki indekso 39;
6. Iš masyvo elementų sukurkite du naujus masyvus. 
Vienas turi būti sudarytas iš neporinių indeksų reikšmių, 
o kitas iš porinių;
7. Pirminio masyvo elementus su poriniais indeksais padarykite lygius 
0 jeigu jie didesni už 15;
*/
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

let array = new Array(30).fill(0);
let newArray = array.map((el) => getRandomNumber(5, 25));
console.log(newArray);



console.log("------------1------------");
/*1. Suskaičiuokite kiek masyve yra reikšmių didesnių už 10;*/

let moreThan10 = newArray.filter((el) => el > 10).length;
console.log(moreThan10);



console.log("------------2------------");
/*2. Raskite didžiausią masyvo reikšmę ir jos indeksą arba indeksus,
 jeigu yra keli;*/

let maxValue = Math.max(...newArray);
console.log(maxValue);

let indexArr = [];
for (let i = 0; i < newArray.length; i++) {
  if (newArray[i] === maxValue) {
    indexArr.push(i);
    //console.log(indexArr);
  }
}
console.log(indexArr);



console.log("------------3------------");
/*3. Suskaičiuokite visų porinių (lyginių) indeksų reikšmių sumą;*/

let evenIndexesValueSum = 0;

for (let i = 0; i < newArray.length; i++) {
  if (i % 2 === 0) {
    evenIndexesValueSum += newArray[i];
  }
}
console.log(evenIndexesValueSum);



console.log("------------4------------");
/*4. Sukurkite naują masyvą, kurio reikšmės yra 1 uždavinio masyvo 
reikšmes minus tos reikšmės indeksas;*/

let createNewArray = newArray.map((el, i) => el - i);
console.log(createNewArray);



console.log("------------5------------");
/*5. Papildykite masyvą papildomais 10 elementų su reikšmėmis nuo 5 iki 25,
kad bendras masyvas padidėtų iki indekso 39; */

let newArrayCopy = [...newArray]; //pasidarau pirminio masyvo kopija, 
                                  //kad konsolej nesikeistu pirminis masyvo atvaizdavimas
for (let i = 0; i < 10; i++) {
  newArrayCopy.push(getRandomNumber(5, 25));
}
console.log(newArrayCopy);



console.log("------------6------------");
/*6. Iš masyvo elementų sukurkite du naujus masyvus. 
Vienas turi būti sudarytas iš neporinių indeksų reikšmių, 
o kitas iš porinių;*/

let evenValues = [];
let oddValues = [];

newArray.filter((el, i) =>
  i % 2 === 0 ? evenValues.push(el) : oddValues.push(el)
);

console.log(evenValues);
console.log(oddValues);



console.log("------------7------------");
/*7. Pirminio masyvo elementus su poriniais indeksais padarykite lygius 
0 jeigu jie didesni už 15;*/
console.log("--------------------7.1var.");
for (let i = 0; i < newArray.length; i++) {
  if (i % 2 === 0 && newArray[i] > 15) {
    newArray[i] = 0;
  } else {
  }
}
console.log(newArray);



console.log("--------------------7.2var.");

newArray.map((el, i) => (i % 2 === 0 && el > 15 ? (el = 0) : el));
console.log(newArray);




console.log("---------------UZDUOTIS-2");

console.log("------------1------------");
/*1. Sugeneruokite du masyvus, kurių reikšmės yra atsitiktiniai skaičiai 
nuo 100 iki 999. Masyvų ilgiai 100. Masyvų reikšmės turi būti unikalios 
savo masyve (t.y. neturi kartotis).*/

let array1 = [];
let array2 = [];

function numberGenerator(arr, min, max, length) {
  if (arr.length >= length) {
    return;
  }
  let randNumber = Math.floor(Math.floor(Math.random() * (max - min) + min));
  if (arr.indexOf(randNumber) < 0) {
    arr.push(randNumber);
  }
  numberGenerator(arr, min, max, length);
}
numberGenerator(array1, 100, 999, 100);
numberGenerator(array2, 100, 999, 100);

console.log(array1);
console.log(array2);



console.log("------------2------------");
/*2. Sugeneruokite masyvą, kuris būtų sudarytas iš reikšmių, 
kurios yra pirmajame masyve, bet nėra antrame masyve.*/
let array3 = [];

for (let i = 0; i < array1.length; i++) {
  if (!array2.includes(array1[i])) {
    array3.push(array1[i]);
  }
}
console.log(array3);



console.log("------------3------------");
/*3. Sugeneruokite masyvą iš elementų, kurie kartojasi 
abiejuose masyvuose.*/

let arr1arr2 = array1.concat(array2);
console.log(arr1arr2);

/*Cia lyginami visu masyvo elementu indeksai su pirmu rastu
to elemento indeksu: jei indeksai nesutampa, vadinasi elementas 
kartojasi (yra dublikatas)*/
let array4 = arr1arr2.filter((el, i, arr) => arr.indexOf(el) !== i);
console.log(array4);



console.log("------------4------------");
/*4. Sugeneruokite masyvą, kurio indekso numeriai butu pirmojo 
masyvo reikšmės, o naujo masyvo reikšmės būtų antrojo masyvo 
elementai.*/

let array5 = [];

for (let i = 0; i < array1.length; i++) {
  array5[array1[i]] = array2[i];
}
console.log(array5);

console.log("max", Math.max(...array1));


