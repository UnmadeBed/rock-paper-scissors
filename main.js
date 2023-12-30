const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
	button.addEventListener('click', () => {
		console.log(button.id);
		// I want to trigger the game to start from here, so I think i should call the game function, passing the clicked button into it, which then passes the clicked button into the playRound function. Is this right?
		game(button.id);
	});
});

getComputerChoice = () => {
	const possibleHands = ['rock', 'paper', 'scissors'];

	let computerChoice = possibleHands[Math.floor(Math.random() * 3)];
	return computerChoice;
};

playRound = (button) => {
	const playerSelection = button;
	const computerSelection = getComputerChoice().toLowerCase();

	if (computerSelection === playerSelection) {
		console.log(
			`Play again, you both chose the same hand (${playerSelection})`
		);
		playRound(button);
	} else if (
		(computerSelection === 'rock' && playerSelection === 'scissors') ||
		(computerSelection === 'scissors' && playerSelection === 'paper') ||
		(computerSelection === 'paper' && playerSelection === 'rock')
	) {
		return `You lose!`;
	} else {
		return `You win!`;
	}
};

game = (button) => {
	let compScore = 0;
	let playerScore = 0;

	while (compScore < 5 && playerScore < 5) {
		let result = playRound(button);
		if (result === `You lose!`) {
			compScore += 1;
			console.log(`CPU: ${compScore} Player: ${playerScore}`);
		} else {
			console.log(`CPU: ${compScore} Player: ${playerScore}`);

			playerScore += 1;
		}
	}

	if (compScore == 5) {
		console.log('Computer wins!');
	} else if (playerScore == 5) {
		console.log('Player wins!');
	}
};

// game();
