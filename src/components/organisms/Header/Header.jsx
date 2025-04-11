import './Header.scss';
import Logo from '../../atoms/Logo/Logo.jsx';
import NavBar from '../../molecules/NavBar/NavBar.jsx';

function Header() {
  return (
    <header className={'header'}>
      <Logo />
      <NavBar />
    </header>
  );
}

export default Header;
