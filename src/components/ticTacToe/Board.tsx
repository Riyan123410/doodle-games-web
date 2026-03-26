import Strike from "./Strike";
import Tile from "./Tile";
import "../../css/TicTacToeStyles.css"

interface Props {
  tiles: Array<string>
  onTileClicked: (index: number) => void
  playerTurn: string
  strikeClass: string
}

const Board = ({tiles, onTileClicked, playerTurn, strikeClass}: Props) => {

  return (
    <div className="board">
        <Tile playerTurn={playerTurn} onClick={() => onTileClicked(0)} value={tiles[0]} className="right-border bottom-border"/>
        <Tile playerTurn={playerTurn} onClick={() => onTileClicked(1)} value={tiles[1]} className="right-border bottom-border"/>
        <Tile playerTurn={playerTurn} onClick={() => onTileClicked(2)} value={tiles[2]} className="bottom-border"/>
        <Tile playerTurn={playerTurn} onClick={() => onTileClicked(3)} value={tiles[3]} className="right-border bottom-border"/>
        <Tile playerTurn={playerTurn} onClick={() => onTileClicked(4)} value={tiles[4]} className="right-border bottom-border"/>
        <Tile playerTurn={playerTurn} onClick={() => onTileClicked(5)} value={tiles[5]} className="bottom-border"/>
        <Tile playerTurn={playerTurn} onClick={() => onTileClicked(6)} value={tiles[6]} className="right-border"/>
        <Tile playerTurn={playerTurn} onClick={() => onTileClicked(7)} value={tiles[7]} className="right-border"/>
        <Tile playerTurn={playerTurn} onClick={() => onTileClicked(8)} value={tiles[8]}/>

        <Strike strikeClass={strikeClass}/>
    </div>
  );
}

export default Board;