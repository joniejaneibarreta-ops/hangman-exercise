import promp from "./promp.js";
import data from "./data.js";

/* Get one random word from data */
const word = data[Math.floor(Math.random() * data.length)];

const MAX_ATTEMPTS = 7;

async function runGame() {
  let attempts = MAX_ATTEMPTS;
  let progress = "";

  while (attempts > 0) {
    try {
      const answer = await promp(`${word.question} `);

      if (!answer) {
        console.log("No input received. Please try again.");
        continue;
      }

      const cleaned = answer.trim().toLowerCase();

      if (cleaned === "exit" || cleaned === "quit") {
        console.log("Exiting game. Goodbye!");
        return;
      }

      if (cleaned === word.word.toLowerCase()) {
        console.log("Congratulations! You've guessed the word correctly!");
        return;
      }

      attempts--;
      progress = "HANGMAN".substring(0, MAX_ATTEMPTS - attempts);
      console.log(progress);
      
      if (attempts === 1) {
        console.log(`Hint: ${word.hint}`);
      }

      if (attempts === 0) {
        console.log(`Out of attempts! The correct word was: ${word.word}`);
        return;
      }
    } catch (err) {
      console.error("An error occurred while reading input:", err);
      return;
    }
  }
}

runGame();
