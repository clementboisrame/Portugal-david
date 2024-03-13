import React, { useState } from 'react';

function UploadImage() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setImages(files);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData();
    images.forEach((file, index) => {
      const imageName = `image-${index + 1}`;
      formData.append(imageName, file);
    });
    

    try {
      const response = await fetch('/api/annonce/register', {
        method: 'POST',
        body: formData
      });
      if (!response.ok) {
        throw new Error('Error uploading images');
      }
      const data = await response.json();
      console.log('Upload success:', data);
      // Faites ici quelque chose avec la réponse si nécessaire
    } catch (error) {
      console.error('Upload error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="UploadImage">
      <h7>Télécharger des images</h7>

      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <input type="file" multiple onChange={handleImageChange} />
        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Chargement...' : 'Télécharger'}
        </button>
      </form>

    </div>
  );
}

export default UploadImage;
