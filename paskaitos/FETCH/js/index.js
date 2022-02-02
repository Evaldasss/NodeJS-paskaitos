console.log("labas");

//API
//== FETCH skirtas informacijos paemimui arba issiuntimui, 
//== jis krauna info is duotos nuorodos

//== Atsitiktines nuotraukos paemimas is puslpio dog API
/*
fetch('https://dog.ceo/api/breeds/image/random')  
.then(response => {         //== grazinam responsa su json objektu i metoda.then()
    return response.json()  //== konvertuojam json fomatu informacija atgal i objekta
})
.then(dataObject => {          //== json objekta kaip argumentas perduodamas i tolimesni metoda .then()
    console.log(dataObject);   //== narsyklej konsolej paziurim rodoma objekta ir jo indeksus bei duomenis
    //== is gauto json objekto (ji matom narsykles konsolej) paimam nuotraukos indeksa (key) 'message' 
    //== ir ji idedam i html faila kaip elementa ir atvaizduojam nuotrauka 
    document.getElementById('root').innerHTML = 
    `<img src="${dataObject.message}" alt="">`    //== 'message' yra nuotraukos adresas, matomas narsykles konsoleje
})
*/

//////////////////////////////////////////////////////////////////
//== Nuotraukos paemimas pagal suns veisle
/*
const veisle = "terrier/yorkshire";

fetch(`https://dog.ceo/api/breed/${veisle}/images/random`)
  .then(response => {
    return response.json();
  })
  .then((dataObject) => {
      //console.log(dataObject)
    if (dataObject.status == "success") {   //== patikrinam ar statusas yra 'success'
      document.getElementById("root").innerHTML = 
      `<img src="${dataObject.message}" alt="suns nuotrauka">`;
    }
  });
*/

/////////////////////////////////////////////////////////////////

/*
  const creatingLabel = document.createElement("label");
  const labelText = document.createTextNode("Irasykite suns veisle");
  creatingLabel.appendChild(labelText);
  const div = document.getElementById("root");
  document.body.insertBefore(creatingLabel, div);

  const labelClass = document.querySelector('.label');
  labelClass.classList.add('label');

  const creatingInput = document.createElement("input");
  //const div = document.getElementById("root");
  document.body.insertAfter(creatingInput, div);

  const creatingButton = document.createElement("button");
  const buttonText = document.createTextNode("Ieskoti");
*/

/*const veisle = "leonberg";

fetch(`https://dog.ceo/api/breed/${veisle}/images/random`)
  .then((response) => {
    return response.json();
  })
  .then((dataObject) => {
    console.log(dataObject);
    if (dataObject.status == "success") {
      document.getElementById(
        "root"
      ).innerHTML = `<img src="${dataObject.message}" alt="suns nuotrauka">`;
    }
  });
  */


/*
  UZDUOTIS:
  Sukurkite laukeli su pavadinimu "Suns veisle". Salia priskirkite mygtuka su tekstu "Ieskoti". 
  Paspaudus ant mygtuko paimkite is laukelio ivesta reiksme ir ka idekite i sukonstruota nuoroda.
  Jei rezultatas negrazino statuso "success", tuomet narsykleje atvaizduokite zinute 
  "Tokios veisles suns nerasta", o jei rado statusas "success", tai atvaizduoti nuotraukos html 
  elementa ( pacia foto naujai sukurtame html elemente <img>). 
*/


//== uzfiksuojamas mygtuko paspaudimas
document.getElementById("submit").addEventListener("click", () => {
  console.log("Paspaudete mygtuka");

  //== Paimame reikse su suns veisle is input laukelio
  
  const veisle = document.getElementById("veisle").value;

 
  fetch(`https://dog.ceo/api/breed/${veisle}/images/random`)
    .then((response) => {
      return response.json();
    })
    .then((dataObject) => {
      console.log(dataObject);
      if (dataObject.status == "success") {
        document.getElementById("root").innerHTML = `<img src="${dataObject.message}" alt="suns nuotrauka">`;
      } else {
        document.getElementById("root").innerHTML = `Tokios veisles suns nerasta`;
      }
    });
});


fetch('http://localhost:5500/info')  //kreipiames i savo sukurta serveri
.then(response => response.json())
.then((dataObject) => {
    console.log(dataObject);
}); 


