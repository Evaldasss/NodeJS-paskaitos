document.querySelector(".renew").style.display = "none";
document.querySelector(".one").style.display = "none";
document.querySelector(".two").style.display = "none";
document.querySelector(".match-stage").style.display = "none";


document.querySelector(".start-match").addEventListener("click", () => {
  //console.log("test");
  //if (document.querySelector("#naujas-macas").style.display === "none") {
    document.querySelector("#naujas-macas").style.display = "block";
 // } else {
 //   document.querySelector("#naujas-macas").style.display = "none";
  //}
  
  document.querySelector('#naujas-macas input[name="round"]').value = "";
  document.querySelector('#naujas-macas input[name="date"]').value = "";
  document.querySelector('#naujas-macas select[name="location"]').value = "";
  document.querySelector('#naujas-macas input[name="time"]').value = "";
  document.querySelector('#naujas-macas select[name="team-1"]').value = "";
  document.querySelector('#naujas-macas select[name="team-2"]').value = "";
  document.querySelector(".renew").innerHTML = "";

  document.querySelector(".round").innerText = '';
  document.querySelector(".date").innerHTML = '';
  document.querySelector(".stadium").innerHTML = '';
  document.querySelector(".time").innerHTML = '';
  document.querySelector(".bottom").style.display = "none";
});



document.querySelector("#run-match").addEventListener("click", (event) => {
  if (document.querySelector("#naujas-macas").style.display === "block") {
    document.querySelector("#naujas-macas").style.display = "none";
  }
  event.preventDefault();

  let round = document.querySelector('#naujas-macas input[name="round"]').value;
  document.querySelector('#naujas-macas input[name="round"]').value = "";
  let date = document.querySelector('#naujas-macas input[name="date"]').value;
  document.querySelector('#naujas-macas input[name="date"]').value = "";
  let loc = document.querySelector('#naujas-macas select[name="location"]').value;
  document.querySelector('#naujas-macas select[name="location"]').value = "";
  let time = document.querySelector('#naujas-macas input[name="time"]').value;
  document.querySelector('#naujas-macas input[name="time"]').value = "";
  let team1 = document.querySelector('#naujas-macas select[name="team-1"]').value;
  document.querySelector('#naujas-macas select[name="team-1"]').value = "";
  let team2 = document.querySelector('#naujas-macas select[name="team-2"]').value;
  document.querySelector('#naujas-macas select[name="team-2"]').value = "";

  fetch("http://localhost:3001/post-request", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ round, date, loc, time, team1, team2 }),
  })
    .then((resp) => resp.json())
    .then((resp) => {
      console.log(resp);
      document.querySelector(".round").innerText = `Round ${resp.round}`;
      document.querySelector(".date").innerHTML = resp.date;
      document.querySelector(".stadium").innerHTML = resp.loc;
      document.querySelector(".time").innerHTML = resp.time;
      document.querySelector(".first").innerHTML = resp.team1;
      document.querySelector(".second").innerHTML = resp.team2;
      document.querySelector(".bottom").style.display = "flex";
      document.querySelector(".renew").style.display = "none";
      document.querySelector(".one").style.display = "block";
      document.querySelector(".two").style.display = "block";
      document.querySelector(".match-stage").style.display = "block";

    /*  if(team1 !== 'Olympiacos Piraeus') {
        document.querySelector(".one").innerHTML = `<img src="../img/Istanbul.png" alt="logo">`;
      }
      if(team2 !== 'Anadolu Efes Istanbul') {
        document.querySelector(".two").innerHTML = `<img src="../img/Olympiacos.png" alt="logo">`;
      } */
    });
});
