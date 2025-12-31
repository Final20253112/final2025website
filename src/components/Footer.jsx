import React from 'react';
import { Rocket } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-bg-secondary pt-16 pb-8 border-t border-gold-primary/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-8">
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-2 font-orbitron font-bold text-2xl mb-2">
              <Rocket className="text-gold-primary" />
              <span className="bg-gradient-to-r from-gold-primary to-gold-secondary bg-clip-text text-transparent">
                $TFP2025
              </span>
            </div>
            <p className="text-gray-400 text-sm">The Final Pump 2025</p>
          </div>

          <div className="flex gap-8 text-gray-400 font-medium">
            <a href="#" className="hover:text-gold-primary transition-colors">Telegram</a>
            <a href="#" className="hover:text-gold-primary transition-colors">Twitter</a>
            <a href="#" className="hover:text-gold-primary transition-colors">DEXTools</a>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
          <p className="mb-2">© 2025 The Final Pump. All rights reserved. 🌕</p>
          <p className="opacity-60 text-xs">This is a meme token. Always DYOR. Not financial advice.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

