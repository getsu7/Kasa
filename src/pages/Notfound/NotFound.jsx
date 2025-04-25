import './NotFound.scss';
import { useLocation } from 'react-router-dom';

function NotFound({ status, message }) {
  const location = useLocation();
  return (
    <div className="not-found">
      <h1 className="not-found__status">{location.state?.status || status}</h1>
      <p className="not-found__message">{location.state?.message || message}</p>
      <a href="/" className="not-found__link">Retourner sur la page d'accueil</a>
    </div>
  );
}

export default NotFound;
