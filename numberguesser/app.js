const minGuess 		= 1
	  maxGuess 		= 10
	  guessLimit	= 5;
	  guessBtn 		= document.querySelector('#guess-value');
	  guessInput	= document.querySelector('#guess-input');
	  minNum		= document.querySelector('.min-num');
	  maxNum		= document.querySelector('.max-num');
	  message		= document.querySelector('.message');

// Set Min And Max value
minNum.textContent = minGuess
maxNum.textContent = maxGuess

guessBtn.addEventListener('click', guessingGame);

function guessingGame() {
	
	let guess = parseInt(guessInput.value);
  
	if(isNaN(guess) || guess < minGuess || guess > maxGuess){
		setMessage(`Please enter a number between ${minGuess} and ${maxGuess}`, 'red');
		return;
	}
	randomNum = generateRandomNum();
	if(guess === randomNum) {

		guessInput.disabled = true;
		guessBtn.disabled 	= true;

		setMessage(`${guess} is correct! Congratulation`, 'green');
	}else{
		guessLimit--;
		if (guessLimit <= 0) {
			guessInput.disabled = true;
			guessBtn.disabled = true;
			setMessage(`${guessLimit} guess Left! ${randomNum} is the correct Num. You Lose`, 'red');
		}else{
			setMessage(`${guess} is not correct! ${guessLimit} guess left`, 'red');
		}
	}
}

function generateRandomNum() {
	return Math.floor(Math.random() *10) +1;
}

function setMessage(msg , color) {
	message.style.color = color;
	message.textContent = msg;	
}