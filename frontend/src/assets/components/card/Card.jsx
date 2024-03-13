import { Carousel } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';

function Card({ id, titre, images, prix, description, onClick, onDelete, showButtons }) {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [imagesArray, setImagesArray] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (Array.isArray(images)) { 
      setImagesArray(images);
    }
  }, [images]);

  const handleToggleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
  };

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="Cards" onClick={onClick} role="button" tabIndex={0}>
      <div className="texte">
        <p>{titre}</p>
        <Carousel activeIndex={index} onSelect={handleSelect} className='carousel'>
          {imagesArray.map((image, idx) => (
            <Carousel.Item key={idx}> 
              <img
                className="d-block w-100"
                src={image.trim()}
                alt={`Photo ${idx + 1}`}
                style={{ display: idx === index ? 'block' : 'none' }}
              />
            </Carousel.Item>
          ))}
        </Carousel>
        <p>Prix : {prix}</p>
        <p>Description de l'annonce : {description}</p>
        {showButtons && (
          <div className='buttonDelete'>
            <button
              type="buttonDelete"
              className="Button"
              onClick={() => onDelete(id)}
            >
              Supprimer
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Card;
