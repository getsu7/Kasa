const logoImage = 'http://localhost:5173/public/assets/images/LOGOfooter.png';
import './Footer.scss'
function Footer() {
  return (
    <footer className="footer">
      <img alt="logo" src={logoImage}/>
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;
