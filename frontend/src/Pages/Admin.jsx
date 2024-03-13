import React, { useState, useEffect } from 'react';
import Card from '../assets/components/card/Card';
import AjoutAnnonce from '../assets/components/annonce/AjoutAnnonce';
import AvisCards from '../assets/components/AvisCards/AvisCards';
import Popup from '../assets/components/Element/Popup';
import { useNavigate } from 'react-router-dom'


function Admin() {
  const [result, setResult] = useState([]);
  const [avis, setAvis] = useState([]);
  const [showPopup, setShowPopup] = useState(false); // État pour contrôler l'affichage du popup
 const navigate = useNavigate("/")

 console.log("ceci est dans Admin result", result)
  useEffect(() => {
    const fetchAnnonces = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/annonce');
        if (!response.ok) {
          throw new Error('Erreur lors de la récupération des annonces');
        }
        const data = await response.json();
        setResult(data);
      
      } catch (error) {
        console.error('Erreur lors de la récupération des annonces:', error);
      }
    };

    const fetchAvis = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/avis_client/');
        if (!response.ok) {
          throw new Error('Erreur lors de la récupération des avis clients');
        }
        const data = await response.json();
        setAvis(data);
      } catch (error) {
        console.error('Erreur lors de la récupération des avis clients:', error);
      }
    };

    fetchAnnonces();
    fetchAvis();
  }, []);

  const handleDelete = (id) => {
    setShowPopup(true); 
  
    fetch(`http://localhost:8080/api/annonce/suppression/${id}`, {
      method: 'DELETE'
    })
    .then((response) => {
      if (response.status === 204) {
        setResult(prevResult => prevResult.filter((annonce) => annonce.id !== id));
      }
    })
    .catch((err) => console.error(err));
  }

  const handleClosePopup = () => {
    setShowPopup(false);
  };

const handleLogout = () => {
  navigate("/");
}

  return (
    <div>
      <div className="admin_page">
        <h1>Bienvenue Admin</h1>

<div className='Deconnexion'>
    <button id="deconnexion" onClick={handleLogout}> Se déconnecter</button>
</div>
        <h1>Mes annonces en ligne</h1>
        <div className="AnnonceCards">
  {result && result[0] && result[0].map((annonce) => (
    <Card
      key={annonce.id}
      id={annonce.id}
      titre={annonce.titre}
      prix={annonce.prix}
      images={annonce.images ? annonce.images.split(',').map(url => url.trim()) : []}
      description={annonce.description}
      onDelete={handleDelete}
      showButtons
    />
  ))}
</div>

        <div className="annonce">
          <h1>Ajouter une annonce</h1>
          <AjoutAnnonce />
        </div>
        <div className="AvisCards">
          {avis.map((avis_client) => (
            <AvisCards
              key={avis_client.id}
              id={avis_client.id}
              nom={avis_client.nom}
              commentaire={avis_client.commentaire}
              note={avis_client.note}
            />
          ))}
        </div>
      </div>

      {/* Popup de confirmation */}
      {showPopup && (
  <Popup
    title="Confirmation de suppression"
    message="Êtes-vous sûr de vouloir supprimer cette annonce ?"
    confirmText="Supprimer"
    cancelText="Annuler"
    showConfirmButton={true}
    onClose={handleClosePopup}
  />
)}

    </div>
  )
}

export default Admin;
