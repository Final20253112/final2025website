import React from 'react';
import { motion } from 'framer-motion';

const phases = [
  {
    phase: "Phase 1: LAUNCH",
    icon: "🚀",
    items: [
      { text: "Token Launch", done: true },
      { text: "Website Live", done: true },
      { text: "Social Media Setup", done: true },
      { text: "CoinGecko Listing", done: false }
    ]
  },
  {
    phase: "Phase 2: PUMP IT",
    icon: "📈",
    items: [
      { text: "1000 Holders", done: false },
      { text: "Trending on DEXTools", done: false },
      { text: "Influencer Partnerships", done: false },
      { text: "CMC Listing", done: false }
    ]
  },
  {
    phase: "Phase 3: MOON",
    icon: "🌕",
    items: [
      { text: "10,000 Holders", done: false },
      { text: "CEX Listings", done: false },
      { text: "NFT Collection", done: false },
      { text: "$TFP2025 Merchandise", done: false }
    ]
  }
];

const Roadmap = () => {
  return (
    <section id="roadmap" className="py-20 bg-gradient-to-b from-bg-secondary to-bg-primary relative">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-orbitron font-bold text-center mb-16 bg-gradient-to-r from-gold-primary to-gold-secondary bg-clip-text text-transparent"
        >
          🗺️ ROADMAP TO VALHALLA
        </motion.h2>

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-gold-primary via-green-pump to-purple-accent transform md:-translate-x-1/2 rounded-full" />

          {phases.map((phase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`relative mb-12 md:mb-24 flex flex-col md:flex-row ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              } items-start md:items-center`}
            >
              {/* Timeline Marker */}
              <div className="absolute left-0 md:left-1/2 w-[40px] h-[40px] bg-bg-primary border-4 border-gold-primary rounded-full flex items-center justify-center z-10 transform md:-translate-x-1/2 shadow-[0_0_15px_rgba(255,215,0,0.5)] text-xl">
                {phase.icon}
              </div>

              {/* Content Spacer */}
              <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-12">
                <div className={`bg-bg-card border border-gold-primary/10 rounded-xl p-6 hover:border-gold-primary/30 transition-all ${
                  index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                }`}>
                  <h3 className="font-orbitron font-bold text-xl text-gold-primary mb-4">{phase.phase}</h3>
                  <ul className={`space-y-2 ${index % 2 === 0 ? 'md:items-end' : 'md:items-start'} flex flex-col`}>
                    {phase.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-gray-400">
                        <span className={item.done ? "text-green-pump" : "text-gray-600"}>
                          {item.done ? "✅" : "⏳"}
                        </span>
                        {item.text}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Roadmap;

