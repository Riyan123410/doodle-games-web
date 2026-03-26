import GameButton from './GameButton';
import hangmanImage from '../../assets/gameButtons/hangManButton.png'
import ticTacToeImage from '../../assets/gameButtons/ticTacToeButton.png'
import connect4Image from '../../assets/gameButtons/connect4Button.png'
import comingSoonImage from '../../assets/gameButtons/comingSoonButton.png'

const GameButtons = () => {
  
  const base = import.meta.env.BASE_URL  // "/doodle-games-web/" in github pages, "/" in dev

  return (
    <section className='game-button-container'>
        <GameButton image={hangmanImage} link={base + "hangman"} name="Hang Man"></GameButton>
        <GameButton image={ticTacToeImage} link={base + "tic-tac-toe"} name="Tic Tac Toe"></GameButton>
        <GameButton image={connect4Image} link={base + "connect4"} name="Connect 4"></GameButton>
        <GameButton image={comingSoonImage} link={base} name="Dots and Boxes"></GameButton>
        <GameButton image={comingSoonImage} link={base} name="Ultimate Tic Tac Toe"></GameButton>
        <GameButton image={comingSoonImage} link={base} name="Black Jack"></GameButton>
        <GameButton image={comingSoonImage} link={base} name="Go"></GameButton>
        <GameButton image={comingSoonImage} link={base} name="Chess"></GameButton>
    </section>
  );
}

export default GameButtons;