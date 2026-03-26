import "../../css/HangmanStyles.css"

interface Props {
    reveal?: boolean
    guessedLetters: string[]
    wordToGuess: string
}

const HangmanWord = ({reveal = false, guessedLetters, wordToGuess}: Props) => {

  return (
    <div className="hangman-words">

        
        {wordToGuess.split("").map((letter, index) => (
            <span className="underline" key={index}>
                <span style={{
                    visibility: guessedLetters.includes(letter) || reveal 
                        ? "visible" : "hidden", 
                        color: !guessedLetters.includes(letter) && reveal ? "red" : "black",
                }}>{letter}</span>
            </span>
        ))}

    </div>
  );
}

export default HangmanWord;