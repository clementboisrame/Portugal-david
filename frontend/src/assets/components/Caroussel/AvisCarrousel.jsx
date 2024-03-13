import { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function AvisCarrousel() {
  const [index, setIndex] = useState(0);
  const [avis, setAvis] = useState([]);

  useEffect(() => {
    const url = "http://localhost:8080/api/avis_client";
    
    fetch(url)
      .then((response) => response.json())
      .then((data) => setAvis(data))
      .catch((err) => console.error(err));
  }, []);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  // Diviser les avis en groupes de 2 pour chaque page du carrousel
  const avisPages = [];
  for (let i = 0; i < avis.length; i += 2) {
    avisPages.push(avis.slice(i, i + 2));
  }

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {avisPages.map((page, pageIndex) => (
        <Carousel.Item key={pageIndex}>
          {page.map((avisItem) => (
            <div key={avisItem.id}>
              <Carousel.Caption>
                <h3>{avisItem.nom}</h3>
                <p>{avisItem.commentaire}</p>
                <h3>{avisItem.note}/5</h3>
              </Carousel.Caption>
            </div>
          ))}
        </Carousel.Item>
      ))}
      {/* <Carousel.Prev onClick={() => setIndex(index === 0 ? avisPages.length - 1 : index - 1)} /> */}
      {/* <Carousel.Next onClick={() => setIndex(index === avisPages.length - 1 ? 0 : index + 1)} /> */}
    </Carousel>
  );
}

export default AvisCarrousel;
