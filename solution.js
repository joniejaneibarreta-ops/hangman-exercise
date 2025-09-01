import promp from "./promp.js";
import data from "./data.js";

/* Pick one random word from data */
const word = data[Math.floor(Math.random() * data.length)]; 
    const HANGMAN = "HANGMAN";
    let wrongGuesses = 0;

async function runGame() {

  while (wrongGuesses < HANGMAN.length) { {

    const answer = await promp(`${word.question} `);

    wrongGuesses++;

    if (answer.toLowerCase() === word.word.toLowerCase()) {
      console.log("Congratulations! You've guessed the word correctly!");
      return;
    }
    
    console.log(HANGMAN.slice(0, wrongGuesses));

    if (wrongGuesses === HANGMAN.length - 1) {
      console.log(`Hint: ${word.hint}`);
    }
    
    if (wrongGuesses === HANGMAN.length) {
      console.log(`Game Over! The correct word was: ${word.word}`);
      return;
    }
  }
  return runGame();
}
}

runGame();
