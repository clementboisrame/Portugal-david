import { useNavigate } from 'react-router-dom'
import InputText from '../Element/InputText'
import React, { useState } from 'react'

function Login() {
  const [error, setError] = useState(null)

  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    nom: '',
    mot_de_passe: ''
  })

  const handleChange = (e) => {
    setFormData((previousValue) => ({
      ...previousValue,

      [e.target.name]: e.target.value
    }))
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    const url = 'http://localhost:8080/api/user/login'
    const requestData = { ...formData }

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestData)
    })
      .then((response) => response.text())

      .then((data) => {
        if (
          data === 'Mot de passe incorrect' ||
          data === 'Adresse mail incorrecte'
        ) {
          setError(data)
        } else {
          setError(null)
          localStorage.setItem('token', data)
          const user = data

          if (
            (user.nom === user.nom) &
            (user.mot_de_passe === user.mot_de_passe)
          ) {
            console.log('ceci est data LOGIN ', data)
            navigate('/Admin')
                    }
        }
      })
      .catch((err) => {
        console.error('Error:', err)
      })
  }
  return (
    <div className="Login">
      <form onSubmit={handleSubmit} className="input">
        <InputText
          label="Nom"
          name="lastname"
          placeholder="DUPONT"
          type="text"
          handleChange={handleChange}
        />
        <InputText
          label="Mot de passe"
          nom="mot_de_passe"
          placeholder="*******"
          type="password"
          handleChange={handleChange}
        />
        <div className="connection">
          <button>Se connecter </button>
        </div>
      </form>
    </div>
  )
}

export default Login
