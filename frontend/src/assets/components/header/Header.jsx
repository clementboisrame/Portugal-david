import React from 'react';
import drapeau from "../../images/drapeau.png";
import logo from "../../images/francais-portugal.jpg"
const Header = () => {
    return (
        <div className='Header'>
            <div className='part1'>
                <img className='drapeau' src={logo} alt="" />

                <h1>Portugal Immobilier
                    <h1>Hugo David SIMÃO</h1><h1>Votre chasseur immobilier dédié au Portugal</h1>
                    -  </h1>

            </div>
            <nav className='menu'>
                <ul>
                    <li>Acceuil</li>
                    <li>Qui suis-je?</li>
                    <li>Services</li>
                    <li>Témoignages</li>
                    <li>Tarif</li>
                    <li>Contact</li>
                </ul>

            </nav>
        </div>
    );
};

export default Header;