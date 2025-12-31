import React, { useState, useEffect } from 'react';
import { Rocket } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-bg-primary/95 backdrop-blur-md py-4' : 'bg-transparent py-6'
    } border-b border-gold-primary/10`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center gap-2 font-orbitron font-bold text-xl md:text-2xl">
          <Rocket className="w-8 h-8 text-gold-primary animate-pulse" />
          <span className="bg-gradient-to-r from-gold-primary to-gold-secondary bg-clip-text text-transparent">
            $TFP2025
          </span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          {['About', 'Tokenomics', 'Roadmap', 'Community'].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-gray-300 hover:text-gold-primary transition-colors font-medium relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold-primary transition-all group-hover:w-full"></span>
            </a>
          ))}
        </div>

        <a href="https://pump.fun/coin/3S8whFsZJyDSdqTi7UUYKJ61Ad658XztaHXwZUAbpump" target="_blank" rel="noopener noreferrer" className="px-6 py-2 rounded-full bg-gradient-to-r from-gold-primary to-gold-secondary text-bg-primary font-orbitron font-bold hover:scale-105 transition-transform shadow-[0_0_20px_rgba(255,215,0,0.3)]">
          BUY NOW
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

