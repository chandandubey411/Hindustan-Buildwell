import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock, FaWhatsapp } from 'react-icons/fa';
import SlideUp from '../components/animations/SlideUp';
import PageHero from '../components/common/PageHero';

const Contact = () => {

  const offices = [
    {
      city: "Registered Office — Noida",
      address: "45, The Courtyard, Maharishi Ashram Marg, Sector 107, Noida, U.P. - 201304, INDIA",
      phone: "+91 98100 70711",
      email: "info@hindustanbuildwell.com",
      hours: "Mon - Sat: 9:30 AM - 6:30 PM"
    },
    {
      city: "Advisory Contact — Shekar Muttreja",
      address: "45, The Courtyard, Maharishi Ashram Marg, Sector 107, Noida, U.P. - 201304, INDIA",
      phone: "+91 98100 70711",
      email: "info@hindustanbuildwell.com",
      hours: "Mon - Sat: 10:00 AM - 7:00 PM"
    }
  ];

  return (
    <div className="relative w-full bg-dark overflow-hidden font-heading">
      
      {/* 1. Header */}
      <PageHero
        badge="Connect With Advisory"
        title="Initiate Asset"
        titleHighlight="Acquisition"
        subtitle="Secure private consultation with our investment board or report structural infrastructure bids."
        image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=80"
        breadcrumb="Contact Us"
      />

      {/* 2. Contact Split Area */}
      <section className="relative py-24 bg-dark">
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            {/* Left Column: Inquiry details & branches cards */}
            <div className="flex flex-col gap-10 text-left">
              
              <div>
                <span className="text-xs font-bold text-accent uppercase tracking-widest bg-primary/10 border border-primary/20 px-3 py-1 rounded-full mb-4 inline-block">
                  Regional Offices
                </span>
                <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-white mb-4 uppercase">
                  Our Corporate Spaces
                </h2>
                <p className="text-white/50 text-xs md:text-sm font-sans font-light leading-relaxed">
                  Visit our designated executive lounges for portfolio reviews and direct model structural walkthroughs.
                </p>
              </div>

              {/* Branch Locations Cards */}
              <div className="flex flex-col gap-6">
                {offices.map((office, idx) => (
                  <SlideUp
                    key={idx}
                    className="glass-dark border border-white/5 p-6 rounded-2xl flex flex-col gap-4 hover:border-primary/20 transition-all duration-400"
                  >
                    <h3 className="text-white font-bold text-lg tracking-tight uppercase border-b border-white/5 pb-2">
                      {office.city}
                    </h3>
                    <ul className="flex flex-col gap-3 font-sans text-xs md:text-sm text-white/70">
                      <li className="flex gap-3">
                        <FaMapMarkerAlt className="text-primary mt-1 shrink-0" />
                        <span>{office.address}</span>
                      </li>
                      <li className="flex gap-3 items-center">
                        <FaPhoneAlt className="text-primary shrink-0" />
                        <a href={`tel:${office.phone.replace(/\s+/g, '')}`} className="hover:text-primary transition-colors">{office.phone}</a>
                      </li>
                      <li className="flex gap-3 items-center">
                        <FaEnvelope className="text-primary shrink-0" />
                        <a href={`mailto:${office.email}`} className="hover:text-primary transition-colors">{office.email}</a>
                      </li>
                      <li className="flex gap-3 items-center">
                        <FaClock className="text-primary shrink-0" />
                        <span>{office.hours}</span>
                      </li>
                    </ul>
                  </SlideUp>
                ))}
              </div>

            </div>

            {/* Right Column: Direct WhatsApp Connection Panel */}
            <SlideUp className="glass-dark border border-primary/20 p-8 rounded-2xl shadow-glow text-left flex flex-col justify-between h-full min-h-[480px]">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[10px] font-bold text-accent uppercase tracking-widest bg-primary/10 border border-primary/20 px-3 py-1 rounded-full">
                    Instant Advisory Channel
                  </span>
                  <span className="flex items-center gap-1.5 text-[10px] font-bold text-emerald-400 uppercase tracking-wider bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    Online
                  </span>
                </div>

                <h3 className="text-white font-bold text-2xl uppercase tracking-wider mb-3">
                  Connect via WhatsApp
                </h3>
                <p className="text-white/65 text-xs md:text-sm font-sans leading-relaxed mb-8">
                  Skip the paperwork. Chat directly with our executive investment board and senior coordinators. Get instant project brochures, pricing details, and schedule private site walkthroughs.
                </p>

                {/* Interactive Quick Templates */}
                <div className="flex flex-col gap-3 mb-8">
                  <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Select an inquiry template:</span>
                  <div className="flex flex-col gap-2">
                    {[
                      { label: "Request Brochure", text: "Hello, I would like to request the latest project brochure and portfolio details." },
                      { label: "Schedule Site Visit", text: "Hello, I am interested in scheduling a private site visit and walkthrough." },
                      { label: "Investment Consultation", text: "Hello, I would like to schedule an investment consultation with the advisory board." },
                      { label: "General Inquiry", text: "Hello, I have a general inquiry regarding your current residential and commercial projects." }
                    ].map((template, idx) => (
                      <button
                        key={idx}
                        onClick={() => {
                          const encodedText = encodeURIComponent(template.text);
                          window.open(`https://wa.me/919810070711?text=${encodedText}`, '_blank');
                        }}
                        className="text-[11px] font-sans font-medium text-white/80 bg-white/5 border border-white/10 hover:border-primary/50 hover:bg-primary/10 hover:text-primary rounded-lg px-3 py-2 text-left transition-all duration-300 cursor-pointer animate-fade-in"
                      >
                        {template.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <a
                  href="https://wa.me/919810070711"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex items-center justify-center gap-3 w-full py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-heading font-bold text-sm uppercase tracking-wider shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] hover:from-emerald-400 hover:to-teal-500 transition-all duration-300 transform hover:-translate-y-0.5 text-center cursor-pointer"
                >
                  <FaWhatsapp className="text-xl group-hover:scale-110 transition-transform duration-300" />
                  Start Direct Chat
                </a>
                
                <p className="text-[10px] text-white/30 font-sans text-center mt-3">
                  Typically responds in under 5 minutes • Available 24/7
                </p>
              </div>
            </SlideUp>

          </div>

          {/* 3. High End Custom Google Map iframe representation */}
          <div className="mt-20 rounded-2xl overflow-hidden border border-white/10 relative h-[450px] shadow-glow">
            <iframe
              title="Hindustan Buildwell Office - Sector 107, Noida"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.8!2d77.3800!3d28.5800!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce55df4c5c2d3%3A0xe543ff3a033c467a!2sSector%20107%2C%20Noida%2C%20Uttar%20Pradesh%20201304!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "grayscale(1) invert(0.9) contrast(1.2)" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

        </div>
      </section>

    </div>
  );
};

export default Contact;
