console.log("--------------------+1");
/*
Sugeneruokite 300 div elementų, kurie būtų patalpinti reliatyviame tėviniame 
elemente kurio fiksuotas dydis būtų "500 x 500"px. CSS pagalba aprašykite, 
jog sukurti elementai atrodytų kaip kvadratai, "5 x 5"px dydžio, absoliučioje pozicijoje 
su uždėta kraštine ir raudonu fonu. Javascript pagalba priskirkite jiems pozicijas: 
"top" ir "left", kurių reikšmės būtų paimtos pasinaudojant randomSkaicius(0, 550) funkcija. 
Suskaičiuokite ir išveskite kiek elementų perkopė kraštinių ribas.
*/
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max + 1) - 0) + min;
}

let blackCube = document.createElement("div");
console.log(blackCube);

document.querySelector("#task-1").appendChild(blackCube);

/*let arr = new Array(300).fill(0);
console.log(arr);*/
let outOfBox = 0;

for (let i = 0; i < 300; i++) {
  let redBox = document.createElement("div");
  redBox.classList.add("red-box");
  blackCube.appendChild(redBox);
  let topPosition = getRandomNumber(0, 550);
  let leftPosition = getRandomNumber(0, 550);
  redBox.style.top = topPosition + "px";
  redBox.style.left = leftPosition + "px";

  if (
    leftPosition - 5 > 500 /*blackCube.offsetWidth*/ ||
    topPosition - 5 > 500 /*blackCube.offsetHeight*/
  ) {
    //offsetWidth - grazina, koks yra elemento plotis
    outOfBox++;
  }
}
console.log(outOfBox);





console.log("--------------------+2");
/*
Metam monetą. Monetos kritimo rezultatą imituojam Math.random() metodu, 
kur 0 yra herbas, o 1 - skaičius. 
Monetos metimo rezultatus išvedame į ekraną atskiroje eilutėje: 
“S” jeigu iškrito skaičius ir “H” jeigu herbas. 
Suprogramuokite tris skirtingus scenarijus kai monetos metimą stabdome:
Iškritus herbui;
Tris kartus iškritus herbui;
Tris kartus iš eilės iškritus herbui;
*/
console.log("--------------------+2.1var.");

function dropCoin(parametras) {
  let rezultatas = "";
  let counter = 0;

  while (true) {
    let coin = getRandomNumber(0, 1);
    console.log(coin);

    if (parametras === 1) {
      if (coin === 0) {
        //console.log("H");
        rezultatas += "H";
        return rezultatas; //return duoti tik kai tris kartus iskrito skaicius
      } else {
        //console.log("S");
        rezultatas += "S";
      }
    } else if (parametras === 2) {
      if (coin === 0) {
        rezultatas += "H";
        counter++;
      } else {
        rezultatas += "S";
      }
      if (counter > 2) {
        return rezultatas;
      }
    } else if (parametras === 3) {
      if (coin === 0) {
        rezultatas += "H";
        counter++;
        if (counter > 2) {
          return rezultatas;
        }
      } else {
        rezultatas += "S";
        counter = 0;
      }
    }
  }
}
const arHerbas1 = dropCoin(1);
const arHerbas2 = dropCoin(2);
const arHerbas3 = dropCoin(3);
console.log(arHerbas1);
console.log(arHerbas2);
console.log(arHerbas3);



console.log("--------------------+2.2var.");

function flipCoin(params) {
  const metimai = {
    S: 0,
    H: 0,
  };
  let herbasCount = 0;
  while (true) {
    const rndMoneta = getRandomNumber(0, 1);
    rndMoneta == 1 ? metimai["S"]++ : metimai["H"]++;
    console.log(`${metimai.S} : ${metimai.H}`);
    rndMoneta == 0 ? herbasCount++ : (herbasCount = 0);

    // Iškritus herbui;
    if (params == 1 && metimai.H == 1) {
      console.log("Iškrito herbas");
      break;

      // Tris kartus iškritus herbui;
    } else if (params == 2 && metimai.H == 3) {
      console.log("Iškrito trys herbai");
      break;

      // Tris kartus iš eilės iškritus herbui;
    } else if (params == 3 && metimai.H >= 3 && herbasCount == 3) {
      console.log("Iškrito trys herbai iš eilės");
      break;
    }
  }
}
// flipCoin(3);





console.log("---------------------3");
/*
Sukurkite funkciją į kurią būtų perduodami trys kintamieji 
su atsitiktiniais skaičiais nuo 0 iki 100. Paskaičiuokite jų 
aritmetinį vidurkį. Ir aritmetinį vidurkį atmetus tas reikšmes, 
kurios yra mažesnės nei 10 arba didesnės nei 90. 
Rezultatus apvalinkite iki sveiko skaičiaus. Abu vidurkius 
gražinkite masyve iš funkcijos ir abi jo reikšmes atvaizduokite 
konsolėje.
*/
/*
function average(param1, param2, param3){
  console.log(param1);
  let rez = param1 + param2 + param3;
  if(param1 > 10 || param1 < 90){
        rez -= param1;
        return
  }


}
let averageCount= average(getRandomNumber(0, 100),getRandomNumber(0, 100),getRandomNumber(0, 100));
*/

function vidurkis(min, max, quantity) {
  let arr = [];
  for (let i = 0; i < quantity; i++) {
    let randNr = getRandomNumber(min, max);
    arr.push(randNr);
  }
  //console.log(arr);

  let wholeArrAverage = Math.round(arr.reduce((acc, cur) => acc + cur) / arr.length);
  //console.log('wholeArrAverage', wholeArrAverage);
  let filt = arr.filter((el) => el > 10 && el < 90);
  //console.log("filt", filt);
  let sum = filt.reduce((acc, curr) => acc + curr);
  //console.log("sum", sum);
  let averageCount = Math.round(sum / filt.length);
  //console.log("averageCount", averageCount);

  let averageArray = [];
  averageArray.push(wholeArrAverage, averageCount);
  //console.log("averageArray", averageArray)
  return averageArray;
}
let average = vidurkis(0, 100, 3);
console.log("average", average);
