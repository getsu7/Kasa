import Header from '../../organisms/Header/Header.jsx';
import Footer from '../../organisms/Footer/Footer.jsx';
import './MainTemplate.scss';

function MainTemplate({ children }) {
  return (
    <>
      <Header />
      <main className="main-template">
        {children}
      </main>
      <Footer />
    </>
  );
}

export default MainTemplate;
