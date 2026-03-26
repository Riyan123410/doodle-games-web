import GameButton from './GameButton';
import hangmanImage from '../assets/gameButtons/hangManButton.png'
import ticTacToeImage from '../assets/gameButtons/ticTacToeButton.png'
import connect4Image from '../assets/gameButtons/connect4Button.png'
import comingSoonImage from '../assets/gameButtons/comingSoonButton.png'

const GameButtons = () => {

  return (
    <section className='game-button-container'>
        <GameButton image={hangmanImage} link="#hangman" name="Hang Man"></GameButton>
        <GameButton image={ticTacToeImage} link="#tic-tac-toe" name="Tic Tac Toe"></GameButton>
        <GameButton image={connect4Image} link="#connect4" name="Connect 4"></GameButton>
        <GameButton image={comingSoonImage} link="" name="Dots and Boxes"></GameButton>
        <GameButton image={comingSoonImage} link="" name="Ultimate Tic Tac Toe"></GameButton>
        <GameButton image={comingSoonImage} link="" name="Black Jack"></GameButton>
        <GameButton image={comingSoonImage} link="" name="Go"></GameButton>
        <GameButton image={comingSoonImage} link="" name="Chess"></GameButton>
    </section>
  );
}

export default GameButtons;