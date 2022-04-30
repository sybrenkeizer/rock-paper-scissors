// alert(`let's play Rock, Paper & Scissor!\nThe first player to score 5 points wins the game`);

const playerOptions = document.querySelectorAll('.choice')
const player = document.querySelector('.human__score');
const computer = document.querySelector('.computer__score');
const roundResult = document.querySelector('.messageboard__round-result');
const computerOptions = ['rock', 'paper', 'scissor'];
const modal = document.querySelector('.modal');
const modalMessage = document.querySelector('.modal__message');
const modalBtn = document.querySelector('.modal__button')

let playerScore = 0;
let computerScore = 0;


playerOptions.forEach(playerOption => {
  playerOption.addEventListener('click', function(e) {

    const randomNumber = Math.floor(Math.random() * computerOptions.length);
    const computerChoice = computerOptions[randomNumber];
    const getOption = e.target.attributes.value.textContent

    if (
    getOption === 'rock' && computerChoice === 'rock' ||
    getOption === 'paper' && computerChoice === 'paper' ||
    getOption === 'scissor' && computerChoice === 'scissor') {
      roundResult.innerHTML = `Computer throws a ${computerChoice}<br>It's a tie, try again`;
    }
    else if (
    getOption === 'rock' && computerChoice === 'paper' ||
    getOption === 'paper' && computerChoice === 'scissor' ||
    getOption === 'scissor' && computerChoice === 'rock') {
      roundResult.innerHTML = `Computer throws a ${computerChoice}<br>You lose this round!`;
      computerScore++;
    }
    else if (
    getOption === 'rock' && computerChoice === 'scissor' ||
    getOption === 'scissor' && computerChoice === 'paper' ||
    getOption === 'paper' && computerChoice === 'rock' ) {
      roundResult.innerHTML = `Computer throws a ${computerChoice}<br>You win this round!`;
      playerScore++;
    }
    player.innerHTML = playerScore;
    computer.innerHTML = computerScore;

    if (playerScore === 5 && computerScore < 5) {
      modal.classList.add('modal--visible');
      modalMessage.textContent = 'You win!';
    } else if (computerScore === 5 && playerScore < 5) {
      modal.classList.add('modal--visible');
      modalMessage.textContent = 'You lose!';
    }

    modalBtn.addEventListener('click', function() {
      modal.classList.remove('modal--visible');
      playerScore = 0;
      player.innerHTML = playerScore;
      computerScore = 0;
      computer.innerHTML = computerScore;
      roundResult.textContent = '';
    })

  })
})

console.log(playerScore);
// End game modal












//
// let message = ''
// let playerScore = 0;
// let computerScore = 0;
//
// // Ask to play the game
// let agreeToPlay = confirm(`Would you like to play a game of "Rock, Paper and
//   Scissors"?`);
// if (agreeToPlay) {
//
//   // Request choice tool
//   function playRound() {
//     let playerInput = prompt(`Please make your choice: "Rock", "Paper" or
//       "Scissors"`)
//     if (playerInput) {
//
//       // Make sure input is correct
//       let playerChoice = playerInput.trim().toLowerCase()
//       if (playerChoice === `rock` ||
//         playerChoice === `paper` ||
//         playerChoice === `scissors`) {
//
//         // Start with game
//         function computerPlay() {
//           let options = [`rock`, `paper`, `scissors`]
//           let randomize = Math.floor(Math.random() * options.length)
//           return options[randomize]
//         }
//
//         // Save random computer value
//         let computerChoice = computerPlay()
//
//         // Match draws between player and computer
//         if (playerChoice === computerChoice) {
//           message = `Player: ${playerChoice}, Computer: ${computerChoice}
//             -It's a tie!`;
//         } else if (playerChoice === `rock` && computerChoice === `paper`) {
//           message = `Player: ${playerChoice}, Computer: ${computerChoice}
//             - You lose! Paper beats rock.`;
//           computerScore++;
//         } else if (playerChoice === `rock` && computerChoice === `scissors`) {
//           message = `Player: ${playerChoice}, Computer: ${computerChoice}
//             - You win! Rock beats scissors.`;
//           playerScore++;
//         } else if (playerChoice === `paper` && computerChoice === `scissors`) {
//           message = `Player: ${playerChoice}, Computer: ${computerChoice}
//           - You lose! scissors beats paper.`;
//           computerScore++;
//         } else if (playerChoice === `paper` && computerChoice === `rock`) {
//           message = `Player: ${playerChoice}, Computer: ${computerChoice}
//             - You win! paper beats rock.`;
//           playerScore++;
//         } else if (playerChoice === `scissors` && computerChoice === `rock`) {
//           message = `Player: ${playerChoice}, Computer: ${computerChoice}
//             - You lose! Rock beats scissors.`;
//           computerScore++;
//         } else if (playerChoice === `scissors` && computerChoice === `paper`) {
//           message = `Player: ${playerChoice}, Computer: ${computerChoice}
//             - You win! scissors beats paper.`;
//           playerScore++;
//         } else {
//           message = `Player: ${playerChoice}, Computer: ${computerChoice}
//             - ERROR: WHAT IS THIS`;
//         }
//
//       // Incorrect input
//       } else {
//         alert(`You did not entered the correct tool, please try again or
//           abort.`)
//       }
//
//     // Cancel, esc or choose to not fill in field
//     } else {
//       alert(`No problem, come back when you make up your mind`)
//     }
//   }
//
// // Not willing to play game on initial request
// } else {
//   alert(`Oke, maybe next time`)
// }
//
// // 5 matches
// for (let i = 0; i < 5; i++) {
//   playRound()
//   console.log(message);
//   console.log(`playerscore: ${playerScore}`);
//   console.log(`computerscore: ${computerScore}`);
// }
//
// // Communicate final score in different outcomes
// if (playerScore > computerScore) {
//   console.log(`End of game, you have won with a score of ${playerScore}
//     against a computer score of ${computerScore}`);
// } else if (computerScore > playerScore) {
//   console.log(`End of game, you have lost with a score of ${playerScore}
//     against a computer score of ${computerScore}`);
// } else if (computerScore === playerScore) {
//   console.log(`End of game, it's a tie with you having a score of
//     ${playerScore} against a computer score of ${computerScore}`);
// }
