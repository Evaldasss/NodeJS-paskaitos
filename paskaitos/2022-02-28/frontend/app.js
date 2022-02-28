/*const play = () => {
  fetch("http://localhost:3001/checkscore")
    .then((response) => response.json())
    .then((jsonObjektas) => {
      //console.log("checkscore", jsonObjektas);
      //console.log(jsonObjektas.kelinys);
      document.querySelector(".f-scores").style.color = "#fff";
      document.querySelector(".s-scores").style.color = "#fff";
      document.querySelector(".f-scores").innerHTML = jsonObjektas.rezultatas.komanda1;
      document.querySelector(".s-scores").innerHTML = jsonObjektas.rezultatas.komanda2;
      //document.querySelector(".one").innerHTML = `<img class="logo one" src="${jsonObjektas.obj.logo.flogo}" alt="logo">`;
      //document.querySelector(".two").innerHTML = `<img class="logo two" src="${jsonObjektas.obj.logo.slogo}" alt="logo">`;
      if (jsonObjektas.komanda1 === jsonObjektas.rezultatas.komanda2) {
        document.querySelector(".f-scores").style.color = "#fff";
        document.querySelector(".s-scores").style.color = "#fff";
      } else if (jsonObjektas.komanda1 > jsonObjektas.rezultatas.komanda2) {
        document.querySelector(".f-scores").style.color = "#00F2A7";
      } else {
        document.querySelector(".s-scores").style.color = "#00F2A7";
      }
      if (jsonObjektas.rezultatas.kelinys === 1) {
        document.querySelector(".match-stage").innerHTML = `${jsonObjektas.rezultatas.kelinys}st quarter`;
      } else if (jsonObjektas.rezultatas.kelinys === 2) {
        document.querySelector(".match-stage").innerHTML = `${jsonObjektas.rezultatas.kelinys}nd quarter`;
      } else if (jsonObjektas.rezultatas.kelinys === 3) {
        document.querySelector(".match-stage").innerHTML = `${jsonObjektas.rezultatas.kelinys}rd quarter`;
      } else if (jsonObjektas.rezultatas.kelinys === 4) {
        document.querySelector(".match-stage").innerHTML = `${jsonObjektas.rezultatas.kelinys}th quarter`;
      }
      //console.log(jsonObjektas.quarter);
    });
  //console.log('test Zodis')
  setTimeout(() => {
    play();
  }, 6000);
};
play();


///////////////////////////////////////////////////
document.querySelector(".button").addEventListener("click", () => {
  //console.log('clicked')  //spaudziam mygtuka narsyklej ir patikrinam konsolej, ar pajungtas eventListener
  play();
});


*/
///////////////////////////////////////////////////
document.querySelector(".renew").style.display = "none";
document.querySelector(".one").style.display = "none";
document.querySelector(".two").style.display = "none";
document.querySelector(".match-stage").style.display = "none";
document.querySelector(".scores").style.display = "none";

// mygtukas "Naujos rungtynės" . Atidaro didele forma.
// Ja zpildzius ir paspaudus sita mygtuka, pasinaikina inputo reiksmes.
document.querySelector(".new-match").addEventListener("click", () => {
  //console.log("test");
  //if (document.querySelector("#search-form").style.display === "none") {
  document.querySelector("#search-form").style.display = "block";
  // } else {
  //   document.querySelector("#search-form").style.display = "none";
  //}

  document.querySelector('#search-form input[name="round"]').value = "";
  document.querySelector('#search-form input[name="date"]').value = "";
  document.querySelector('#search-form select[name="location"]').value = "";
  document.querySelector('#search-form input[name="time"]').value = "";
  document.querySelector('#search-form select[name="team-1"]').value = "";
  document.querySelector('#search-form select[name="team-2"]').value = "";
  document.querySelector(".renew").innerHTML = "";
  document.querySelector(".round").innerText = "";
  document.querySelector(".date").innerHTML = "";
  document.querySelector(".stadium").innerHTML = "";
  document.querySelector(".time").innerHTML = "";
  document.querySelector(".bottom").style.display = "none";
});

/*
///////////////////////////////////////////////////
// mygtukas "Search"  Uzpildzius forma, paspaudus 'search', atvaizduoja visa input info narsykleje
document.querySelector("#search").addEventListener("click", (event) => {
  if (document.querySelector("#search-form").style.display === "block") {
    document.querySelector("#search-form").style.display = "none";
  } else {
    document.querySelector("#search-form").style.display = "display";
  }
  event.preventDefault(); //skirtas sustabdyti standartini HTML elementu veikima
  let round = document.querySelector('#search-form input[name="round"]').value; //paimama ivesta i input reiksme
  document.querySelector('#search-form input[name="round"]').value = ""; //padarom tuscias reiksmes, kad paspaudus mygtuka "SEARCH" visos input reiksmes "nusinulintu'
  let date = document.querySelector('#search-form input[name="date"]').value;
  document.querySelector('#search-form input[name="date"]').value = "";
  let loc = document.querySelector('#search-form select[name="location"]').value;
  document.querySelector('#search-form select[name="location"]').value = "";
  let time = document.querySelector('#search-form input[name="time"]').value;
  document.querySelector('#search-form input[name="time"]').value = "";
  let team1 = document.querySelector('#search-form select[name="team-1"]).value;
  document.querySelector('#search-form select[name="team-1"]').value = "";
  let team2 = document.querySelector('#search-form select[name="team-2"]').value;
  document.querySelector('#search-form select[name="team-2"]').value = "";

  fetch("http://localhost:3001/post-request", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ time }),
  })
    .then((resp) => resp.json())
    .then((resp) => {
      if (resp.pavyko) {
        //console.log("resp", resp);
        document.querySelector(".round").innerText = `Round ${round}`;
        document.querySelector(".date").innerHTML = date;
        document.querySelector(".stadium").innerHTML = loc;
        document.querySelector(".time").innerHTML = time;
        if (team1 === "Olympiacos Piraeus") {
          document.querySelector(".one").innerHTML = `<img class="logo" src="${resp.obj.logo.flogo}" alt="logo">`;
          document.querySelector(".two").innerHTML = `<img class="logo" src="${resp.obj.logo.slogo}" alt="logo">`;
        } else {
          document.querySelector(".two").innerHTML = `<img class="logo" src="${resp.obj.logo.flogo}" alt="logo">`;
          document.querySelector(".one").innerHTML = `<img class="logo" src="${resp.obj.logo.slogo}" alt="logo">`;
        }
        document.querySelector(".first").innerHTML = team1;
        document.querySelector(".second").innerHTML = team2;
        document.querySelector(".bottom").style.display = "flex";
        document.querySelector(".renew").style.display = "none";
        document.querySelector(".one").style.display = "block";
        document.querySelector(".two").style.display = "block";
        document.querySelector(".match-stage").style.display = "block";
        document.querySelector(".scores").style.display = "flex";
        document.querySelector(".message").style.display = "none";
      } else {
        document.querySelector(".message").innerHTML = `<h1>${resp.message}`;
        document.querySelector(".top-line").style.display = "none";
        //document.querySelector(".search").style.display = "block";
      }
    });
});
*/

/*
///////////////////////////////////////////////////
//mygtukas "Save"  Mazoje formoje suvedus duomenis.
document.querySelector("#save-data").addEventListener("click", (event) => {
  event.preventDefault();
  // let round = document.querySelector('#search-form input[name="round"]').value;
  // let date = document.querySelector('#search-form input[name="date"]').value;
  // let loc = document.querySelector('#search-form select[name="location"]').value;
  // let time = document.querySelector('#search-form input[name="time"]').value;
  // let team1 = document.querySelector('#search-form select[name="team-1"]').value;
  // let team2 = document.querySelector('#search-form select[name="team-2"]').value;
  let newDate = document.querySelector('#nauja-forma input[name="date"]').value;
  fetch("http://localhost:3001/save-request", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    // body: JSON.stringify({ round, date, loc, time, team1, team2 }),
    body: JSON.stringify({ newDate }),
  })
    .then((resp) => resp.json())
    .then((resp) => {
      console.log(resp);
    });
});
*/

///////////////////bandau paimti visas input reiksmes is dideles formos////////////////////////////////
//mygtukas didelej formoj "Search"
document.querySelector("#search").addEventListener("click", (event) => {
  event.preventDefault();
  let round = document.querySelector('#search-form input[name="round"]').value;
  let date = document.querySelector('#search-form input[name="date"]').value;
  let loc = document.querySelector(
    '#search-form select[name="location"]'
  ).value;
  let time = document.querySelector('#search-form input[name="time"]').value;
  let team1 = document.querySelector(
    '#search-form select[name="team-1"]'
  ).value;
  let team2 = document.querySelector(
    '#search-form select[name="team-2"]'
  ).value;
  //console.log(round);
  fetch("http://localhost:3001/save-request", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ round, date, loc, time, team1, team2 }),
  })
    .then((resp) => resp.json())
    .then((resp) => {
      //console.log(resp);
      if (resp.status == "success") {
        displayList(JSON.parse(resp.jsonResp));
      }
    });
});

/*
///////////////////////////////////////////////////
// mygtukas "Rodyti registruotas rungtynes"  SU MYGTUKU Atvaizduoja narsyklej sarasa rungtyniu, pagal "Search" is dideles formos suvestus input
document.querySelector(".show-matches").addEventListener("click", (event) => {
  event.preventDefault();

  fetch("http://localhost:3001/show-matches")
    .then((resp) => resp.json())
    .then((resp) => {
      console.log("FETCH resp", resp);

      if (resp.result) {
        alert(resp.message);
        // document.querySelector(".not-found").innerHTML = resp.message;
      } else {
        resp.info.forEach((el) => {
         
          document.querySelector(".search-result-list").innerHTML += 
           `<div class="row">            
              <div class="teams">${el.team1} vs ${el.team2}</div>
              <div class="date-time">${el.date} ${el.time}</div>
              <div class="round-nr">Round: ${el.round}</div>
              <div class="btns">
                <button class="edit">Redaguoti</button>
                <button class="delete">Ištrinti</button>
              </div>
            </div>`;
        });
      }
    });
});
*/

///////////////////////////////////////////////////
// "Rodyti registruotas rungtynes" BE MYGTUKO Atvaizduoja narsyklej sarasa rungtyniu, pagal "Search" is dideles formos suvestus input
//Rezultata paima su backende aprasytu "app.get("/show-matches"..)" metodu
//TURI ALERT:   alert(el.getAttribute("data-id"));
/*
let vidus = "";

fetch("http://localhost:3001/show-matches")
  .then((resp) => resp.json())
  .then((resp) => {
    //console.log("FETCH resp", resp); //gaunamas is backend grazinamas rezultatas

    if (resp.result) {
      alert(resp.message);
      // document.querySelector(".not-found").innerHTML = resp.message;
    } else {
      resp.info.forEach((el) => {
               vidus += `<tr>
                <td>${el.id}</td>
                <td>${el.team1} vs ${el.team2}</td>
                <td>${el.date}${el.time}</td>
                <td>${el.round}</td>
                <td><button data-id="${el.id}" class="delete">Delete</button></td>
                </tr>`;
        });

        let table = `<table>
            <tbody>
                ${vidus}
            </tbody>
        </table>`;

        document.querySelector(".search-result-list").innerHTML = table;
        document.querySelectorAll(".delete").forEach((el) => {
          el.addEventListener("click", () => {
            alert(el.getAttribute("data-id"));
          });
        });
      }
  });
*/

///////////////////////////////////////////////////
// siunciamas i backend identifikatorius 'id' (ta pati fetch nuo 256eilutes)
// ISTRINAMAS OBJEKTAS is duomenu failo
document.querySelector(".show-matches").addEventListener("click", (event) => {
  event.preventDefault();

  fetch("http://localhost:3001/show-matches")
    .then((resp) => resp.json())
    .then((resp) => {
      console.log("FETCH resp", resp); //gaunamas is backend grazinamas rezultatas
      displayList(resp);
    });
});

const displayList = (resp) => {
  let vidus = "";
  // if (resp.result) {
  //   alert(resp.message);
  //   // document.querySelector(".not-found").innerHTML = resp.message;
  // } else {

  resp.info.forEach((el) => {
    vidus += `<tr>
                <td>${el.id}</td>
                <td>${el.team1} vs ${el.team2}</td>
                <td>${el.date}${el.time}</td>
                <td>${el.round}</td>
                <td><button data-id="${el.id}" class="edit">Edit</button></td>
                <td><button data-id="${el.id}" class="delete">Delete</button></td>
                </tr>`;
  });

  let table = `<table>
            <tbody>
                ${vidus}
            </tbody>
        </table>`;

  document.querySelector(".search-result-list").innerHTML = table;

  // DUOMENU ISTRYNIMAS ***************************
  document.querySelectorAll(".delete").forEach((el) => {
    el.addEventListener("click", (event) => {
      event.preventDefault();

      let id = el.getAttribute("data-id");

      fetch(`http://localhost:3001/${id}`, {
        method: "DELETE",
      })
        .then((resp) => resp.json())
        .then((resp) => {
          console.log("F2 response", resp);
          if (resp.status === "success") {
            displayList(JSON.parse(resp.jsonResp));
          }
        });
    });
  });

  // DUOMENU REDAGAVIMAS ***************************
  document.querySelectorAll(".edit").forEach((el) => {
    el.addEventListener("click", (event) => {
      event.preventDefault();

      let id = el.getAttribute("data-id");

      fetch(`http://localhost:3001/get-match/${id}`)
        .then((resp) => resp.json())
        .then((resp) => {
          //console.log(resp);
          displayList(resp);
        });
    });
  });
};

fetch("http://localhost:3001/show-matches")
  .then((resp) => resp.json())
  .then((resp) => {
    displayList(resp);
  });

///////////////////////////////////////////////////
//tikrinam ar yra failas duomenu saugojimui
/*
  document.querySelector(".check-file").addEventListener("click", (event) => {
    event.preventDefault();
  
    fetch("http://localhost:3001/check-file")
      .then((resp) => resp.json())
      .then((resp) => {
        console.log(resp);
      });
  });
  */
