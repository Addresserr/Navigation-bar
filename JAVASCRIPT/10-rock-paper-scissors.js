 //to convert string to object use json.parse()
 let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
}
/*{
  wins: 0,
  losses: 0,
  ties: 0
};*/

updateScoreElement();


function playGame(playerMove) {
  const computerMove = pickComputerMove();
  let result ='';
  if (playerMove === 'rock'){
    if (computerMove === 'rock') {
      result = 'Tie.';
    }
    else if (computerMove === 'paper') {
      result = 'You lose.';
    }
    else if (computerMove === 'scissors') {
      result = 'You win.';
    }
  }

  else if (playerMove === 'paper'){
    if (computerMove === 'rock') {
        result = 'You win.';
    }
    else if (computerMove === 'paper') {
      result = 'Tie.';
    }
    else if (computerMove === 'scissors') {
      result = 'You lose.';
    }
  }

  else if (playerMove === 'scissors') {
    if (computerMove === 'rock') {
    result = 'You lose.';
  }
  else if (computerMove === 'paper') {
    result = 'You win.';
  }
  else if (computerMove === 'scissors') {
    result = 'Tie.';
  }
  }
  
  if (result === 'You win.') {
    score.wins++;
  }
  else if (result === 'You lose.') {
    score.losses++;
  }
  else if (result === 'Tie.') {
    score.ties++;
  }

  //localStorage only supports strings
  //to convert object to string use json.stringify
  localStorage.setItem('score', JSON.stringify(score));

  updateScoreElement();


  document.querySelector('.js-result').innerHTML = result;

  document.querySelector('.js-moves').innerHTML = `You
<img src="${playerMove}-emoji.png" class="move-icon">
<img src="${computerMove}-emoji.png" class="move-icon">
Computer`;



/*  alert(`You picked ${playerMove}. Computer picked ${computerMove} ${result}
Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`);
  */
}

function updateScoreElement() {
  document.querySelector('.js-score')
   .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}


let computerMove = '';

function pickComputerMove() {
  const randomNumber = Math.random();

  if (randomNumber >= 0 && randomNumber < 1/3) {
    computerMove = 'rock';
  }
  else if  (randomNumber >= 1/3 && randomNumber < 2/3) {
    computerMove = 'paper';
  }
  else if  (randomNumber >= 2/3 && randomNumber < 1) {
    computerMove = 'scissors';
  }
return computerMove;
}