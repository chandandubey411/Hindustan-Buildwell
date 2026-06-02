import React, { useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock, FaCheckCircle, FaPaperPlane } from 'react-icons/fa';
import Button from '../components/common/Button';
import SlideUp from '../components/animations/SlideUp';
import PageHero from '../components/common/PageHero';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setName('');
    setEmail('');
    setPhone('');
    setSubject('');
    setMessage('');
    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  const offices = [
    {
      city: "Registered Office — Noida",
      address: "45, The Courtyard, Maharishi Ashram Marg, Sector 107, Noida, U.P. - 201304, INDIA",
      phone: "+91 98100 70711",
      email: "hindustaninvestments@gmail.com",
      hours: "Mon - Sat: 9:30 AM - 6:30 PM"
    },
    {
      city: "Advisory Contact — Shekar Muttreja",
      address: "45, The Courtyard, Maharishi Ashram Marg, Sector 107, Noida, U.P. - 201304, INDIA",
      phone: "+91 98100 70711",
      email: "hindustaninvestments@gmail.com",
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

            {/* Right Column: Dynamic Form Submission Panel */}
            <SlideUp className="glass-dark border border-primary/20 p-8 rounded-2xl shadow-glow text-left">
              <span className="text-[10px] font-bold text-accent uppercase tracking-widest bg-primary/10 border border-primary/20 px-3 py-1 rounded-full mb-4 inline-block">
                Secure advisory channel
              </span>
              <h3 className="text-white font-bold text-xl uppercase tracking-wider mb-2">
                Advisory Inquiry Sheet
              </h3>
              <p className="text-white/50 text-xs font-sans leading-relaxed mb-8">
                Submit your investment details below. All submitted coordinates are processed through private encrypted servers.
              </p>

              {submitted ? (
                <div className="flex flex-col items-center gap-4 text-center p-8 bg-primary/10 border border-primary/20 rounded-xl">
                  <FaCheckCircle className="text-primary text-5xl animate-bounce-slow" />
                  <h4 className="text-white font-semibold text-lg">Inquiry Sheet Submitted!</h4>
                  <p className="text-xs text-white/50 font-sans leading-relaxed">
                    Thank you. A corporate hospitality coordinator has been assigned. You will receive an initial email confirmation within 15 minutes.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-bold text-accent uppercase tracking-wider">Full Name</label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter full name"
                        className="w-full px-4 py-3.5 rounded-lg bg-dark/60 text-white placeholder-white/35 border border-white/10 text-xs focus:border-primary font-sans transition-all duration-300"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-bold text-accent uppercase tracking-wider">Corporate Email</label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="e.g. name@corporate.com"
                        className="w-full px-4 py-3.5 rounded-lg bg-dark/60 text-white placeholder-white/35 border border-white/10 text-xs focus:border-primary font-sans transition-all duration-300"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-bold text-accent uppercase tracking-wider">Mobile Number</label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="e.g. +91 XXXXX XXXXX"
                        className="w-full px-4 py-3.5 rounded-lg bg-dark/60 text-white placeholder-white/35 border border-white/10 text-xs focus:border-primary font-sans transition-all duration-300"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-bold text-accent uppercase tracking-wider">Inquiry Subject</label>
                      <select
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        required
                        className="w-full px-4 py-3.5 rounded-lg bg-dark/60 text-white border border-white/10 text-xs focus:border-primary font-sans transition-all duration-300"
                      >
                        <option value="">Select Reason</option>
                        <option value="Residential Acquisition">Residential Acquisition</option>
                        <option value="Commercial Lease/Purchase">Commercial Lease/Purchase</option>
                        <option value="Smart Township Collaboration">Smart Township Collaboration</option>
                        <option value="Career & Leadership Careers">Career & Leadership Careers</option>
                        <option value="Other general inquiry">Other general inquiry</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-bold text-accent uppercase tracking-wider">Brief Message Context</label>
                    <textarea
                      rows="4"
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Outline details or list property IDs you are interested in..."
                      className="w-full px-4 py-3.5 rounded-lg bg-dark/60 text-white placeholder-white/35 border border-white/10 text-xs focus:border-primary font-sans transition-all duration-300 resize-none"
                    />
                  </div>

                  <Button type="submit" variant="primary" className="w-full py-4 text-xs font-heading mt-2">
                    Submit Private Inquiry Sheet <FaPaperPlane className="text-[10px]" />
                  </Button>

                </form>
              )}

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
