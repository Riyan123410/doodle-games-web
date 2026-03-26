import '../../css/Connect4Styles.css'

interface Props {
    winner: number
    reset: () => void
}

const Winner = ({winner,reset} : Props) => 
    <p className="winner-text">
        <span>{
            winner === -1
            ?   'No player won!'
            :   `Player ${winner} won!`}
        </span>
        <button className='winner-button' onClick={reset}>Play again</button>
    </p>

export default Winner