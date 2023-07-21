import React from 'react';
import './style.css';


// Importa los componentes que creamos previamente
import Navbar from './components/Navbar';
import PrincipalSection from './components/PrincipalSection';
import DescriptionSection from './components/DescriptionSection';
import FeaturesSection from './components/FeaturesSection';
import ServicesSection from './components/ServicesSection';
import AmbientsSection from './components/AmbientsSection';
import InstallationsSection from './components/InstallationsSection';
import MultimediaSection from './components/MultimediaSection';
import ComparisonSection from './components/ComparisonSection';
import StatisticsSection from './components/StatisticsSection';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      {/* Agrega los componentes en el orden deseado */}
      <Navbar />
      <PrincipalSection />
      <DescriptionSection />
      <FeaturesSection />
      <ServicesSection />
      <AmbientsSection />
      <InstallationsSection />
      <MultimediaSection />
      <ComparisonSection />
      <StatisticsSection />
      <Footer />
    </div>
  );
}

export default App;
