import './Housing.scss';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { UseLogementService } from '../../services/UseLogementService.js';
import Carousel from '../../components/organisms/Carousel/Carousel.jsx';
import Collapse from '../../components/molecules/Collapse/Collapse.jsx';

function Housing() {
  const { id } = useParams();
  const [logement, setLogement] = useState(null);

  const load = async () => {
    const response = await UseLogementService().getLogementById(id);
    setLogement(response);
  };

  useEffect(() => {
    load();
  }, [id]);

  return (
    <section className="housing">
      {logement && (
        <>
          <Carousel title={logement.title} pictures={logement.pictures} />

          <div className="housing__infos">
            <div className="housing__details">
              <h1 className="housing__title">{logement.title}</h1>
              <p className="housing__location">{logement.location}</p>
              <div className="housing__tags">
                {logement.tags.map((tag, index) => (
                  <span key={index} className="housing__tag">{tag}</span>
                ))}
              </div>
            </div>

            <div className="housing__host">
              <div className="housing__host-details">
                <span className="housing__host-name">{logement.host.name}</span>
                <img className="housing__host-image" src={logement.host.picture} alt={logement.host.name} />
              </div>
              {/* TODO AJOUTER LE CSS POUR LES ETOILES VIDES*/}
              <div className="housing__rating">
                {Array.from({ length: 5 }, (_, index) => (
                  <i key={index}
                     className={`fa-solid fa-star housing__star ${index < logement.rating ? '--filled' : ''}`}></i>
                ))}
              </div>
            </div>
          </div>

          <div className="housing__collapse">
            <Collapse title="Description" content={logement.description} />
            <Collapse title="Équipements" content={logement.equipments} />
          </div>
        </>
      )}
    </section>
  );
}

export default Housing;