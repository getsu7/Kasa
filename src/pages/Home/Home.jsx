import './Home.scss';
import Banner from '../../components/atoms/Banner/Banner.jsx';
import bannerImage from '../../assets/images/banner.png';
import Card from '../../components/atoms/Card/Card.jsx';
import { UseLogementService } from '../../services/UseLogementService.js';
import { useEffect, useState } from 'react';

function Home() {
  const [logements, setLogements] = useState([]);
  const [error, setError] = useState(null);

  const load = async () => {
    try {
      const data = await UseLogementService().getLogements();
      setLogements(data);
    } catch (err) {
      setError(err.message);
      console.error('Erreur lors du chargement des données :', err);
    }
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <section className="main-template">
      <Banner bannerImage={bannerImage} text="Chez vous, partout et ailleurs" />
      {error ? (
        <div className="error-message">Erreur : {error}</div>
      ) : (
        <ul className="card__list">
          {logements.map((logement) => (
            <li key={logement.id} className="card__item">
              <Card logement={logement} />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default Home;