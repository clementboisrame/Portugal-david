import React from 'react';
import "./App.scss"
import Header from './assets/components/header/header';
import Footer from './assets/components/footer/Footer';
import Acceuil from './assets/components/acceuil/Acceuil';
import Presentation from './assets/components/presentation/Presentation';
import Service from './assets/components/service/Service';
import Satisfaction from './assets/components/satisfaction/Satisfaction';
import Temoignages from './assets/components/temoignages/Temoignages';
import Tarif from './assets/components/tarif/Tarif';
import Contact from './assets/components/contact/Contact';

const App = () => {
  return (

    <div>
      <Header />
      <Acceuil />
      <Presentation/>
      <Service/>
      <Satisfaction/>
      <Temoignages/>
      <Tarif/>
      <Contact/>
      {/* <Footer /> */}
    </div>
  );
};

export default App;