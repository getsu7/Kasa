// src/components/molecules/Collapse/Collapse.jsx
import { useState } from 'react';
import './Collapse.scss';

function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`collapse ${isOpen ? 'collapse--active' : ''}`}>
      <button
        className="collapse__btn"
        onClick={toggleMenu}
        aria-expanded={isOpen}
        type="button"
      >
        <span className="collapse__btn-text">{title}</span>
        <i className={`fa-solid fa-chevron-down collapse__icon ${isOpen ? 'collapse__icon--rotate' : ''}`}></i>
      </button>
      {isOpen && (
        <div className="collapse__content">
          {Array.isArray(content) ? (
            <ul className="collapse__list">
              {content.map((item, index) => (
                <li key={index} className="collapse__item">{item}</li>
              ))}
            </ul>
          ) : (
            <p className="collapse__text">{content}</p>
          )}
        </div>
      )}
    </div>
  );
}

export default Collapse;