import React, { useState, useEffect } from 'react';

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00'
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const newYear = new Date('January 1, 2026 00:00:00').getTime();
      const now = new Date().getTime();
      const distance = newYear - now;

      if (distance < 0) {
        clearInterval(interval);
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({
        days: String(days).padStart(2, '0'),
        hours: String(hours).padStart(2, '0'),
        minutes: String(minutes).padStart(2, '0'),
        seconds: String(seconds).padStart(2, '0')
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-wrap justify-center gap-4 md:gap-8 my-8">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div key={unit} className="flex flex-col items-center">
          <div className="bg-bg-card border-2 border-gold-primary/30 rounded-xl p-4 md:p-6 min-w-[80px] md:min-w-[120px] backdrop-blur-sm shadow-[0_0_15px_rgba(255,215,0,0.1)]">
            <span className="font-orbitron text-3xl md:text-5xl font-bold text-gold-primary block text-center">
              {value}
            </span>
          </div>
          <span className="text-xs md:text-sm text-gray-400 mt-2 uppercase tracking-widest font-orbitron">
            {unit}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Countdown;

