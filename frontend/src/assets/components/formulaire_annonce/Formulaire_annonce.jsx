import React, { useState } from 'react'
const Formulaire_annonce = () => {
    const [formData, setFormData] = useState({
        titre: '',
        description: '',
        prix: '',
        images: [],
    });

    const handleChange = (e) => {
        setFormData((previousValue) => ({
            ...previousValue,
            [e.target.name]: e.target.value,
        }));
    };

    const handleImageChange = (e) => {
        const files = e.target.files;
        const newImages = [];

        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            newImages.push(file);
        }

        setFormData((previousValue) => ({
            ...previousValue,
            images: newImages,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const requestData = new FormData();

        requestData.append('titre', formData.titre);
        requestData.append('description', formData.description);
        requestData.append('prix', formData.prix);

        formData.images.forEach((image) => {
            requestData.append('images', image);
        });

        const url = 'http://localhost:8080/api/annonce/register';

        fetch(url, {
            method: 'POST',
            body: requestData,
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="titre">Titre de l'annonce :</label>
        <input
          type="text"
          id="titre"
          name="titre"
          value={formData.titre}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="description">Description :</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          cols={50}
          rows={4}
        />
      </div>
      <div>
        <label htmlFor="prix">Prix :</label>
        <input
          type="text"
          id="prix"
          name="prix"
          value={formData.prix}
          onChange={handleChange}
        />
      </div>
      <div>
                <label htmlFor="image">Images :</label>
                <input
                    type="file"
                    id="image"
                    accept="image/*"
                    multiple
                    onChange={handleImageChange}
                />
            </div>
            <button type="submit">Soumettre</button>
        </form>
    );
};

export default Formulaire_annonce;