//console.log("app.js pajungtas");

const renewData = () => {
  fetch("http://localhost:3001") // puslapis, is kurio imama informacija
    .then((response) => response.json()) //json formato responsa konvertuoja i js objekta
    //console.log(response.json());       //zr. rezultata narsykles konsolej
    .then((jsonObjektas) => {
      //console.log(jsonObjektas.round.match);

      document.querySelector(
        ".round"
      ).innerText = `Round ${jsonObjektas.round}`;
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


//dinaminis variantas, rezultatas random, ne didejantis

const checkData = () => {
  fetch("http://localhost:3001/result")
    .then((response) => response.json())
    .then((jsonObjektas) => {
        document.querySelector(".time").innerHTML = jsonObjektas.time;
      /*
      document.querySelector(".f-scores").style.color = "#fff";
      document.querySelector(".s-scores").style.color = "#fff";

      document.querySelector(".f-scores").innerHTML = jsonObjektas.result.first;
      document.querySelector(".s-scores").innerHTML = jsonObjektas.result.second;
     
      if (jsonObjektas.result.first > jsonObjektas.result.second) {
        document.querySelector(".f-scores").style.color = "#00F2A7";
      } else {
        document.querySelector(".s-scores").style.color = "#00F2A7";
      }

       if(jsonObjektas.quarter === 1){
        document.querySelector(".match-stage").innerHTML = `${jsonObjektas.quarter}st quarter`;
       } else if (jsonObjektas.quarter === 2){
        document.querySelector(".match-stage").innerHTML = `${jsonObjektas.quarter}nd quarter`;
       }else if (jsonObjektas.quarter === 3){
        document.querySelector(".match-stage").innerHTML = `${jsonObjektas.quarter}rd quarter`;
       }else if (jsonObjektas.quarter === 4){
        document.querySelector(".match-stage").innerHTML = `${jsonObjektas.quarter}th quarter`;
       }
      //console.log(jsonObjektas.quarter);
      */
    });

  //console.log('test Zodis')
  setTimeout(() => {
    checkData();
  }, 60000);
};
checkData();
/*
document.querySelector(".button").addEventListener("click", () => {
  //console.log('clicked')  //spaudziam mygtuka narsyklej ir patikrinam konsolej, ar pajungtas eventListener
  checkData();
});
*/


// rezultatas pagal klase 'Krepsinis'
const play = () => {
    fetch("http://localhost:3001/checkscore")
      .then((response) => response.json())
      .then((jsonObjektas) => {
          console.log(jsonObjektas);
          console.log(jsonObjektas.kelinys);
          
        document.querySelector(".f-scores").style.color = "#fff";
        document.querySelector(".s-scores").style.color = "#fff";
  
        document.querySelector(".f-scores").innerHTML = jsonObjektas.komanda1;
        document.querySelector(".s-scores").innerHTML = jsonObjektas.komanda2;
        
  
        if(jsonObjektas.komanda1 === jsonObjektas.komanda2) {
            document.querySelector(".f-scores").style.color = "#fff";
            document.querySelector(".s-scores").style.color = "#fff";
        } else if (jsonObjektas.komanda1 > jsonObjektas.komanda2) {
          document.querySelector(".f-scores").style.color = "#00F2A7";
        } else {
          document.querySelector(".s-scores").style.color = "#00F2A7";
        }
  
         if(jsonObjektas.kelinys === 1){
          document.querySelector(".match-stage").innerHTML = `${jsonObjektas.kelinys}st quarter`;
         } else if (jsonObjektas.kelinys === 2){
          document.querySelector(".match-stage").innerHTML = `${jsonObjektas.kelinys}nd quarter`;
         }else if (jsonObjektas.kelinys === 3){
          document.querySelector(".match-stage").innerHTML = `${jsonObjektas.kelinys}rd quarter`;
         }else if (jsonObjektas.kelinys === 4){
          document.querySelector(".match-stage").innerHTML = `${jsonObjektas.kelinys}th quarter`;
         }
        //console.log(jsonObjektas.quarter);
      });
  
    //console.log('test Zodis')
    setTimeout(() => {
      play();
    }, 60000);

  };
  play();
  

  document.querySelector(".button").addEventListener("click", () => {
    //console.log('clicked')  //spaudziam mygtuka narsyklej ir patikrinam konsolej, ar pajungtas eventListener
    play();
  });