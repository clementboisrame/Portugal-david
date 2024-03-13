import Acceuil from '../assets/components/acceuil/Acceuil';
import Presentation from '../assets/components/presentation/Presentation';
import Service from '../assets/components/service/Service';
import Satisfaction from '../assets/components/satisfaction/Satisfaction';
import Temoignages from '../assets/components/temoignages/Temoignages';
import Tarif from '../assets/components/tarif/Tarif';
import Contact from '../assets/components/contact/Contact';
import Header from '../assets/components/header/Header';
import { useEffect, useState } from 'react';
import { Element } from 'react-scroll';
import ScrollOnTop from '../assets/components/Element/scrollOnTop';

function Homepage() {
// const [result, setResult] =useState([])

// useEffect(()=> {
//   const url= `http://localhost:8080/api/demande_de_contact/register`
//   fetch(url)
//   .then((response) => response.json())
//   .then((data)=>setResult(console.log("ceci est data de contact :",data),data))
//   .catch((err) => console.error("ceci est lerreur de  AVISCLIENT :", err))
// },[])

  return (
    <div>
      <Header />
      <Element name="acceuil">
        <Acceuil />
      </Element>

      <Element name="presentation">
      <Presentation />
      </Element>

      <Element name="Service">
      <Service />
      </Element>

      <Element name="satisfaction">
      <Satisfaction />
      </Element>

      <Element name="temoignages">
        <Temoignages />
      </Element>

      <Element name="tarif">
        <Tarif />
      </Element>

      <Element name="contact">
        <Contact />
      </Element>


      <ScrollOnTop/>
      
      {/* <Footer /> */}
    </div>
  )
}

export default Homepage
