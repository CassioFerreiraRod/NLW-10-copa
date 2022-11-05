function creategame(player1, hour, player2) {
  return `
  <li>
     <img src="./ASSETS/icon-${player1}.svg" alt="Bandeira do Brasil" />
     <strong>${hour}</strong>
     <img src="./ASSETS/icon-${player2}.svg" alt="Bandeira da Servia" />
  </li>
  `
}

let delay = -0.4;
function createCards(date, day, games) {
  delay = delay + 0.4
  return `
   <div class="card" style="animation-delay: ${delay}s">  
          <h2>${date} <span>${day}</span></h2>
          <ul>
          ${games}
          </ul>
    </div>
  `
}

document.querySelector("#app").innerHTML = `
   <header>
        <img src="ASSETS/LOGO.SVG" alt="" />
      </header>

      <main id="cards">
      ${createCards(
        "24/11",
        "quinta",
        creategame("switzerland", "07:00", "cameroon") +
          creategame("uruguay", "10:00", "southKorea") +
          creategame("portugal", "13:00", "ghana") +
          creategame("brazil", "16:00", "serbia")
      )}
      ${createCards(
        "28/11",
        "segunda",
        creategame("cameroon", "07:00", "serbia") +
          creategame("southKorea", "10:00", "ghana") +
          creategame("brazil", "13:00", "switzerland") +
          creategame("portugal", "16:00", "uruguay")
      )}
      ${createCards("02/12","sexta",
      creategame("southKorea", "07:00", "portugal") +
      creategame("ghana", "10:00", "uruguay") +
      creategame("serbia", "13:00", "switzerland") +
      creategame("brazil", "16:00", "cameroon"))}
      </main>
`
