import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Loader = ({ onFinish }) => {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPercent((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            if (onFinish) onFinish();
          }, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 25);

    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <div className="loader-container">
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col items-center"
      >
        {/* Glow backdrop behind the logo */}
        <div className="absolute w-48 h-48 bg-primary/15 rounded-full blur-3xl pointer-events-none -z-10" />

        {/* Logo image only — no text */}
        <img
          src="/logo.jpeg"
          alt="Hindustan Buildwell"
          className="w-[264px] h-[264px] md:w-[336px] md:h-[336px] object-contain block"
          style={{ marginBottom: '-18px' }}
        />

        {/* Progress indicator */}
        <div className="w-48 h-[2px] bg-white/10 rounded-full overflow-hidden relative" style={{ marginBottom: '6px' }}>
          <div
            className="h-full bg-gold-gradient transition-all duration-75"
            style={{ width: `${percent}%` }}
          />
        </div>

        <span className="font-heading font-semibold text-[10px] text-white/50 tracking-wider">
          {percent}%
        </span>
      </motion.div>
    </div>
  );
};

export default Loader;
