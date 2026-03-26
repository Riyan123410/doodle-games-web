import "../../css/HangmanStyles.css"

const keys = [
  "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
  "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
];

interface Props {
    disabled?: boolean
    activeLetters: string[]
    inactiveLetters: string[]
    addGuessedLetters: (letter: string) => void
}

const Keyboard = ({disabled = false, activeLetters, inactiveLetters, addGuessedLetters}: Props) => {

  return (
    <div className="keyboard">

        {keys.map(key => {

            const isActive = activeLetters.includes(key)
            const isInactive = inactiveLetters.includes(key)

            return (
                <button
                    onClick={() => addGuessedLetters(key)}
                    className={`keyboardButton ${isActive ? "active" : ""} ${isInactive ? "inactive" : ""}`}
                    disabled={isActive || isInactive || disabled}
                    key={key}
                >
                    {key}
                </button>
                )
        })}

    </div>
  );
}

export default Keyboard;