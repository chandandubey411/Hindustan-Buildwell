import React from 'react';

// Logo — image only, no text or tagline.
// vertical={true}  → larger size (used in footer / loader)
// vertical={false} → standard navbar size
const Logo = ({ className = '', vertical = false }) => {
  return (
    <img
      src="/logo.jpeg"
      alt="Hindustan Buildwell"
      className={`object-contain shrink-0 select-none ${
        vertical ? 'h-20 md:h-24 w-auto' : 'h-12 md:h-14 w-auto'
      } ${className}`}
    />
  );
};

export default Logo;
