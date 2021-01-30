let randomNumber = Math.floor(Math.random() * 100) + 1

const guesses = document.querySelector('.guesses')
const lastResult = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')

const guessSubmit = document.querySelector('.guessSubmit')
const guessField = document.querySelector('.guessField')
const resultParas = document.querySelector('.resultParas')

let guessCount = 1
let resetButton

function checkGuess() {
    let userGuess = Number(guessField.value)
    if (guessCount === 1) {
        guesses.textContent = 'Previous guesses: '
    }

    guesses.textContent += userGuess + ' '

    if (userGuess === randomNumber) {
        lastResult.textContent = '🏆 Congratulations! You got it right!'
        lastResult.style.color = 'green'
        lastResult.style.fontSize = '20px'
        lowOrHi.textContent = ''
        setGameOver()
    }

    else if (guessCount === 10) {
        setGameOver()
    }

    else {
        lastResult.textContent = 'Wrong number! '
        lastResult.style.color = 'red'
        lastResult.style.fontSize = '20px'
        if (userGuess < randomNumber) {
            lowOrHi.textContent = 'Your last guess was too low.'
        } else if (userGuess > randomNumber) {
            lowOrHi.textContent = 'Your last guess was too high.'
        }
    }

    guessCount++
    guessField.value = ''
    guessField.focus()
}

guessSubmit.addEventListener('click', checkGuess)

function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    modalGameOver.style.display = "block";
    resetButton = document.createElement('button');
    resetButton.textContent = 'Start new game';
    resetButton.setAttribute("class", "guessSubmit")

    modalContentGameOver.appendChild(resetButton);
    resetButton.addEventListener('click', resetGame);
}

function resetGame() {
    guessCount = 1;

    const resetParas = document.querySelectorAll('.resultParas p');
    for (let i = 0; i < resetParas.length; i++) {
        resetParas[i].textContent = '';
    }

    resetButton.parentNode.removeChild(resetButton);
    modalGameOver.style.display = "none";

    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = '';
    guessField.focus();

    lastResult.style.backgroundColor = 'white';

    randomNumber = Math.floor(Math.random() * 100) + 1;
}

// --- GAME OVER MODAL ---
// Get the modal
let modalGameOver = document.getElementById("modalGameOver");
let modalContentGameOver = document.getElementById("modalContentGameOver");

// Get the <span> element that closes the modal
let closeBtn = document.getElementById("closeBtn");

// When the user clicks the button, open the modal 
//btn.onclick = function() {
  //modalGameOver.style.display = "block";
//}

// When the user clicks on <span> (x), close the modal
closeBtn.onclick = function() {
    modalGameOver.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalGameOver) {
    modalGameOver.style.display = "none";
  }
}