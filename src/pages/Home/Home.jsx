import './Home.scss';
import Banner from '../../components/atoms/Banner/Banner.jsx';
import { useLogementService } from '../../services/UseLogementService.js';
const logementService = useLogementService();

function Home() {
  const logements = logementService.getLogements();
  return (
    <>
    <Banner/>
      <ul className="home__content">
        {logements.map((logement) => (
          <li key={logement.id}>{logement.title}</li>
        ))}
      </ul>
    </>
  );
}

export default Home;
