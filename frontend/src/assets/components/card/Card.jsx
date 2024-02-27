import { Carousel } from 'bootstrap'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Card({
  id,
  titre,
  images,
  prix,
  description,
  onClick,
  onDelete,
  showButtons
}) {
  const [annonce, setAnnonce] = useState([])
  const [annonceId, setAnnonceId] = useState(id)

  useEffect(() => {
    const url = `http://localhost:8080/api/annonce`

    fetch(url)
      .then((response) => response.json())
      .then((data) => setAnnonce(data))
      .catch((err) => console.error("je suis l'eerreur :", err))
  }, [])

  return (
    <div className="Cards" onClick={onClick} role="button" tabIndex={0}>
      <div className="texte">
        <p>{titre}</p>
        {/* <p>Photos de l'annonce :</p> */}

        {/* <Carousel>
                {images.map((images, index) =>(
                    <div key={index}> 
                        <img src={images} alt={`Photo ${index + 1}`}/>
                    </div>
                ))}
            </Carousel>  */}

        <p>Prix : {prix}</p>
        <p>Description de l'annonce : {description}</p>
        {showButtons && (
          <div>
            <button
              type="button"
              className="Button"
              onClick={() => onDelete(id)}
            >
              Supprimer
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Card
