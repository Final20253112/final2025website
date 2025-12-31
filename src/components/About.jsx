import React from 'react';
import { motion } from 'framer-motion';
import { Gem, Flame, Moon, PartyPopper } from 'lucide-react';

const features = [
  {
    icon: <Gem size={40} />,
    title: "DIAMOND HANDS ONLY",
    desc: "No paper hands allowed. We're sending this to the moon before the ball drops!"
  },
  {
    icon: <Flame size={40} />,
    title: "LAST OPPORTUNITY",
    desc: "Don't carry your 2025 bags into the new year. This is your final chance to print."
  },
  {
    icon: <Moon size={40} />,
    title: "TO THE MOON",
    desc: "One final full send before we enter 2026. Let's end this year on a massive green candle!"
  },
  {
    icon: <PartyPopper size={40} />,
    title: "CELEBRATION TIME",
    desc: "Pop the champagne and watch the gains roll in. New year, new ATH!"
  }
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-bg-primary to-bg-secondary relative">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-orbitron font-bold text-center mb-16 bg-gradient-to-r from-gold-primary to-gold-secondary bg-clip-text text-transparent"
        >
          🎯 ABOUT THE PUMP
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-bg-card border border-gold-primary/10 rounded-2xl p-8 text-center hover:border-gold-primary hover:shadow-[0_0_30px_rgba(255,215,0,0.1)] transition-all group"
            >
              <div className="text-gold-primary mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="font-orbitron font-bold text-xl text-gold-primary mb-4">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;

