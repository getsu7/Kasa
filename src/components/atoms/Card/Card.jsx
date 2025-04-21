import './Card.scss';
import { useNavigate } from 'react-router';

function Card({ logement }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/logement/${logement.id}`);
  };

  return (
    <div className="card" onClick={handleClick} tabIndex={1} onKeyDown={(e) => e.key === 'Enter' && handleClick()}>
      <img className="card__image" src={logement.cover} alt={logement.title} />
      <span className="card__title">{logement.title}</span>
    </div>
  );
}

export default Card;