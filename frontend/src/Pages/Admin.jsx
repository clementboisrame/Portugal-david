import React, { useEffect, useState } from 'react'
import Card from '../assets/components/card/Card'
import AjoutAnnonce from '../assets/components/annonce/AjoutAnnonce'
function Admin() {
  const [result, setResult] = useState([])
  const [annonceId, setAnnonceId] = useState()

  useEffect(() => {
    const url = `http://localhost:8080/api/annonce`

    fetch(url)
      .then((response) => response.json())
      .then((data) => setResult(data))
      .catch((err) => console.error(err))
  }, [])

  const handleDelete = (id) => {
    setAnnonceId(id)

    fetch(`http://localhost:8080/api/annonce/suppression/${id}`, {
      method: 'DELETE'
    })
      .then((response) => {
        if (response.status === 204) {
          const updatedResult = result.filter((annonce) => annonce.id !== id)
          setResult(updatedResult)
        }
      })
      .catch((err) => console.error(err))
  }

  return (
    <div>
      <div className="admin_page">
        <h1>Bienvenue Admin</h1>
        <nav>
          <ul>
            <li>Ajouter une annonce</li>
            <li>Mes annonce en ligne</li>
            <li>Gerer les avis</li>
            <li>Se déconnecter</li>
          </ul>
        </nav>

        <h1>Mes annonces en ligne</h1>
        <div className="AnnonceCards">
          {result.map((annonce) => (
            <Card
              key={annonce.id}
              id={annonce.id}
              titre={annonce.titre}
              prix={annonce.prix}
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
      </div>{' '}
    </div>
  )
}

export default Admin
