function createGame(player1, hour, player2, group) {
  let player1alt = player1.slice(-1) === "a" ? "da" : "do"
  let player2alt = player2.slice(-1) === "a" ? "da" : "do"

  return `   
    
<li>
<img src="./assets/flags/${player1}.svg" alt="Bandeira do ${player1}" />
<div class="stage">
<strong class="hour">${hour}</strong>
<strong class="group">Grupo ${group}</strong>
</div>
<img src="./assets/flags/${player2}.svg" alt="Bandeira do ${player2}" />
</li>
      

<div class="nome-times">
<h1>${player1}</h1>
<h1>${player2}</h1>
</div>

`
}

let delay = -0.4
function createCard(date, day, games) {
  delay = delay + 0.2

  return `
<div class="card" style="animation-delay:${delay}s">
<h2> ${date} <span> ${day} </span></h2>

<ul>
${games}
</ul>
</div>
`
}

document.querySelector("#cards").innerHTML = createCard(
  "26/11",
  "Sábado",
  createGame("tunisia", "07:00", "australia", "D") +
    createGame("france", "13:00", "denmark", "D") +
    createGame("poland", "10:00", "saudi arabia", "C") +
    createGame("argentina", "16:00", "mexico", "C")
)