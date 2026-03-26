import Board from "./Board";
import '../../css/Connect4Styles.css'
import DropZone from "./Dropzone.tsx";

const Connect4 = () => {

    return (
        <div className="connect4">
            <DropZone/>
            <Board/>
            <div className="how-to-play">Arrow keys to move the coin. Space to drop</div>
        </div>
    );
}

export default Connect4;