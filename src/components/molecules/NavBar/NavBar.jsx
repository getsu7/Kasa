import { Link, useLocation } from 'react-router-dom';
import './NavBar.scss';

function NavBar() {
  const location = useLocation();

  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <Link
            to="/"
            className={location.pathname === '/' ? 'nav__link active' : 'nav__link'}
          >
            Acceuil
          </Link>
        </li>
        <li className="nav__item">
          <Link
            to="/about"
            className={location.pathname === '/about' ? 'nav__link active' : 'nav__link'}
          >
            A Propos
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
