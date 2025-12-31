import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, Check } from 'lucide-react';
import Countdown from './Countdown';

const Hero = () => {
  const [copied, setCopied] = useState(false);
  const contractAddress = "COMING SOON...";

  const handleCopy = () => {
    if (contractAddress === "COMING SOON...") return;
    navigator.clipboard.writeText(contractAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center pt-32 pb-20 px-4 relative overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-4xl mx-auto z-10"
      >
        <div className="inline-block px-6 py-2 rounded-full border border-gold-primary/50 bg-gold-primary/10 text-gold-primary font-orbitron text-sm mb-6 animate-pulse shadow-[0_0_15px_rgba(255,215,0,0.2)]">
          ⏰ LAST CHANCE OF 2025
        </div>

        <h1 className="glitch font-orbitron text-5xl md:text-7xl lg:text-8xl font-black mb-2 tracking-tighter" data-text="THE FINAL PUMP">
          THE FINAL PUMP
        </h1>
        
        <h2 className="font-orbitron text-6xl md:text-8xl lg:text-9xl font-black bg-gradient-to-r from-gold-primary via-gold-secondary to-orange-500 bg-clip-text text-transparent mb-6 drop-shadow-[0_0_30px_rgba(255,215,0,0.3)]">
          2025
        </h2>

        <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto">
          TICK TOCK DEGENS. 2025 is ending in hours.
          <br />
          Did you make it? If not, <span className="text-green-pump font-bold drop-shadow-[0_0_10px_rgba(0,255,136,0.5)]">THIS IS IT.</span>
        </p>

        <div className="mb-8">
          <p className="font-orbitron text-gold-primary tracking-[0.3em] text-sm mb-2">TIME UNTIL 2026</p>
          <Countdown />
        </div>

        <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-12">
          <a href="#buy" className="px-8 py-4 rounded-full bg-gradient-to-r from-green-pump to-green-600 text-bg-primary font-orbitron font-bold text-lg hover:scale-105 transition-transform shadow-[0_0_30px_rgba(0,255,136,0.4)] flex items-center gap-2">
            🚀 SEND IT NOW
          </a>
          <a href="#chart" className="px-8 py-4 rounded-full border-2 border-gold-primary text-white font-orbitron font-bold text-lg hover:bg-gold-primary hover:text-bg-primary transition-all shadow-[0_0_20px_rgba(255,215,0,0.2)]">
            📈 VIEW CHART
          </a>
        </div>

        <div className="flex flex-col items-center gap-2">
          <span className="text-gray-400 text-sm">Contract Address:</span>
          <div className="flex items-center gap-2 bg-bg-card border border-gold-primary/20 px-4 py-2 rounded-lg hover:border-gold-primary/50 transition-colors">
            <span className="font-mono text-gold-primary">{contractAddress}</span>
            <button onClick={handleCopy} className="text-gray-400 hover:text-white transition-colors">
              {copied ? <Check size={18} /> : <Copy size={18} />}
            </button>
          </div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs tracking-[0.2em] text-gray-500">SCROLL DOWN</span>
        <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center p-1">
          <motion.div 
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1 h-2 bg-gold-primary rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;

