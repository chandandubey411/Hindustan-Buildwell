import React from 'react';

const Logo = ({ className = '', lightMode = true, showTagline = true, iconOnly = false, vertical = false }) => {
  const textColorNavy = lightMode ? 'text-[#072A63]' : 'text-white';
  const taglineColor = lightMode ? 'text-[#2F2F35]' : 'text-white/50';
  const lineBg = lightMode ? 'bg-[#072A63]/20' : 'bg-white/20';
  
  const icon = (
    <svg
      viewBox="0 0 135 90"
      className="h-full w-auto shrink-0"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Left Building Inner Ceiling (Light Gray #B8B5B5) */}
      <polygon points="32,49 48,42 55,38.5 38,46" fill="#B8B5B5" />
      
      {/* Left Building Inner Wall (Light Gray #B8B5B5) */}
      <polygon points="48,78 48,42 55,38.5 55,78" fill="#B8B5B5" />
      
      {/* Left Building Right Face (Light Gray #B8B5B5) */}
      <polygon points="55,20 62,16 62,78 55,78" fill="#B8B5B5" />
      
      {/* Middle Building (Light Gray #B8B5B5) */}
      <polygon points="62,16 80,8 80,78 62,78" fill="#B8B5B5" />
      
      {/* Middle Building Shadow (Muted Darker Gray) */}
      <polygon points="80,8 88,11 88,78 80,78" fill="#8B8888" />
      
      {/* Right Building (Light Gold #C3A05F) */}
      <polygon points="88,42 106,32 106,78 88,78" fill="#C3A05F" />
      
      {/* Right Building Shadow (Gold #B59455) */}
      <polygon points="106,32 114,35 114,78 106,78" fill="#B59455" />

      {/* Left Building Front (Navy #072A63 or White, depending on lightMode) */}
      <polygon 
        points="25,78 25,32 55,20 55,78 48,78 48,42 32,49 32,78" 
        fill={lightMode ? '#072A63' : '#FFFFFF'} 
      />

      {/* Base Chevron (Navy #072A63 or White, depending on lightMode) */}
      <polygon 
        points="10,80 68,74 125,80 125,82 68,76 10,82" 
        fill={lightMode ? '#072A63' : '#FFFFFF'} 
      />
    </svg>
  );

  if (iconOnly) {
    return (
      <div className={`flex items-center justify-center h-9 ${className}`}>
        {icon}
      </div>
    );
  }

  if (vertical) {
    return (
      <div className={`flex flex-col items-center text-center select-none ${className}`}>
        {/* Icon */}
        <div className="h-16 md:h-20 flex items-center mb-4">
          {icon}
        </div>

        {/* Typography Column */}
        <div className="flex flex-col items-center leading-none">
          {/* HINDUSTAN */}
          <span className={`text-xl md:text-2xl font-display font-extrabold tracking-[0.12em] ${textColorNavy} uppercase`}>
            Hindustan
          </span>
          {/* BUILDWELL */}
          <span className="text-[11px] md:text-[13px] font-heading font-bold tracking-[0.32em] text-[#B59455] uppercase mt-2">
            Buildwell
          </span>
          
          {/* Tagline "Building prosperity with trust" */}
          {showTagline && (
            <div className="flex items-center gap-1.5 mt-4">
              <span className={`w-6 md:w-8 h-[1px] ${lineBg}`} />
              <span className={`text-[7.5px] md:text-[8.5px] tracking-[0.05em] ${taglineColor} font-sans uppercase font-medium whitespace-nowrap`}>
                Building prosperity with trust
              </span>
              <span className={`w-6 md:w-8 h-[1px] ${lineBg}`} />
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-2.5 md:gap-3.5 select-none ${className}`}>
      {/* Icon */}
      <div className="h-10 md:h-12 flex items-center">
        {icon}
      </div>

      {/* Typography Column */}
      <div className="flex flex-col leading-none">
        {/* HINDUSTAN */}
        <span className={`text-[16px] md:text-xl font-display font-extrabold tracking-[0.1em] ${textColorNavy} uppercase`}>
          Hindustan
        </span>
        {/* BUILDWELL */}
        <span className="text-[10px] md:text-[12px] font-heading font-bold tracking-[0.32em] text-[#B59455] uppercase mt-1 md:mt-1.5">
          Buildwell
        </span>
        
        {/* Tagline "Building prosperity with trust" */}
        {showTagline && (
          <div className="flex items-center gap-1.5 mt-2">
            <span className={`w-5 md:w-7 h-[1px] ${lineBg}`} />
            <span className={`text-[7px] md:text-[8px] tracking-[0.05em] ${taglineColor} font-sans uppercase font-medium whitespace-nowrap`}>
              Building prosperity with trust
            </span>
            <span className={`w-5 md:w-7 h-[1px] ${lineBg}`} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Logo;
