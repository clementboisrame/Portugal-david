import React, { useState } from 'react'
import pont from '../../images/contact.jpg'

const Contact = () => {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    telephone: '',
    adresse: '',
    sujet: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault() // Assurez-vous d'ajouter ceci pour empêcher le rechargement de la page

    // Affichez les données dans la console
    console.log('Données du formulaire:', formData)
    // Envoi des données au serveur
    fetch('http://localhost:8080/api/demande_de_contact/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then((response) => response.json())
      .then((data) => {
        // Gérer la réponse du serveur si nécessaire
        console.log('Réponse du serveur:', data)
      })
      .catch((error) => {
        console.error("Erreur lors de l'envoi des données:", error)
      })
  }

  return (
    <div className="formulaire">
      <div className="contact">
        <h1>Contactez-moi</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Nom:
            <input
              type="text"
              name="nom"
              value={formData.nom}
              onChange={handleChange}
            />
          </label>
          <br />

          <label>
            Prénom:
            <input
              type="text"
              name="prenom"
              value={formData.prenom}
              onChange={handleChange}
            />
          </label>
          <br />

          <label>
            Téléphone:
            <input
              type="text"
              name="telephone"
              value={formData.telephone}
              onChange={handleChange}
            />
          </label>
          <br />

          <label>
            Adresse:
            <input
              type="text"
              name="adresse"
              value={formData.adresse}
              onChange={handleChange}
            />
          </label>
          <br />

          <label>
            Sujet:
            <input
              type="text"
              name="sujet"
              value={formData.sujet}
              onChange={handleChange}
            />
          </label>
          <br />

          <label>
            Message:
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
          </label>
          <br />

          <button type="submit">Envoyer</button>
        </form>
      </div>
      <div className="image">
        <img src={pont} alt="" />
      </div>
    </div>
  )
}

export default Contact
