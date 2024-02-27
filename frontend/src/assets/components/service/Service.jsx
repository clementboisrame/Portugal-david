import React, { useState } from 'react'
import service from '../../images/service.jpg'

const Service = () => {
  const [activeTab, setActiveTab] = useState(null)

  const toggleTab = (index) => {
    setActiveTab(activeTab === index ? null : index)
  }

  return (
    <div className="up">
      <div className="Service">
        <h1>
          Accompagnement personnalisé dans le processus d'un achat immobilier au
          Portugal
        </h1>
        <br />
        <h2>Votre chasseur immobilier dédié</h2>
        <br />
        <p>
          Vous avez un projet d'achat immobilier au Portugal mais ne savez pas
          comment y parvenir ? Laissez-moi vous guider et vous assister dans
          chaque étape de votre projet. Consultez la liste de mes services
          ci-dessous et contactez-moi si vous avez des questions ou des demandes
          spécifiques.
        </p>
        <br />
        <div className="Etapes">
          <div
            className={`etapeUn ${activeTab === 1 ? 'active' : ''}`}
            onClick={() => toggleTab(1)}
          >
            <h3>Premiere Rencontre</h3>
            <ul>
              <li>Découverte du projet</li>
              <li>Contrat de recherche</li>
              <li>Budget / Financement (Courtier Partenaire)</li>
            </ul>
          </div>
          <div
            className={`etapeDeux ${activeTab === 2 ? 'active' : ''}`}
            onClick={() => toggleTab(2)}
          >
            <h3>Recherche et Selection</h3>
            <ul>
              <li>Cahier des charges</li>
              <li>Prospection/Recherche</li>
              <li>Sélection Ciblée</li>
            </ul>
          </div>
          <div
            className={`etapeTrois ${activeTab === 3 ? 'active' : ''}`}
            onClick={() => toggleTab(3)}
          >
            <h3>Visites et Négociations</h3>
            <ul>
              <li>Pré visite des biens et étude de l'environnement</li>
              <li>
                Rapport des biens pré visité et sélections pour visite client
              </li>
              <li>Organisation des visites sur place avec client</li>
              <li>Négociations du prix et des conditions de l’offre</li>
            </ul>
          </div>
          <div
            className={`etapeQuatre ${activeTab === 4 ? 'active' : ''}`}
            onClick={() => toggleTab(4)}
          >
            <h3>Finalisation et Installation</h3>
            <ul>
              <li>
                Sécurisation de la vente avant réservation et/ou compromis
              </li>
              <li>
                Assistance obtention NIF (numéro de contribuable obligatoire) et
                ouverture compte en banque
              </li>
              <li>Assistance signature réservation et/ou compromis</li>
              <li>Assistance chez le notaire pour signature de l’acte</li>
              <li>Assistance à l’installation (Eau, élec, assurance…)</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="image">
        <img src={service} alt="stylo" />
      </div>
    </div>
  )
}

export default Service
