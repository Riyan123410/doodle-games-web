import type { MouseEventHandler } from "react";
import GameState from "./GameState";

interface Props {
    gameState: typeof GameState[keyof typeof GameState]
    onReset: MouseEventHandler<HTMLButtonElement>
}

const Reset = ({ gameState, onReset }: Props) => {
  if (gameState === GameState.inProgress) {
    return;
  }
  return (
    <button onClick={onReset} className="reset-button">
      Play Again
    </button>
  );
}

export default Reset;