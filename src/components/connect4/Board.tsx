import '../../css/Connect4Styles.css'
import {rows, cols} from '../../constants/Constants'

const Board = () => {

    const tiles = 
        new Array(rows)
            .fill('')
            .map(_ => new Array(cols).fill(''))

    return <div className="connect-board">
        {tiles.map((row,i) => 
            row.map((_,j) => <div className='connect-tile' key={i+'-'+j}/>)
        )}
    </div>   
}

export default Board;