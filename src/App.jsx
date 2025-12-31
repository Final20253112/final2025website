import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Tokenomics from './components/Tokenomics';
import Roadmap from './components/Roadmap';
import Community from './components/Community';
import Footer from './components/Footer';
import Background from './components/Background';

function App() {
  return (
    <div className="relative min-h-screen bg-bg-primary text-white overflow-x-hidden selection:bg-gold-primary selection:text-bg-primary">
      <Background />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Tokenomics />
        <Roadmap />
        <Community />
      </main>
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}

export default App;

