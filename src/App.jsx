import React from 'react';
import CustomCursor from './components/CustomCursor';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Timeline from './components/Timeline';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-pitch-black selection:bg-crimson/30 selection:text-crimson">
      <CustomCursor />
      <Header />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Timeline />
      </main>
      <Footer />
    </div>
  );
}

export default App;
