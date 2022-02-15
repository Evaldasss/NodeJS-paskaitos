//console.log("testinu hello");

const getWeather = () => {
  fetch("http://localhost:3001") // puslapis, is kurio imama informacija
    .then((response) => response.json()) //json formato responsa konvertuoja i js objekta
    //console.log(response.json());       //zr. rezultata narsykles konsolej
    .then((jsonObjektas) => {
      //console.log(jsonObjektas.status.sun.img);
      if (jsonObjektas.degree > 17) {
        document.querySelector(".img").innerHTML = `<img class="sun-cloud" alt="sun" src="${jsonObjektas.status.sun.img}">`;
        //document.querySelector(".img").innerHTML = `<img class="sun-cloud" alt="sun" src="../img/sunny.jpg">`;  // img is frontendo
        document.querySelector(".status").innerHTML = jsonObjektas.status.sun.stat;
      } else {
        document.querySelector(".img").innerHTML = `<img class="sun-cloud" alt="cloud" src="${jsonObjektas.status.clouds.img}">`;
        //document.querySelector(".img").innerHTML = `<img class="sun-cloud" alt="cloud" src="../img/broken-clouds.jpg">`;  // img is frontendo
        document.querySelector(".status").innerHTML = jsonObjektas.status.clouds.stat;
        }

      document.querySelector(".degrees").innerHTML = `${jsonObjektas.degree}° C`;
      document.querySelector(".feeling").innerHTML = `${jsonObjektas.feeling}°C`;
      document.querySelector(".humidity").innerHTML = `${jsonObjektas.humidity}%`;
    });
};
getWeather();

document.querySelector(".get-weather").addEventListener("click", () => {
  //console.log('clicked')  //spaudziam mygtuka narsyklej ir patikrinam konsolej, ar pajungtas eventListener
  getWeather();
});
