const buttons = document.querySelectorAll('button');
const btnContainer = document.querySelector('.btn-container');
const results = document.querySelector('.results');
const scoreDisplay = document.querySelector('.score');
const displaySelections = document.createElement('p');

let playerScore = 0;
let compScore = 0;

const updateScore = () => {
	scoreDisplay.textContent = `Player: ${playerScore} | CPU: ${compScore}`;
};

buttons.forEach((button) => {
	button.addEventListener('click', () => {
		const btnPressed = button.id;
		const roundResult = playRound(btnPressed);

		if (roundResult === 'win') {
			playerScore++;
		} else if (roundResult === 'lose') {
			compScore++;
		}

		updateScore();

		if (compScore === 5) {
			btnContainer.textContent = 'Computer wins!';
			results.textContent = '';
			scoreDisplay.textContent = `Final Scores - 
			Player: ${playerScore} | CPU: ${compScore}`;
		} else if (playerScore === 5) {
			btnContainer.textContent = 'Player wins!';
			results.textContent = '';
			scoreDisplay.textContent = `Final Scores - 
			Player: ${playerScore} | CPU: ${compScore}`;
		}
	});
});

getComputerChoice = () => {
	const possibleHands = ['rock', 'paper', 'scissors'];

	let computerChoice = possibleHands[Math.floor(Math.random() * 3)];
	return computerChoice;
};

playRound = (btnPressed) => {
	const playerSelection = btnPressed;
	const computerSelection = getComputerChoice().toLowerCase();

	console.log(`Player: ${playerSelection}, CPU: ${computerSelection}`);

	if (results.hasChildNodes()) {
		results.removeChild(results.firstChild);
	}
	displaySelections.textContent = `Player: ${playerSelection}, CPU: ${computerSelection}`;
	results.appendChild(displaySelections);

	if (computerSelection === playerSelection) {
		return `draw`;
	} else if (
		(computerSelection === 'rock' && playerSelection === 'scissors') ||
		(computerSelection === 'scissors' && playerSelection === 'paper') ||
		(computerSelection === 'paper' && playerSelection === 'rock')
	) {
		return `lose`;
	} else {
		return `win`;
	}
};
