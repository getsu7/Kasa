import logoImage from '../../../assets/images/logo-footer.png';
import './Footer.scss';

function Footer() {
  return (
    <footer className="footer">
      <img alt="logo" src={logoImage} />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;
