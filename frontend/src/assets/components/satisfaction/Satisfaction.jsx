import React from 'react'
import maison from '../../images/Satisfaction.jpg'
const Satisfaction = () => {
  return (
    <div className="up">
      <div className="image">
        <img src={maison} alt="" />
      </div>
      <div className="satisfaction">
        <h1>Satisfaction clients</h1>
        <br />
        <p>
          La satisfaction de mes clients est ma priorité et mes services
          prouvent à quel point je suis engagé à leur côtés. Réservez un premier
          rendez-vous dès aujourd'hui pour en savoir plus sur les solutions qui
          existent pour donner vie à votre projet immobilier au Portugal.
        </p>
      </div>
    </div>
  )
}

export default Satisfaction
