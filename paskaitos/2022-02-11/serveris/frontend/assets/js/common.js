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

/*
Sukurkite paveikslėlių galeriją pasitelkiant grid struktūrą. Galite naudoti 
papildomas bibliotekas arba CSS karkasus. 
Nuotraukos turi būti atvaizduojamos tvarkingai viena šalia kitos. 
Ant nuotraukos, patalpinkite autoriaus vardą ir pavardę, mažomis raidėmis, 
dešiniajame kampe. 
Nuotraukų kiekis nuo 20-ies.
Nuotraukos įkeliamos pasitelkiant šį API:
https://picsum.photos/
https://www.erikjo.com/work
https://picsum.photos/v2/list?page=1&limit=10
page=1&limit=10 :
page=1   - startas, nuo kiek reikia paimti
limit=10   - limitas, kiek duomenu (vnt item) reikia paimti (uzkrauti)


Papildomai:
Sukurkite "Infinite scroll" arba "Infinite load" funkcionalumą.
*/
let page = 1;
let notLoading = {loading: true};
//let limit = 10;   //kraunant kitus psl uzkrautu kitoki img kieki, pgl kintamaji 'limit'

const imageLoader = () => {
  //fetch("https://picsum.photos/v2/list?page="+page+"&limit="+limit)

  fetch("https://picsum.photos/v2/list?page="+page+"&limit=10")
    .then((response) => response.json())
    .then((jsonObjektas) => {
      //console.log(jsonObjektas);
      jsonObjektas.forEach((el, i) => {
        document.querySelector(".grid").innerHTML += `<div class="item"><img class="photo" src="${el.download_url}" alt="picture"/></div>`;
      });
      notLoading.loading = false;
    });
};
imageLoader();

document.querySelector(".load-more").addEventListener("click", () => {
  //console.log('clicked')  //spaudziam mygtuka narsyklej ir patikrinam konsolej, ar pajungtas eventListener
  page++; //paspaudus ant mygtuko uzkraus nuotraukas is vienu vnt didesnio psl
  //limit += 5;  //tiek vnt img padideja naujai paspaudus mygtuka
  imageLoader();
});


window.addEventListener("scroll", () => {
    //console.log("window.scrollY", window.scrollY);
  // let scroll = window.scrollY;
    //document.querySelector(".load-more").textContent=scroll;
  
    let btnPos = document.querySelector('.button-holder').offsetTop;
    
    if(window.scrollY >= btnPos && !notLoading.loading){
         page++;
         imageLoader();
         
    }
    

})
//console.log(window);