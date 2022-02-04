console.log("---------------------+1");
/*
Sukurti du kintamuosius. Jiems priskirti savo mylimo aktoriaus vardą ir pavardę kaip stringus. 
Sukurti trečią kintamąjį ir jam priskirti stringą, sudarytą iš trijų paskutinių vardo ir pavardės kintamųjų raidžių. 
Jį atspausdinti. (Pvz. Bradas Pitas - rezultatas: dastas)
*/
const fname = "Antonio";
const surname = "Banderas";

const string = fname.slice(-3).concat(surname.slice(-3));
//console.log(string);

document.getElementById("task-1").innerText = `1 uzduoties atsakymas : ${fname} ${surname} - ${string}`;




console.log("---------------------+2");
/*
Sukurti kintamąjį su stringu: “An American in Paris”. 
Jame ištrinti visas balses. Rezultatą atspausdinti. Kodą pakartoti su stringais: 
“Breakfast at Tiffany's”, “2001: A Space Odyssey” ir “It's a Wonderful Life”.
*/

const sentence = "An American in Paris";
const regex = /[aeiou]/gi;
const withoutVowels = sentence.replace(regex, "");
//console.log(withoutVowels);

document.getElementById("task-2").innerText = `2 uzduoties atsakymas : ${sentence} - ${withoutVowels}`;




console.log("----------------!!!!!-3");  ///////////////////////////////////////////////
/*
Naršyklėje nupieškite linija iš 400 “*” simbolių. 
Programiškai “suskaldykite” žvaigždutes taip, 
kad vienoje eilutėje nebūtų daugiau nei 50 “*”; 
*/




console.log("-------------------!--4"); ///////////////////////////kaip tuos >275 paraudonint?
/*
Sugeneruokite 300 atsitiktinių skaičių nuo 0 iki 300, atspausdinkite juos atskirtus tarpais 
ir suskaičiuokite kiek tarp jų yra didesnių už 150.  Skaičiai didesni nei 275 turi būti raudonos spalvos. 
*/
function randomNumber(min, max, quantity) {
    let arr = [];
  
    for (let i = 0; i < quantity; i++) {
      let randomNr = Math.floor(Math.random() * (max - min) + min);
      arr.push(randomNr);
    }
    let eilute = arr.toString().replaceAll(",", " ");
    //console.log(eilute);
    let biggerThan150 = arr.filter((el) => el > 150).length;
    //console.log(biggerThan150);
    let rednumber = arr.filter((el) => el > 275 /*? document.getElementById("task-4").innerText = `4 uzduoties atsakymas:
    <span style="color: red"> ${el} </span>` : ''*/);                             ///////////////////////////kaip tuos >275 paraudonint?
  
    document.getElementById("task-4").innerText = `4 uzduoties atsakymas:
          a) daugiau uz 150 yra: ${biggerThan150} skaiciai;
          b) <span style="color: red"> ${rednumber} </span>`; 
  }
  let randNum = randomNumber(0, 300, 20);
  
  


console.log("---------------------+5");
/*
Vienoje eilutėje atspausdinkite visus skaičius nuo 1 iki 3000, kurie dalijasi iš 77 be liekanos. 
Skaičius atskirkite kableliais. Po paskutinio skaičiaus kablelio neturi būti. Jeigu reikia, 
panaudokite css, kad visi rezultatai matytųsi ekrane. 
*/
function divideFrom77() {
    let arr = [];
  
    for (let i = 1; i < 3000; i++) {
      arr.push(i);
    }
  
    let divide77 = arr.filter((el) => el % 77 === 0).toString("");
    //console.log(divide77);
  
    document.getElementById("task-5").innerText = `5 uzduoties atsakymas : ${divide77}`;
  }
  divideFrom77();
  




console.log("-------------------!--6");
/*
Situacija programai: Kazys ir Petras žaidžia šaškėmis. Petras surenka taškų kiekį nuo 10 iki 20, 
Kazys surenka taškų kiekį nuo 5 iki 25. Vienoje eilutėje išvesti žaidėjų vardus su taškų kiekiu ir 
“Partiją laimėjo: ​laimėtojo vardas​”. Taškų kiekį generuokite pasitelkiant Math.random. 
Žaidimą laimi tas, kas greičiau surenka 222 taškus. Partijas kartoti tol, kol kažkuris žaidėjas pirmas surenka 222 arba daugiau taškų.  
*/
function game(player1, player2, min1, min2, max1, max2) {
    let firstPoints = Math.floor(Math.random() * (max1 - min1) + min1);
    let secondPoints = Math.floor(Math.random() * (max2 - min2) + min2);
    //console.log(firstPoints);
    //console.log(secondPoints);
  

    /////////////////////kazkaip neteisingai gaunasi..../////////////////////
    let pl1Points = 0;
    let pl2Points = 0;
    let game = 0;
  
    while (pl1Points <= 222 || pl2Points <= 222) {
      pl1Points += firstPoints;
      pl2Points += secondPoints;
      game++;
    }
  
    //////////////////////////////////////////////////////////////////////////
  

    if (pl1Points > pl2Points) {
      document.getElementById("task-6").innerText = `6 uzduoties atsakymas : 
      Zaidejas: ${player1},  taskai: ${pl1Points}, 
      Zaidejas: ${player2},  taskai: ${pl2Points}. 
      Partija laimejo: ${player1}`;
    } else {
      document.getElementById("task-6").innerText = `6 uzduoties atsakymas : 
      Zaidejas: ${player1},  taskai: ${pl1Points}, 
      Zaidejas: ${player2},  taskai: ${pl2Points}.  
      Partija laimejo: ${player1}`;
    }
  }
  game("Petras", "Kazys", 10, 5, 20, 25);
  



console.log("---------------------+7");
/*
Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A, B, C ir D, o ilgis 200. 
Suskaičiuokite kiek yra kiekvienos raidės.
*/
let lettersArr = [];
const letters = "ABCD";
const lettersLength = letters.length;

for (let i = 0; i < 200; i++) {
  let randLetter = letters.charAt(Math.floor(Math.random() * lettersLength));
  lettersArr.push(randLetter);
}
//console.log(lettersArr);

let letterA = lettersArr.filter(elA => elA === "A").length;
//console.log(`A raidziu yra ${letterA}`);
let letterB = lettersArr.filter(elB => elB === "B").length;
//console.log(`B raidziu yra ${letterB}`);
let letterC = lettersArr.filter(elC => elC === "C").length;
//console.log(`C raidziu yra ${letterC}`);
let letterD = lettersArr.filter(elD => elD === "D").length;
//console.log(`D raidziu yra ${letterD}`);

document.getElementById("task-7").innerText = `7 uzduoties atsakymas : 
A raidziu yra: ${letterA},
B raidziu yra: ${letterB}, 
C raidziu yra: ${letterC}, 
D raidziu yra: ${letterD}` 




console.log("-------------------!--8");
/*
Sugeneruokite stringą, kurį sudarytų 50 atsitiktinių skaičių nuo 1 iki 200, 
atskirtų tarpais. Skaičiai turi būti unikalūs (t.y. nesikartoti). 
Sugeneruokite antrą stringą, pasinaudodami pirmu, palikdami jame tik pirminius skaičius 
(t.y tokius, kurie dalinasi be liekanos tik iš 1 ir patys savęs). 
Skaičius stringe sudėliokite didėjimo tvarka, nuo mažiausio iki didžiausio. 
*/
function random50(min, max, length) {
    let arr1 = [];
    let arr2 = [];
  
    for (let i = 0; i < length; i++) {
      let randomNr = Math.floor(Math.random() * (max - min) + min);
      if (arr1.indexOf(randomNr) < 0) {
        arr1.push(randomNr);
      }
    }
  
    let eilute1 = arr1.toString().replaceAll(",", " ");
  

    /////////////////////kazkaip neteisingai gaunasi..../////////////////////
    function prime(el) {
      for (let y = 0; y < el.length; y++) {
        if (el[y] > 1) {
          for (let i = 2; i < el[y]; i++) {
            if (el[y] % i !== 0 && arr2.indexOf(el[y]) < 0) {
              arr2.push(el[y]);
            }
          }
        }
      }
    }
    prime(arr1);
    //////////////////////////////////////////////////////////////////////////
  

    let eilute2 = arr2.sort((a, b) => a - b);
    //console.log('sorted arr2', arr2);
  
    document.getElementById("task-8").innerText = `8 uzduoties atsakymas:
        a) Pirma eilute: ${eilute1}; 
        b) Antra eilute: ${eilute2}`;
  }
  random50(1, 200, 50);
  




  console.log("---------------------+9");
/*
Sugeneruokite 10 skaičių masyvą pagal taisyklę: Du pirmi skaičiai- atsitiktiniai nuo 5 iki 25. 
Trečias, pirmo ir antro suma. Ketvirtas - antro ir trečio suma. Penktas trečio ir ketvirto suma ir t.t.
*/

function generateArr(min, max, length) {
  let newArray = [];
  for (let i = 0; i < 2; i++) {
    let randomNr = Math.floor(Math.random() * (max - min) + min);
    newArray.push(randomNr);
  }
  //console.log(newArray);

  for (let i = 0; i < length - 2; i++) {
    let newNum = newArray.reduce((prev, cur) => prev + cur);
    newArray.push(newNum);
  }
  document.getElementById("task-9").innerText = `9 uzduoties atsakymas: [${newArray}]`;
  //console.log(newArray);
}
generateArr(5, 25, 10);

  
  
  

  console.log("----------------!!!!!-10");  ///////////////////// nepadaryta ///////////////////
/*
Sumodeliuokite vinies kalimą. Įkalimo gylį sumodeliuokite pasinaudodami Math.random() metodu. 
Vinies ilgis 8.5cm (pilnai sulenda į lentą). 

a)“Įkalkite” 5 vinis mažais smūgiais. Vienas smūgis vinį įkala 5-20 mm. 
Suskaičiuokite kiek reikia smūgių.

b)“Įkalkite” 5 vinis dideliais smūgiais. 
Vienas smūgis vinį įkala 20-30 mm, bet yra 50% tikimybė (pasinaudokite Math.random() metodu tikimybei sumodeliuoti), 
kad smūgis nepataikys į vinį. Suskaičiuokite kiek reikia smūgių.
*/
function nail(min, max, length) {
    let smugiai = [];
    for (let i = 0; i < 5; i++) {
      let nailDepth = Math.floor(Math.random() * (max - min) + min);
      //console.log(nailDepth);
      smugiai.push(nailDepth);
    }
    //console.log(smugiai);
  }
  nail(5, 20, 85);
  