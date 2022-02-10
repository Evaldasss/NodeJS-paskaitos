//document.querySelector('body').innerHTML = '<h5>JavaScriptas veikia</h5>'   // uzpildo visa body tik sia po = nurodyta reiksme
//document.querySelector('body').innerHTML += '<h5>JavaScriptas veikia +=</h5>'  // += prideda prie jau esamo turinio nauja turini
/*
//bandysim paimti informacija
fetch("https://randomuser.me/api/")   // puslapis, is kurio imama informacija
.then((response) => response.json())  //json formato responsa konvertuoja i js objekta 
//console.log(response.json());       //zr. rezultata narsykles konsolej
.then(jsonObjektas => {               //cia jau yra tas js objektas is pirmo .then()
    //console.log(jsonObjektas.results[0].email)
    document.querySelector('body').innerHTML += jsonObjektas.results[0].email
})
*/

fetch("https://randomuser.me/api/")   
.then((response) => response.json())  
.then(jsonObjektas => {              
    console.log(jsonObjektas.results)
    document.querySelector('#top').innerHTML += `<img id="photo" src="${jsonObjektas.results[0].picture.medium}" alt="person"/>`
    document.querySelector('#top').innerHTML += `<div id="name">${jsonObjektas.results[0].name.first} ${jsonObjektas.results[0].name.last}</div>`
    document.querySelector('#bottom').innerHTML += `<div id="phone">${jsonObjektas.results[0].phone} </div>`
    document.querySelector('#bottom').innerHTML += `<div id="cell"> ${jsonObjektas.results[0].cell} </div>`
    document.querySelector('#bottom').innerHTML += `<div id="email">${jsonObjektas.results[0].email} </div>`
    document.querySelector('#bottom').innerHTML += `<div id="street">${jsonObjektas.results[0].location.street.number} ${jsonObjektas.results[0].location.street.name}</div>`
    document.querySelector('#bottom').innerHTML += `<div id="country">${jsonObjektas.results[0].location.city}, ${jsonObjektas.results[0].location.state} ${jsonObjektas.results[0].location.postcode}, ${jsonObjektas.results[0].location.country} </div>`
});


const newDiv = document.querySelector("#bottom");
const qrCode = document.createElement("img");

newDiv.appendChild(qrCode);

const currentDiv = document.getElementById("phone");
document.body.insertBefore(newDiv, currentDiv); 

const img = document.querySelector("img"); 
img.src = "https://rekvizitai.vz.lt/en/qr-code/meniu.png";



let style = document.createElement('style');
style.innerHTML =
	'#photo {' +
		'border-radius: 50%;' +
		
	'}';
    let ref = document.querySelector('script');
    ref.body.insertBefore(style, ref)

    
const photo = document.getElementById("photo");
const job = document.getElementById("job");

job.insertAdjacentElement('beforebegin', photo);


/*
const newDiv1 = document.querySelector("#photo");
//const qrCode = document.querySelector("#job");

//newDiv.appendChild(qrCode);

const job1 = document.getElementById("job");
document.body.insertBefore(newDiv1, job1); */