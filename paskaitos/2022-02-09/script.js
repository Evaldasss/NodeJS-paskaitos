console.log("---------------UZDUOTIS-1");
/*Sugeneruokite 101 elemento masyvą su atsitiktiniais skaičiais nuo 
0 iki 300. */
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

let construct = new Array(8).fill(0); /////////////////////////pakeisti 8 -> 101
let masyvas = construct.map((el) => getRandomNumber(0, 20)); //////////pakeisti 20 -> 300
console.log(masyvas);


console.log("------------1-------!!!--");
/*1. Reikšmes kurios tame masyve yra ne unikalios pergeneruokite 
iš naujo taip, kad visos reikšmės masyve būtų unikalios. */

let unikaliosReiksmes = masyvas.map(function (el, i, arr) {
  if (arr.indexOf(el) !== i) {
    while (true) {
      let randomNr = getRandomNumber(0, 10);
      if (arr.indexOf(el) !== i) {
        //console.log(randomNr);
        return randomNr;
      }
    }
  }
});
console.log(unikaliosReiksmes);



console.log("------------2------------");
/*2. Išrūšiuokite masyvą taip, kad jo didžiausia reikšmė būtų masyvo 
viduryje, o einant nuo jos link masyvo pradžios ir pabaigos 
reikšmės mažėtų. */

let firstPart = [];
let secondPart = [];

let masyvasCopy = [...masyvas]; ////////////////////////pakeisti i masyva 'unikaliosReiksmes'
//console.log(masyvasCopy);

let sorted = masyvasCopy.sort((a, b) => a - b);
console.log("sorted", sorted);

/* Lyginiu indeksu reiksmes yra iki max reiksmes, 
o nelyginiu- po max reiksmes */
/*
for(let i = 0; i < sorted.length; i++){
  //console.log("sort i", sorted[i]);
  if(i % 2 === 0){
    firstPart.push(sorted[i]);
  } else {
    secondPart.push(sorted[i]);
      }
}
//console.log("firstPart", firstPart);
//console.log("secondPart", secondPart);
*/

for (let i = 0; i < sorted.length; i++) {
  if (i < sorted.length / 2) {
    firstPart.push(sorted[i]);
  } else {
    secondPart.push(sorted[i]);
  }
}
console.log("firstPart", firstPart);
console.log("secondPart", secondPart);

let secondSorted = secondPart.sort((a, b) => b - a);
//console.log("secondSorted", secondSorted);

let maxViduryje = firstPart.concat(secondSorted);
console.log("maxViduryje", maxViduryje);



console.log("------------3------------");
/*3. Paskaičiuokite pirmos ir antros masyvo dalies sumas (neskaičiuojant 
vidurinės). Jeigu sumų skirtumas (modulis, absoliutus dydis) yra 
didesnis nei | 30 | rūšiavimą kartokite. (Kad sumos nesiskirtų viena 
nuo kitos daugiau nei per 30)*/

/*
let halfOfArray = maxViduryje.length / 2;
console.log("halfOfArray", halfOfArray);


let sumOf1 = maxViduryje.slice(0, (halfOfArray));
console.log('sumOf1', sumOf1);

let sumOf2 = maxViduryje.slice((halfOfArray + 1), maxViduryje.length);
console.log('sumOf2', sumOf2);
*/

let sumOfFirstPart = firstPart.reduce((acc, curr) => acc + curr);
console.log("sumOfFirstPart", sumOfFirstPart);
let sumOfSecondPart = secondPart.reduce((acc, curr) => acc + curr);
console.log("sumOfSecondPart", sumOfSecondPart);





console.log("---------------UZDUOTIS-2");
console.log("------------1------------");
/*1. Parašykite funkciją, kurios argumentas būtų tekstas, kuris yra 
įterpiamas į h1 elementą ir rezultatas būtų grąžinamas iš jos.  */
/*
function h1Text(text) {
  const h1 = document.createElement("h1");
  h1.classList.add("header1");
  const content = document.createTextNode(text);
  h1.appendChild(content);
  const home = document.getElementById("task-1");
  document.body.insertBefore(h1, home);
  return;
}
h1Text("2.1. Dabar visi sprendziam JavaScript kartojimo uzdavinius.");
*/

function heading(text) {
  return `<h1>${text}</h1>`;
}
document.getElementById("app").innerHTML = heading("JavaScript: pirma uzuotis");



console.log("------------2------------");
/*2. Parašykite funkciją su dviem argumentais, pirmas argumentas tekstas, 
įterpiamas į h HTML elementą, o antrasis elemento numeris (1-6). 
Rašydami šią funkciją remkitės pirmąjame uždavinyje parašyta funkcija.*/
/*
function headingsText(text, number) {
  if (number <= 6) {
    const h1 = document.createElement(`h${number}`);
    h1.classList.add("header1");
    const content = document.createTextNode(text);
    h1.appendChild(content);
    const home = document.getElementById("task-2");
    document.body.insertBefore(h1, home);
    return;
  } else {
    document.getElementById(
      "task-2"
    ).innerText = `Toks HTML elementas neegzistuoja`;
  }
}
headingsText("Dabar visi sprendziam JavaScript kartojimo uzdavinius.", 1);
*/

function headingEdit(text, num) {
  if (num >= 1 && num <= 6) {
    return `<h${num}>${text}</h${num}>`;
  }
  return "";
}
document.getElementById("app2").innerHTML = headingEdit(
  "JavaScript: antra uzuotis",
  3
);



console.log("---------------UZDUOTIS-3");

/*Generuokite atsitiktinį stringą, pasinaudodami kodu btoa(Date.now()). 
Visas didžiąsias raides stringe įdėkite į h1 elementą. 
Likusių simbolių neimkite. Jeigu iš eilės eina kelios didžiosios 
raidės, jas į elementą reikia dėti kartu (h1 atsidaro prieš pirmaja 
  ir užsidaro po paskutinės). Keitimui galite panaudoti patobulintą 
  pirmo uždavinio funkciją ir replace() metodą.*/

//let regex = /[A-Z]+/g;  //visi simboliai, isskyrus nuo A iki Z
console.log("---------------UZDUOTIS-14");

let stringas = 'rodo konsolej tai'

console.log("str", stringas.replace('o', ' '));


console.log("---------------UZDUOTIS-14");


function generateHeadings() {
  let stringas = btoa(Date.now())
  let stringasReplaced = '';
  stringas.replace(/[A-Z]+/g, function(param) {
      stringasReplaced += `<h1>${param}</h1>`
  })

  console.log("stringasReplaced", stringasReplaced)
}
  
  //console.log(stringas.replace(regex, ""));
  //<h1>MTY</h1>    turi gautis toks formatas
  //<h1>DQE</h1>    turi gautis toks formatas
generateHeadings();


//callback funkcijos

function Replace(param, callback) {
  if (typeof param == "string") {
    callback(param); //rodo konsolej tai, ka reikes isimti is to stringo
  }
}
Replace("hello", function (stringas) {
  console.log(stringas);
});
