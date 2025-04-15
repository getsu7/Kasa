import { useState } from 'react';
import './Carousel.scss';

function Carousel({ pictures, title }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="carousel">
      <div className="carousel__container">
        <img
          className="housing__image"
          src={pictures[currentIndex]}
          alt={title}
        />
        {pictures.length > 1 && (
          <>
            <button
              className="carousel__btn carousel__btn--prev"
              onClick={() => setCurrentIndex(currentIndex === 0 ? pictures.length - 1 : currentIndex - 1)}
            >
              &#8249;
            </button>
            <button
              className="carousel__btn carousel__btn--next"
              onClick={() => setCurrentIndex(currentIndex === pictures.length - 1 ? 0 : currentIndex + 1)}
            >
              &#8250;
            </button>
            <div className="carousel__counter">
              {currentIndex + 1}/{pictures.length}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Carousel;