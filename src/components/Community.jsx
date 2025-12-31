import React from 'react';
import { motion } from 'framer-motion';
import { Send, Twitter, BarChart2 } from 'lucide-react';

const Community = () => {
  return (
    <section id="community" className="py-20 relative">
      <div className="container mx-auto px-4 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-orbitron font-bold mb-8 bg-gradient-to-r from-gold-primary to-gold-secondary bg-clip-text text-transparent"
        >
          🤝 JOIN THE DEGEN ARMY
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-12"
        >
          Be part of the final pump of 2025. Join our community and let's send it together!
        </motion.p>

        <div className="flex flex-wrap justify-center gap-6">
          <motion.a 
            href="#"
            whileHover={{ scale: 1.05, y: -5 }}
            className="flex items-center gap-3 px-8 py-4 bg-[#0088cc]/10 border border-[#0088cc]/30 rounded-xl hover:bg-[#0088cc] hover:text-white transition-all group"
          >
            <Send className="group-hover:animate-bounce" />
            <span className="font-orbitron font-bold">Telegram</span>
          </motion.a>

          <motion.a 
            href="#"
            whileHover={{ scale: 1.05, y: -5 }}
            className="flex items-center gap-3 px-8 py-4 bg-[#1da1f2]/10 border border-[#1da1f2]/30 rounded-xl hover:bg-[#1da1f2] hover:text-white transition-all group"
          >
            <Twitter className="group-hover:animate-bounce" />
            <span className="font-orbitron font-bold">Twitter</span>
          </motion.a>

          <motion.a 
            href="#"
            whileHover={{ scale: 1.05, y: -5 }}
            className="flex items-center gap-3 px-8 py-4 bg-[#00bcd4]/10 border border-[#00bcd4]/30 rounded-xl hover:bg-[#00bcd4] hover:text-white transition-all group"
          >
            <BarChart2 className="group-hover:animate-bounce" />
            <span className="font-orbitron font-bold">DEXTools</span>
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Community;

