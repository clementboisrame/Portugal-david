import React from 'react';
import acceuil from "../../images/acceuil.jpg"
const Acceuil = () => {
    return (
        <div className='up'>
        <div className='acceuil'>
            <h1>Achetez un bien immobilier au Portugal en toute sérénité</h1>
            <p>De la naissance de votre projet jusqu'à la remise des clefs de votre bien ainsi que les modalités d'installation (Electricité, eau, assurance...),
                 je suis là pour vous accompagner dans le processus d'achat de votre bien immobilier au Portugal.</p>
        </div>
        <div className='image'>
            <img src={acceuil} alt="maison" />
        </div>
        </div>
    );
};

export default Acceuil;