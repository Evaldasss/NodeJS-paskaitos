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
    document.querySelector('#photo').innerHTML += `<img class="photo" src="${jsonObjektas.results[0].picture.medium}" alt="person"/>`;
    document.querySelector('#name').innerHTML += jsonObjektas.results[0].name.first + ' ' + jsonObjektas.results[0].name.last;
    document.querySelector('#phone').innerHTML += jsonObjektas.results[0].phone;
    document.querySelector('#cell').innerHTML += jsonObjektas.results[0].cell;
    document.querySelector('#email').innerHTML += jsonObjektas.results[0].email;
    document.querySelector('#street').innerHTML += jsonObjektas.results[0].location.street.number + jsonObjektas.results[0].location.street.name;
    document.querySelector('#country').innerHTML += jsonObjektas.results[0].location.city + ', ' + jsonObjektas.results[0].location.state + ' ' + jsonObjektas.results[0].location.postcode + ', ' + jsonObjektas.results[0].location.country;
});

