import React from 'react'
import David from '../../images/David.jpg'
const Presentation = () => {
  return (
    <div className="up">
      <div className="image">
        <img src={David} alt="David" />
      </div>

      <div className="presentation">
        <h1>Qui suis-je?</h1>
        <p>
          Riche de la double culture franco-portugaise, je propose mes services
          et mes conseils aux personnes désirant investir au Portugal.
          <br />
          Mon expertise et ma connaissance approfondie du secteur immobilier
          portugais, vous permettront de profiter d'offres immobilière de
          qualité qui corresponde précisément à vos critères de recherche .
          <br />
          Que ce soit pour votre résidence principale, secondaire ou tout autre
          investissement locatif.
          <br />
          Une fois la zone géographique déterminée, mon objectif est toujours de
          trouver les meilleures opportunités selon vos critères précis. Je
          solliciterai tous mes contacts et mon réseau pour que vous puissiez
          avoir le choix parmi les meilleures offres immobilières.
          <br />
          Contactez-moi pour prendre rendez-vous, ou pour tout autre
          renseignement.
        </p>
      </div>
    </div>
  )
}

export default Presentation
