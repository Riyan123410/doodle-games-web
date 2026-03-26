import GameButton from './GameButton';

const GameButtons = () => {

  return (
    <section className='game-button-container'>
        <GameButton image="/gameButtons/hangManButton.png" link="/hangman" name="Hang Man"></GameButton>
        <GameButton image="/gameButtons/ticTacToeButton.png" link="/tic-tac-toe" name="Tic Tac Toe"></GameButton>
        <GameButton image="/gameButtons/connect4Button.png" link="/connect4" name="Connect 4"></GameButton>
        <GameButton image="/gameButtons/comingSoonButton.png" link="/" name="Dots and Boxes"></GameButton>
        <GameButton image="/gameButtons/comingSoonButton.png" link="/" name="Ultimate Tic Tac Toe"></GameButton>
        <GameButton image="/gameButtons/comingSoonButton.png" link="/" name="Black Jack"></GameButton>
        <GameButton image="/gameButtons/comingSoonButton.png" link="/" name="Go"></GameButton>
        <GameButton image="/gameButtons/comingSoonButton.png" link="/" name="Chess"></GameButton>
    </section>
  );
}

export default GameButtons;