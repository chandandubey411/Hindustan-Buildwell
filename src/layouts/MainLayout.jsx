import React, { useEffect, useState } from 'react';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import ScrollToTop from '../components/common/ScrollToTop';
import WhatsAppButton from '../components/common/WhatsAppButton';

const MainLayout = ({ children }) => {
  const [scrollProgress, setScrollProgress] = useState(0);

  // Scroll Progress logic
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const progress = (window.scrollY / totalScroll) * 100;
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col bg-dark text-white font-sans overflow-hidden">
      
      {/* Scroll progress bar */}
      <div
        className="scroll-progress"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Sticky header navbar */}
      <Navbar />

      {/* Pages contents wrapper */}
      <main className="flex-grow pt-[70px] lg:pt-[108px] relative z-10">
        {children}
      </main>

      {/* Corporate footer */}
      <Footer />

      {/* WhatsApp floating button */}
      <WhatsAppButton />

      {/* Page scroll support */}
      <ScrollToTop />

    </div>
  );
};

export default MainLayout;
