import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Logo from './Logo';

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
        <div className="absolute w-32 h-32 bg-primary/10 rounded-full blur-2xl pointer-events-none -z-10" />

        <Logo vertical={true} showTagline={true} className="mb-8" />
        
        {/* Progress indicator */}
        <div className="w-48 h-[2px] bg-white/10 rounded-full overflow-hidden mb-3 relative">
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
