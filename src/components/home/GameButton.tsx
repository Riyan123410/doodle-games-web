interface Props {
  image: string
  link: string
  name: string
}

const GameButton = ({image, link, name}: Props) => {

  return (
    <div>
      <a href={link}>
        <input type="image" src={image} className="game-button" />
      </a>
      <div className="game-button-text">{name}</div>
    </div>
  );
}

export default GameButton;