getComputerChoice = () => {
	const possibleHands = ['rock', 'paper', 'scissors'];

	let computerChoice = possibleHands[Math.floor(Math.random() * 3)];
	return computerChoice;
};

playRound = () => {
	const playerSelection = prompt('Make a choice!').toLowerCase();
	const computerSelection = getComputerChoice().toLowerCase();

	if (computerSelection === playerSelection) {
		console.log(
			`Play again, you both chose the same hand (${playerSelection})`
		);
		playRound();
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

game = () => {
	let compScore = 0;
	let playerScore = 0;

	while (compScore < 5 && playerScore < 5) {
		let result = playRound();
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

game();
