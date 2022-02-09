console.log("---------------UZDUOTIS-1");
/*Sugeneruokite 101 elemento masyvą su atsitiktiniais skaičiais nuo 
0 iki 300. */
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

let construct = new Array(8).fill(0); /////////////////////////////////////////
let masyvas = construct.map((el) => getRandomNumber(0, 10)); ////////////////////////////////////////
console.log(masyvas);

console.log("------------1------------");
/*1. Reikšmes kurios tame masyve yra ne unikalios pergeneruokite 
iš naujo taip, kad visos reikšmės masyve būtų unikalios. */

let unikaliosReiksmes = masyvas.map(function (el, i, arr) {
  if (arr.indexOf(el) !== i) {
    while (true) {
      let randomNr = getRandomNumber(0, 10);
      if (arr.indexOf(el) !== i) {
              console.log(randomNr);
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

console.log("------------3------------");
/*3. Paskaičiuokite pirmos ir antros masyvo dalies sumas (neskaičiuojant 
vidurinės). Jeigu sumų skirtumas (modulis, absoliutus dydis) yra 
didesnis nei | 30 | rūšiavimą kartokite. (Kad sumos nesiskirtų viena 
nuo kitos daugiau nei per 30)*/

console.log("---------------UZDUOTIS-2");
console.log("------------1------------");
/*1. Parašykite funkciją, kurios argumentas būtų tekstas, kuris yra 
įterpiamas į h1 elementą ir rezultatas būtų grąžinamas iš jos.  */

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

console.log("------------2------------");
/*2. Parašykite funkciją su dviem argumentais, pirmas argumentas tekstas, 
įterpiamas į h HTML elementą, o antrasis elemento numeris (1-6). 
Rašydami šią funkciją remkitės pirmąjame uždavinyje parašyta funkcija.*/

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
