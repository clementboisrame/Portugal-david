import React from 'react'
import drapeau from '../../images/drapeau.png'
import logo from '../../images/francais-portugal.jpg'
import Login from '../login/Login'
const Header = () => {
  return (
    <div className="Header">
      <div className="part1">
        <img className="drapeau" src={logo} alt="" />

        <h1>
          <br />
          Portugal Immobilier <br />
          Hugo David SIMÃO
          <br /> Votre chasseur immobilier dédié au Portugal
        </h1>

        <Login />
      </div>
      <nav className="menu">
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
  )
}

export default Header
