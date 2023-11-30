import React, { useState } from 'react';
import pont from "../../images/contact.jpg"
const Contact = () => {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    telephone: '',
    adresse: '',
    sujet: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Vous pouvez traiter les données du formulaire ici, par exemple, les envoyer à un serveur.
    console.log(formData);
  };

  return (
  <div className='formulaire'>

  
    <div className='contact'>
        <h1>Contactez-moi</h1>
    <form onSubmit={handleSubmit}>
      <label>
        Nom:
        <input type="text" name="nom" value={formData.nom} onChange={handleChange} />
      </label>
      <br />

      <label>
        Prénom:
        <input type="text" name="prenom" value={formData.prenom} onChange={handleChange} />
      </label>
      <br />

      <label>
        Téléphone:
        <input type="text" name="telephone" value={formData.telephone} onChange={handleChange} />
      </label>
      <br />

      <label>
        Adresse:
        <input type="text" name="adresse" value={formData.adresse} onChange={handleChange} />
      </label>
      <br />

      <label>
        Sujet:
        <input type="text" name="sujet" value={formData.sujet} onChange={handleChange} />
      </label>
      <br />

      <label>
        Message:
        <textarea name="message" value={formData.message} onChange={handleChange} />
      </label>
      <br />

      <button type="submit">Envoyer</button>
    </form>

    </div>
    <div className='image'> 
    <img src={pont} alt="" /></div>
    </div>
  );
};

export default Contact;
