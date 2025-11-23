import React from 'react';
import Navbar from './components/layout/Navbar';
import BackroundLayer from './components/layout/BackgroundLayer';
import Hero from './sections/Hero';
import AboutSection from './sections/About';
import OurTeam from './sections/OurTeam';

const App = () => {


  return (
    <div className="h-full bg-[rgb(49,54,71)] text-[rgb(255,248,212)] font-sans overflow-x-hidden relative selection:bg-[rgb(163,176,135)] selection:text-white">

      <BackroundLayer />
      <Navbar />
      <Hero />
      <AboutSection />
      <OurTeam />
      <div className='h-screen'></div>

    </div>
  );
};

export default App;