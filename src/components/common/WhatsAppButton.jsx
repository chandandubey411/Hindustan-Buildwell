import React, { useState } from 'react';
import { FaWhatsapp, FaPhoneAlt } from 'react-icons/fa';

const WHATSAPP_NUMBER = '919810070711';
const CALL_NUMBER = '+919560647158';
const WHATSAPP_MESSAGE = 'Hello! I am interested in your properties. Please guide me.';

const WhatsAppButton = () => {
  const [hoveredWA, setHoveredWA] = useState(false);
  const [hoveredCall, setHoveredCall] = useState(false);

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="fixed right-5 bottom-6 z-50 flex flex-col items-end gap-3">

      {/* Call Button */}
      <div className="flex items-center gap-3">
        {/* Tooltip label */}
        <div
          className={`transition-all duration-300 ${
            hoveredCall ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4 pointer-events-none'
          }`}
        >
          <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg whitespace-nowrap">
            +91 95606 47158
          </span>
        </div>

        {/* Call Button */}
        <a
          href={`tel:${CALL_NUMBER}`}
          onMouseEnter={() => setHoveredCall(true)}
          onMouseLeave={() => setHoveredCall(false)}
          aria-label="Call Us"
          className="relative flex items-center justify-center w-14 h-14 rounded-full bg-blue-600 shadow-lg hover:scale-110 active:scale-95 transition-all duration-300"
          style={{ boxShadow: '0 4px 24px rgba(37,99,235,0.45)' }}
        >
          {/* Pulse ring */}
          <span className="absolute inset-0 rounded-full bg-blue-500 opacity-40 animate-ping" />
          <FaPhoneAlt className="text-white text-2xl relative z-10" />
        </a>
      </div>

      {/* WhatsApp Button */}
      <div className="flex items-center gap-3">
        {/* Tooltip label */}
        <div
          className={`transition-all duration-300 ${
            hoveredWA ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4 pointer-events-none'
          }`}
        >
          <span className="bg-[#25D366] text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg whitespace-nowrap">
            Chat with us
          </span>
        </div>

        <button
          onClick={handleWhatsAppClick}
          onMouseEnter={() => setHoveredWA(true)}
          onMouseLeave={() => setHoveredWA(false)}
          aria-label="Chat on WhatsApp"
          className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] shadow-lg hover:scale-110 active:scale-95 transition-all duration-300"
          style={{ boxShadow: '0 4px 24px rgba(37,211,102,0.45)' }}
        >
          {/* Pulse ring */}
          <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-ping" />
          <FaWhatsapp className="text-white text-3xl relative z-10" />
        </button>
      </div>

    </div>
  );
};

export default WhatsAppButton;
