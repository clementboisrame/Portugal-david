import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import BlackButton from '../Element/BlackButton'
import Popup from '../Element/Popup'
import UploadImage from '../uploadImage/uploadImage'
import InputText from '../Element/InputText'

function AjoutAnnonce() {
  const navigate = useNavigate()
  const [showPopup1, setShowPopup1] = useState(false)

  const handlePopup1Open = () => {
    setShowPopup1(true)
  }

  const handlePopup1Close = () => {
    setShowPopup1(false)
    navigate('/admin')
  }

  const [formData, setFormData] = useState({
    titre: '',
    description: '',
    prix: '',
    images: []
  })

  const handleChange = (e) => {
    setFormData((previousValue) => ({
      ...previousValue,
      [e.target.name]: e.target.value
    }))
  }

  const [error, setError] = useState(null)

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('Form Data:', formData)

    const requestData = {
      ...formData

    }

    const url = 'http://localhost:8080/api/annonce/register'

    if (!/^[0-9]*$/.test(formData.prix)) {
      setError('Caractères numériques uniquement autorisés pour le champ prix')
    } else if (formData.titre && formData.description && formData.prix) {
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestData)
      })
        .then((response) => {
          if (response.status !== 200) {
            console.error(response.statusText)
          }
        })
        .catch((err) => {
          console.error('Error:', err)
        })
    } else {
      setError('Merci de compléter tous les champs')
      console.log('erreur', setError)
    }
  }

  return (
    <div className="formulaire">
      <form onSubmit={handleSubmit} className="input">
        <InputText
          label="Titre de l'annonce :"
          name="titre"
          placeholder="Titre de l'annonce"
          type="text"
          handleChange={handleChange}
        />
        <InputText
          label="Description :"
          name="description"
          placeholder="Description de l'annonce"
          type="textarea"
          handleChange={handleChange}
          cols={50}
          rows={4}
        />
        <InputText
          label="Prix :"
          name="prix"
          placeholder="Prix"
          type="text"
          handleChange={handleChange}
        />
        <UploadImage />
        <BlackButton
          buttonName="Ajouter cette offre"
          buttonFunction={(event) => {
            event.preventDefault()
            handlePopup1Open()
            handleSubmit(event)
          }}
        />
        {showPopup1 && (
          <Popup
            title=""
            message={error || "L'annonce a bien été publiée"}
            open={showPopup1}
            onClose={handlePopup1Close}
            cancelText="Retour "
            showConfirmButton={false}
          />
        )}
      </form>
    </div>
  )
}

export default AjoutAnnonce
