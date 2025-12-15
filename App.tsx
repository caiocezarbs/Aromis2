import React from 'react';
import Header from './components/landing/Header';
import Hero from './components/landing/Hero';
import Trust from './components/landing/Trust';
import Products from './components/landing/Products';
import Target from './components/landing/Target';
import Benefits from './components/landing/Benefits';
import Fragrances from './components/landing/Fragrances';
import HowToBuy from './components/landing/HowToBuy';
import FAQ from './components/landing/FAQ';
import CTA from './components/landing/CTA';
import Footer from './components/landing/Footer';
//gambiarra
const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-aromis-cyan/20 selection:text-aromis-cyan">
      <Header />
      <main>
        <Hero />
        <Trust />
        <Products />
        <Target />
        <Benefits />
        <Fragrances />
        <HowToBuy />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default App;