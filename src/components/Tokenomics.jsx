import React from 'react';
import { motion } from 'framer-motion';

const Tokenomics = () => {
  return (
    <section id="tokenomics" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-pump/5 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-orbitron font-bold text-center mb-16 bg-gradient-to-r from-gold-primary to-gold-secondary bg-clip-text text-transparent"
        >
          📊 TOKENOMICS
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {[
            { label: "Total Supply", value: "1B", sub: "$TFP2025" },
            { label: "Buy Tax", value: "0%", sub: "No tax on buys!" },
            { label: "Sell Tax", value: "0%", sub: "No tax on sells!" },
            { label: "LP Burned", value: "🔥", sub: "Liquidity Locked" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-32 h-32 rounded-full border-4 border-green-pump bg-bg-card flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_rgba(0,255,136,0.2)] hover:scale-110 transition-transform duration-300">
                <span className="font-orbitron text-4xl font-black text-green-pump">{stat.value}</span>
              </div>
              <h3 className="font-orbitron text-xl font-bold text-white mb-2">{stat.label}</h3>
              <p className="text-gray-400">{stat.sub}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-bg-card border border-gold-primary/10 rounded-2xl p-8 max-w-3xl mx-auto"
        >
          <h3 className="font-orbitron text-center text-gold-primary mb-6">🥧 DISTRIBUTION</h3>
          <div className="flex h-12 rounded-full overflow-hidden">
            <div className="w-[90%] bg-gradient-to-r from-green-pump to-green-600 flex items-center justify-center font-bold text-bg-primary font-orbitron hover:brightness-110 transition-all cursor-help" title="90% Liquidity Pool">
              90% LP
            </div>
            <div className="w-[10%] bg-gradient-to-r from-gold-primary to-gold-secondary flex items-center justify-center font-bold text-bg-primary font-orbitron hover:brightness-110 transition-all cursor-help" title="10% Marketing">
              10%
            </div>
          </div>
          <div className="flex justify-between mt-4 text-sm text-gray-400 font-orbitron">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-green-pump"></div>
              <span>LIQUIDITY POOL</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-gold-primary"></div>
              <span>MARKETING</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Tokenomics;

