import React from 'react';
import { Link } from 'react-scroll';
import drapeau from '../../images/drapeau.png';
import logo from '../../images/francais-portugal.jpg';
import Login from '../login/Login';

const Header = () => {
  return (
    <div className="Header">
      <div className="part1">
        <img className="drapeau" src={logo} alt="" />
        <h1>
          <br />
          Portugal Immobilier <br />
          Hugo David SIMÃO<br />
           Votre chasseur immobilier dédié au Portugal
        </h1>
        <Login />
      </div>
      <nav className="menu">
        <ul>
          <li>
            <Link to="acceuil"
              smooth={true}
              duration={500}>
              Acceuil
            </Link>
          </li>

          <li
          ><Link to="presentation"
            smooth={true}
            duration={500}>
              Qui suis-je?
            </Link>
          </li>
          <li>
            <Link to="Service"
              smooth={true}
              duration={500}
            >Services</Link>
          </li>
          <li>
            <Link to="satisfaction"
              smooth={true}
              duration={500}>
              Satisfaction
            </Link>
          </li>
          <li><Link to="temoignages"
            smooth={true}
            duration={500}>
            Témoignages
          </Link>
          </li>
          <li><Link to="tarif"
            smooth={true}
            duration={500}
          >Tarif
          </Link>
          </li>
          <li>
            <Link to="contact"
              smooth={true}
              duration={500}
            >Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
