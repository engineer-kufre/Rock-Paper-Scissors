const userScore = 0;
const computerScore = 0;

// cashing the DOM
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('comp-score');
const scoreBoard_div = document.querySelector('.score-board');
const result_div = document.querySelector('.result');
const rock_div = document.getElementById('rock');
const paper_div = document.getElementById('paper');
const scissors_div = document.getElementById('scissors');

// computer choice
function getComputerChoice() {
	const choices = ['rock', 'paper', 'scissors'];
	const randomNumber = Math.floor(Math.random() * 3);
	return choices[randomNumber];
}

// user choice
function game(userChoice) {
	const userWins = ['rockscissors', 'paperrock', 'scissorspaper'];
	const userLoses = ['rockpaper', 'paperscissors', 'scissorsrock'];
	const computerChoice = getComputerChoice();
	if (userWins.includes(userChoice + computerChoice)) {
		console.log('USER WINS!');
	} else if (userLoses.includes(userChoice + computerChoice)) {
		console.log('USER LOSES!');
	} else if (userChoice === computerChoice) {
		console.log('DRAW');
	}
}

// event listeners
function main() {
	rock_div.addEventListener('click', function() {
		game('rock');
	})
	paper_div.addEventListener('click', function() {
		game('paper');
	})
	scissors_div.addEventListener('click', function() {
		game('scissors');
	})
}

main();