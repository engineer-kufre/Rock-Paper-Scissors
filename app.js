let userScore = 0;
let computerScore = 0;

// cashing the DOM
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('comp-score');
const scoreBoard_div = document.querySelector('.score-board');
const result_div = document.querySelector('.result');
const rock_div = document.getElementById('Rock');
const paper_div = document.getElementById('Paper');
const scissors_div = document.getElementById('Scissors');

// computer choice
function getComputerChoice() {
	const choices = ['Rock', 'Paper', 'Scissors'];
	const randomNumber = Math.floor(Math.random() * 3);
	return choices[randomNumber];
}

// scores and result message
function win(userChoice, computerChoice) {
	userScore++;
	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = computerScore;
	const smallUser = 'user'.fontsize(3).sub();
	const smallComp = 'comp'.fontsize(3).sub();
	result_div.innerHTML = `${userChoice}${smallUser} beats ${computerChoice.toLowerCase()}${smallComp}. You won!`;
	document.getElementById(userChoice).classList.add('green-glow');
	setTimeout(function() {document.getElementById(userChoice).classList.remove('green-glow')}, 300);
}

function lose(userChoice, computerChoice) {
	computerScore++;
	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = computerScore;
	const smallUser = 'user'.fontsize(3).sub();
	const smallComp = 'comp'.fontsize(3).sub();
	result_div.innerHTML = `${userChoice}${smallUser} loses to ${computerChoice.toLowerCase()}${smallComp}. You lost!`;
	document.getElementById(userChoice).classList.add('red-glow');
	setTimeout(function() {document.getElementById(userChoice).classList.remove('red-glow')}, 300);
}

function draw(userChoice, computerChoice) {
	const smallUser = 'user'.fontsize(3).sub();
	const smallComp = 'comp'.fontsize(3).sub();
	result_div.innerHTML = `${userChoice}${smallUser} equals ${computerChoice.toLowerCase()}${smallComp}. It's a draw!`;
	document.getElementById(userChoice).classList.add('blue-glow');
	setTimeout(function() {document.getElementById(userChoice).classList.remove('blue-glow')}, 300);
}

// user choice
function game(userChoice) {
	const userWins = ['RockScissors', 'PaperRock', 'ScissorsPaper'];
	const userLoses = ['RockPaper', 'PaperScissors', 'ScissorsRock'];
	const computerChoice = getComputerChoice();
	if (userWins.includes(userChoice + computerChoice)) {
		win(userChoice, computerChoice);
	} else if (userLoses.includes(userChoice + computerChoice)) {
		lose(userChoice, computerChoice);
	} else if (userChoice === computerChoice) {
		draw(userChoice, computerChoice);
	}
}

// event listeners
function main() {
	rock_div.addEventListener('click', function() {
		game('Rock');
	})
	paper_div.addEventListener('click', function() {
		game('Paper');
	})
	scissors_div.addEventListener('click', function() {
		game('Scissors');
	})
}

main();