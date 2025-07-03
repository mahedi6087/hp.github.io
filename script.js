function choose(choice) {
  const scene = document.getElementById("scene");

  if (choice === "talk") {
    scene.innerHTML = `
      <img src="nova.jpg" class="character-img" alt="Nova">
      <p>Foysal says "Hi Nova..." 😅</p>
      <p>Nova's brother sees him and comes running! 😡</p>
      <button onclick="choose('run')">Run away!</button>
      <button onclick="choose('fight')">Stay and fight</button>
    `;
  }

  else if (choice === "pray") {
    scene.innerHTML = `
      <img src="foysal.jpg" class="character-img" alt="Foysal">
      <p>Foysal goes inside the mosque and prays sincerely. 😇</p>
      <p>He feels peace... but Nova walks away. 😢</p>
      <button onclick="restart()">Restart</button>
    `;
  }

  else if (choice === "run") {
    scene.innerHTML = `
      <img src="foysal.jpg" class="character-img" alt="Foysal">
      <p>Foysal runs... slips on a banana peel! 🍌</p>
      <p>Game Over!</p>
      <button onclick="restart()">Try Again</button>
    `;
  }

  else if (choice === "fight") {
    scene.innerHTML = `
      <p>Foysal fights bravely... but Nova's brother hits him with a slipper! 🥿</p>
      <p>Game Over!</p>
      <button onclick="restart()">Try Again</button>
    `;
  }

  else if (choice === "restartTazrin") {
    scene.innerHTML = `
      <img src="tazrin.jpg" class="character-img" alt="Tazrin">
      <p>Foysal goes to meet Tazrin in the park.</p>
      <p>"Want to drink coffee with me?" ☕</p>
      <button onclick="choose('yesCoffee')">Yes</button>
      <button onclick="choose('noCoffee')">No</button>
    `;
  }

  else if (choice === "yesCoffee") {
    scene.innerHTML = `
      <p>They enjoy the coffee... and start dating. 💕</p>
      <p>Ending: Tazrin Path - Happy Love!</p>
      <button onclick="restart()">Play Again</button>
    `;
  }

  else if (choice === "noCoffee") {
    scene.innerHTML = `
      <p>Tazrin says, "Then go home!" 😤</p>
      <p>Foysal cries alone. 😭</p>
      <button onclick="restart()">Try Again</button>
    `;
  }
}

function restart() {
  const scene = document.getElementById("scene");
  scene.innerHTML = `
    <img src="foysal.jpg" class="character-img" alt="Foysal">
    <p>Foysal sees Nova near the mosque... What will he do?</p>
    <button onclick="choose('talk')">Try to talk to her</button>
    <button onclick="choose('pray')">Go inside to pray</button>
    <br><br>
    <button onclick="choose('restartTazrin')">💖 Meet Tazrin Instead</button>
  `;
}
