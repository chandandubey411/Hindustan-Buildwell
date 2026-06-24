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
        vertical ? 'h-[120px] md:h-36 w-auto' : 'h-10 md:h-[84px] w-auto'
      } ${className}`}
    />
  );
};

export default Logo;
