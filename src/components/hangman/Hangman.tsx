import { useCallback, useEffect, useState } from "react";
import words from "../../wordList.json"
import "../../css/HangmanStyles.css"
import HangmanDrawing from "./HangmanDrawing";
import HangmanWord from "./HangmanWord";
import Keyboard from "./Keyboard";

// get a random word from the word list
const getWord = () => {
  return words[Math.floor(Math.random() * words.length)]
}

const Hangman = () => {

  const [wordToGuess, setWordToGuess] = useState(getWord);
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  // letters that are not in the word
  const incorrectLetters = guessedLetters.filter(
    letter => !wordToGuess.includes(letter));

  // game over bools
  const isLoser = incorrectLetters.length >= 6
  const isWinner = wordToGuess.split("").every(letter => guessedLetters.includes(letter))

  // add a letter to guessed letters if not already guessed and game is not over
  const addGuessedLetters = useCallback((letter: string) => {
    if (guessedLetters.includes(letter) || isLoser || isWinner) return

    setGuessedLetters(currentLetters => [...currentLetters, letter])
  }, [guessedLetters, isWinner, isLoser]);

  // keyboard input to guess letters
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key

      if (!key.match(/^[a-z]$/)) return

      e.preventDefault()
      addGuessedLetters(key)
    }

    document.addEventListener("keypress", handler)
    return () => {
      document.removeEventListener("keypress", handler)
    }
  }, [guessedLetters])

  // enter key to restart the game
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key

      if (key !== "Enter") return

      e.preventDefault()
      setGuessedLetters([])
      setWordToGuess(getWord())
    }

    document.addEventListener("keypress", handler)
    return () => {
      document.removeEventListener("keypress", handler)
    }
  }, [guessedLetters])

  return (
    <section className='app'>
      
      <div className="hangman">
        {/* show win/lose message or title */}
        <div className="win-lose-text">
          {isWinner && "You Won! Press enter to restart"}
          {isLoser && "You Lost! Press enter to restart"}
          {(!isWinner && !isLoser) && "Hangman"}
        </div>

        {/* show hangman drawing based on incorrect guesses */}
        <HangmanDrawing numberOfGuesses={incorrectLetters.length} />

        {/* show the word with guessed letters revealed */}
        <HangmanWord reveal={isLoser || isWinner} guessedLetters={guessedLetters} wordToGuess={wordToGuess} />

        {/* keyboard */}
        <div style={{ alignSelf: "stretch"}}>
          <Keyboard 
            disabled={isWinner || isLoser}
            activeLetters={guessedLetters.filter(letter => wordToGuess.includes(letter))}
            inactiveLetters={incorrectLetters}
            addGuessedLetters={addGuessedLetters}
          />
        </div>

      </div>

    </section>
  );
}

export default Hangman;