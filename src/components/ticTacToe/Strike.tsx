import "../../css/TicTacToeStyles.css"

interface Props {
  strikeClass: string
}

const Strike = ({strikeClass}: Props) => {

  return (
    <div className={`strike ${strikeClass}`}>
        
    </div>
  );
}

export default Strike;