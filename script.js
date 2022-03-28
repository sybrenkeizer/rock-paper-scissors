// Ask to play the game
let agreeToPlay = confirm(`Would you like to play a game of "Rock, Paper and Scissors"?`);
if (agreeToPlay) {
  // Request choice tool
  let playerChoice = prompt(`Please make your choice: "Rock", "Paper" or "Scissors"`)
  if (playerChoice) {
    // Make sure input is correct
    if (playerChoice === `Rock` || playerChoice === `Paper` || playerChoice === `Scissors`) {
      // Start with game
      document.write(`start game`)

    } else {
      alert(`You did not entered the correct tool, please try again or abort.`)
      location.reload()
    }
  } else {
    // Cancel, esc or choose to not fill in field
    alert(`No problem, come back when you make up your mind`)
  }
} else {
  // Press cancel or esc
  alert(`Oke, maybe next time`)
}
