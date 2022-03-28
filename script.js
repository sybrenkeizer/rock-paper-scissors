// Rock, paper and scissors game

let message = ''
let playerScore = 0;
let computerScore = 0;

// Ask to play the game
let agreeToPlay = confirm(`Would you like to play a game of "Rock, Paper and Scissors"?`);
if (agreeToPlay) {

  // Request choice tool
  function playRound() {
    let playerInput = prompt(`Please make your choice: "Rock", "Paper" or "Scissors"`)
    if (playerInput) {

      // Make sure input is correct
      let playerChoice = playerInput.trim().toLowerCase()
      if (playerChoice === `rock` || playerChoice === `paper` || playerChoice === `scissors`) {

        // Start with game
        function computerPlay() {
          let options = [`rock`, `paper`, `scissors`]
          let randomize = Math.floor(Math.random() * options.length)
          return options[randomize]
        }
        let computerChoice = computerPlay()
        if (playerChoice === computerChoice) {
          message = `Player: ${playerChoice}, Computer: ${computerChoice} -It's a tie!`;
        } else if (playerChoice === `rock` && computerChoice === `paper`) {
          message = `Player: ${playerChoice}, Computer: ${computerChoice} - You lose! Paper beats rock.`;
          computerScore++;
        } else if (playerChoice === `rock` && computerChoice === `scissors`) {
          message = `Player: ${playerChoice}, Computer: ${computerChoice} - You win! Rock beats scissors.`;
          playerScore++;
        } else if (playerChoice === `paper` && computerChoice === `scissors`) {
          message = `Player: ${playerChoice}, Computer: ${computerChoice} - You lose! scissors beats paper.`;
          computerScore++;
        } else if (playerChoice === `paper` && computerChoice === `rock`) {
          message = `Player: ${playerChoice}, Computer: ${computerChoice} - You win! paper beats rock.`;
          playerScore++;
        } else if (playerChoice === `scissors` && computerChoice === `rock`) {
          message = `Player: ${playerChoice}, Computer: ${computerChoice} - You lose! Rock beats scissors.`;
          computerScore++;
        } else if (playerChoice === `scissors` && computerChoice === `paper`) {
          message = `Player: ${playerChoice}, Computer: ${computerChoice} - You win! scissors beats paper.`;
          playerScore++;
        } else {
          message = `Player: ${playerChoice}, Computer: ${computerChoice} - ERROR: WHAT IS THIS`;
        }
      } else {
        alert(`You did not entered the correct tool, please try again or abort.`)
        // location.reload()
      }
    } else {
      // Cancel, esc or choose to not fill in field
      alert(`No problem, come back when you make up your mind`)
    }
  }
} else {
  // Press cancel or esc
  alert(`Oke, maybe next time`)
}

for (let i = 0; i < 5; i++) {
  playRound()
  console.log(message);
  console.log(`playerscore: ${playerScore}`);
  console.log(`computerscore: ${computerScore}`);
}

if (playerScore > computerScore) {
  console.log(`End of game, you have won with a score of ${playerScore}  against a computer score of ${computerScore}`);
} else if (computerScore > playerScore) {
  console.log(`End of game, you have lost with a score of ${playerScore}  against a computer score of ${computerScore}`);
} else if (computerScore === playerScore) {
  console.log(`End of game, it's a tie with you having a score of ${playerScore} against a computer score of ${computerScore}`);
}
