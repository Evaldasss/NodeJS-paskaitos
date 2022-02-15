console.log("app.js pajungtas");

const renewData = () => {
  fetch("http://localhost:3001") // puslapis, is kurio imama informacija
    .then((response) => response.json()) //json formato responsa konvertuoja i js objekta
    //console.log(response.json());       //zr. rezultata narsykles konsolej
    .then((jsonObjektas) => {
      console.log(jsonObjektas.round.match);

      document.querySelector(".round").innerText = `Round ${jsonObjektas.round}`;
      document.querySelector(".match-stage").innerHTML = jsonObjektas.quarter.final.toUpperCase();
      document.querySelector(".date").innerHTML = jsonObjektas.date;

      document.querySelector(".stadium").innerHTML = jsonObjektas.stadium;
      document.querySelector(".time").innerHTML = jsonObjektas.time;
      document.querySelector(".first").innerHTML = jsonObjektas.team.first;
      document.querySelector(".second").innerHTML = jsonObjektas.team.second;

      document.querySelector(".f-scores").innerHTML = jsonObjektas.result.first;
      document.querySelector(".s-scores").innerHTML = jsonObjektas.result.second;
    });
};
renewData();

document.querySelector(".button").addEventListener("click", () => {
  //console.log('clicked')  //spaudziam mygtuka narsyklej ir patikrinam konsolej, ar pajungtas eventListener
  
  renewData();
});
