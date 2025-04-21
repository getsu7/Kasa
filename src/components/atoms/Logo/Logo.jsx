import './Logo.scss';
import logoImage from '../../../assets/images/logo.png';

function Logo() {
  return (
    <div className="logo">
      <img className="logo__img" src={logoImage} alt="Logo" />
    </div>
  );
}

export default Logo;
