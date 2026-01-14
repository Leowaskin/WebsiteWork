import React from 'react';
import './styles/components.css';
import './styles/landing.css';
import './styles/hub.css';
import './styles/layout.css';
import './styles/motion.css';
import './styles/what-is-niyyah.css';
import './styles/modal.css';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import WhatIsNiyyah from './components/WhatIsNiyyah';
import Hub from './components/Hub';
import Contact from './components/Contact';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import AmbientBackground from './components/AmbientBackground';
import CursorEffect from './components/CursorEffect';

function App() {
  return (
    <div className="app">
      <AmbientBackground />
      <CursorEffect />
      <Navigation />
      <Hero />
      <Hub />
      <WhatIsNiyyah />
      <Philosophy />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
