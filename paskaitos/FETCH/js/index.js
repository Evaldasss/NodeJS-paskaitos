console.log("labas");

//API
//== FETCH skirtas informacijos paemimui arba issiuntimui, 
//== jis krauna info is duotos nuorodos
/*
fetch('https://dog.ceo/api/breeds/image/random')  
.then(response => {         //== grazinam responsa su json objektu i metoda.then()
    return response.json()  //== konvertuojam json informacija atgal i objekta
})
.then(dataObject => {          //== json objekta kaip argumentas perduodamas i tolimesni metoda .then()
    console.log(dataObject);   //== narsyklej konsolej paziurim rodoma objekta ir jo indeksus bei duomenis
    //== is konsoles narsykleje paimam nuotraukos indeksa 'message' 
    //== ir ji idedam i html faila kaip elementa ir atvaizduojam nuotrauka 
    document.getElementById('root').innerHTML = 
    `<img src="${dataObject.message}" alt="">`
})
*/

//////////////////////////////////////////////////////////////////
// Nuotraukos paemimas pagal suns veisle
/*
const veisle = "terrier/yorkshire";

fetch(`https://dog.ceo/api/breed/${veisle}/images/random`)
  .then(response => {
    return response.json();
  })
  .then((dataObject) => {
      console.log(dataObject)
    if (dataObject.status == "success") {
      document.getElementById(
        "root"
      ).innerHTML = `<img src="${dataObject.message}" alt="suns nuotrauka">`;
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

//uzfiksuojamas mygtuko paspaudimas
document.getElementById("submit").addEventListener("click", () => {
  console.log("Paspaudete mygtuka");
  //== Paimame reikse su suns veisle is input laukelio
  
  const veisle = document.getElementById("veisle").value;

  //fetch(`https://dog.ceo/api/breed/${veisle}/images/random`)
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