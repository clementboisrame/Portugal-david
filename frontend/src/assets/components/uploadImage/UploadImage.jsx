import React, { useState } from 'react'
import axios from 'axios'

function UploadImage() {
  const [images, setImages] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files)
    setImages(files)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    const formData = new FormData()
    images.forEach((image, index) => {
      formData.append(`image-${index}`, image)
    })

    try {
      const response = await axios.post('/api/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      console.log('Upload success:', response.data)
      // Faites ici quelque chose avec la réponse si nécessaire
    } catch (error) {
      console.error('Upload error:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="UploadImage">
      <h7>Télécharger des images</h7>

      <form onSubmit={handleSubmit}>
        <input type="file" multiple onChange={handleImageChange} />
        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Chargement...' : 'Télécharger'}
        </button>
      </form>
    </div>
  )
}

export default UploadImage
