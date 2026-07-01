import React from 'react';
import {
  FaBuilding, FaHome, FaCity, FaDraftingCompass, FaPaintRoller, FaCheckCircle,
  FaShieldAlt, FaClock, FaHandshake, FaMedal, FaChartLine, FaUserTie,
  FaHotel, FaHospital, FaSchool, FaGraduationCap, FaNetworkWired, FaTree,
  FaGlobe, FaMapMarkedAlt, FaShoppingBag, FaStore, FaBriefcase
} from 'react-icons/fa';
import { services } from '../data/services';
import SectionTitle from '../components/common/SectionTitle';
import SlideUp from '../components/animations/SlideUp';
import Button from '../components/common/Button';
import { Link } from 'react-router-dom';
import PageHero from '../components/common/PageHero';

const Services = () => {
  const dealCategories = [
    { icon: <FaHotel className="text-2xl" />, title: "Star Hotels", desc: "Bespoke hospitality acquisitions, premium resorts, and five-star luxury hotel spaces." },
    { icon: <FaHospital className="text-2xl" />, title: "Hospital", desc: "Advanced healthcare infrastructure, medical campus centers, and multi-specialty clinical buildings." },
    { icon: <FaSchool className="text-2xl" />, title: "School", desc: "Smart school campuses, primary educational facilities, and kids' academies." },
    { icon: <FaGraduationCap className="text-2xl" />, title: "Educational Institutions", desc: "Colleges, research centers, and training institutes with modern classrooms." },
    { icon: <FaBuilding className="text-2xl" />, title: "Large Office Floors", desc: "Grade-A corporate floors, co-working zones, and executive commercial floors." },
    { icon: <FaNetworkWired className="text-2xl" />, title: "IT / ITES plots and Building", desc: "Tech parks, cyber centers, and IT-approved plots/buildings with high bandwidth." },
    { icon: <FaTree className="text-2xl" />, title: "Farm Lands", desc: "Fertile agricultural lands, premium farmhouse plots, and organic retreat fields." },
    { icon: <FaGlobe className="text-2xl" />, title: "All Lands", desc: "Commercial, residential, industrial, and mixed-use land parcels across India." },
    { icon: <FaMapMarkedAlt className="text-2xl" />, title: "Plots", desc: "Gated community plots, residential layout plots, and industrial land subdivisions." },
    { icon: <FaShoppingBag className="text-2xl" />, title: "Mall", desc: "High-footfall shopping malls, multiplex commercial centers, and retail galleries." },
    { icon: <FaStore className="text-2xl" />, title: "Commercial spaces shops", desc: "Premium high-street retail shops, double-height showrooms, and boutiques." },
    { icon: <FaBriefcase className="text-2xl" />, title: "Companies", desc: "Standalone corporate headquarters, SME company zones, and business houses." }
  ];

  const iconMap = {
    FaBuilding: <FaBuilding className="text-3xl" />,
    FaHome: <FaHome className="text-3xl" />,
    FaCity: <FaCity className="text-3xl" />,
    FaDraftingCompass: <FaDraftingCompass className="text-3xl" />,
    FaPaintRoller: <FaPaintRoller className="text-3xl" />
  };

  const whyUs = [
    { icon: <FaShieldAlt />, title: "100% Legal Compliance", desc: "Every project is RERA registered and cleared with full legal due diligence across all regulatory bodies." },
    { icon: <FaClock />, title: "On-Time Delivery", desc: "We maintain strict timelines backed by experienced project management and transparent progress reporting." },
    { icon: <FaHandshake />, title: "Trusted Partnerships", desc: "Over 25 years of trust built with homebuyers, investors, and institutional partners across India." },
    { icon: <FaMedal />, title: "Award-Winning Quality", desc: "Recognized by leading real estate bodies for excellence in construction, design, and sustainability." },
    { icon: <FaChartLine />, title: "Strong ROI Track Record", desc: "Our properties consistently deliver 12–20% appreciation within 3 years of possession." },
    { icon: <FaUserTie />, title: "Dedicated Advisors", desc: "Each client gets a personal real estate advisor from acquisition to possession — and beyond." },
  ];

  const processSteps = [
    { step: "01", title: "Initial Consultation", desc: "Understand your requirement, budget, and investment goals through a private 1-on-1 session." },
    { step: "02", title: "Site & Portfolio Review", desc: "We present curated options matching your profile from our premium residential and commercial portfolio." },
    { step: "03", title: "Due Diligence & Documentation", desc: "Full legal checks, RERA verification, and documentation handled by our in-house legal team." },
    { step: "04", title: "Seamless Acquisition", desc: "Smooth, transparent transaction process with zero hidden charges and post-sale support." },
  ];

  return (
    <div className="relative w-full bg-dark overflow-hidden font-heading">

      {/* 1. Header */}
      <PageHero
        badge="Our Capabilities"
        title="Bespoke Real"
        titleHighlight="Estate Services"
        subtitle="Delivering Grade-A construction standards, master architectures, and bespoke interior setups for institutional and residential buyers across India."
        image="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80"
        breadcrumb="Services"
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-start mt-6">
          <Link to="/contact"><Button variant="primary" className="px-8 py-3.5 text-xs">Book Free Consultation</Button></Link>
          <Link to="/properties"><Button variant="outline" className="px-8 py-3.5 text-xs">View Properties</Button></Link>
        </div>
      </PageHero>

      {/* 2. Services Alternating Sections */}
      <section className="relative py-24 bg-dark">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col gap-24">
            {services.map((service, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <SlideUp
                  key={service.id}
                  className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-16 ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                >
                  <div className="flex-1 flex flex-col items-start text-left">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-6 shadow-glow">
                      {iconMap[service.icon] || <FaBuilding className="text-3xl" />}
                    </div>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 tracking-tight uppercase">
                      {service.title}
                    </h2>
                    <p className="text-white/70 text-sm md:text-base font-sans font-light leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-8 font-sans">
                      {service.details.map((detail, key) => (
                        <div key={key} className="flex gap-2.5 items-start text-xs md:text-sm text-white/60">
                          <FaCheckCircle className="text-primary shrink-0 mt-0.5" />
                          <span>{detail}</span>
                        </div>
                      ))}
                    </div>
                    <Link to="/contact">
                      <Button variant="outline" className="px-6 py-2.5 text-xs">Acquire advisory on {service.title}</Button>
                    </Link>
                  </div>
                  <div className="flex-1 w-full aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 shadow-gold relative group">
                    <img
                      src={
                        idx === 0 ? "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80"
                        : idx === 1 ? "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80"
                        : idx === 2 ? "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80"
                        : idx === 3 ? "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80"
                        : idx === 4 ? "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&q=80"
                        : "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?w=800&q=80"
                      }
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent pointer-events-none" />
                  </div>
                </SlideUp>
              );
            })}
          </div>
        </div>
      </section>

      {/* 2.5 Asset Portfolios We Deal In */}
      <section className="relative py-24 bg-dark border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <SectionTitle subtitle="Asset Classes & Sectors" title="Properties We Deal In" align="center" />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-14">
            {dealCategories.map((deal, idx) => (
              <SlideUp key={idx} delay={idx * 0.05} className="glass-dark border border-white/5 rounded-2xl p-6 flex flex-col items-center text-center hover:border-primary/25 transition-all duration-400 group relative">
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-gold-gradient group-hover:text-white group-hover:border-transparent transition-all duration-300 mb-4">
                  {deal.icon}
                </div>
                <h3 className="text-white font-bold text-base tracking-tight uppercase mb-2 group-hover:text-primary transition-colors duration-300">{deal.title}</h3>
                <p className="text-white/60 text-xs font-sans font-light leading-relaxed mb-4">{deal.desc}</p>
                <Link to="/contact" className="text-primary text-[10px] uppercase font-bold tracking-wider group-hover:text-white transition-colors flex items-center gap-1.5 mt-auto">
                  Inquire Now <span>&rarr;</span>
                </Link>
              </SlideUp>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Why Choose Us */}
      <section className="relative py-24 bg-dark/95 border-y border-white/5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-primary/5 rounded-full blur-[140px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <SectionTitle subtitle="Our Edge" title="Why Choose Hindustan Buildwell" align="center" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
            {whyUs.map((item, idx) => (
              <SlideUp
                key={idx}
                delay={idx * 0.07}
                className="glass-dark border border-white/5 rounded-2xl p-8 flex flex-col gap-4 hover:border-primary/25 transition-all duration-400 group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary text-xl group-hover:bg-gold-gradient group-hover:text-white group-hover:border-transparent transition-all duration-300">
                  {item.icon}
                </div>
                <h3 className="text-white font-bold text-lg tracking-tight uppercase">{item.title}</h3>
                <p className="text-white/60 text-sm font-sans font-light leading-relaxed">{item.desc}</p>
              </SlideUp>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Our Process */}
      <section className="relative py-24 bg-dark">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <SectionTitle subtitle="How We Work" title="Our Simple 4-Step Process" align="center" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
            {processSteps.map((s, idx) => (
              <SlideUp
                key={idx}
                delay={idx * 0.1}
                className="relative glass-dark border border-white/5 rounded-2xl p-8 text-left hover:border-primary/20 transition-all duration-400"
              >
                <span className="text-5xl font-extrabold text-primary/10 absolute top-4 right-6 font-heading select-none">{s.step}</span>
                <span className="text-xs font-bold text-accent tracking-widest uppercase bg-primary/10 border border-primary/20 px-3 py-1 rounded-full mb-4 inline-block">{`Step ${s.step}`}</span>
                <h4 className="text-white font-bold text-lg uppercase tracking-tight mb-3">{s.title}</h4>
                <p className="text-white/60 text-sm font-sans font-light leading-relaxed">{s.desc}</p>
              </SlideUp>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Bottom CTA Strip */}
      <section className="relative py-24 border-t border-white/5">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=80')] bg-cover bg-center opacity-5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 md:px-8 relative z-10 text-center flex flex-col items-center gap-6">
          <span className="text-xs font-bold text-accent uppercase tracking-[0.25em] bg-primary/10 border border-primary/20 px-4 py-1.5 rounded-full">
            Ready to Begin?
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
            Let's Build Your Dream Together
          </h2>
          <p className="text-white/60 text-sm md:text-base font-sans font-light max-w-xl leading-relaxed">
            Whether you're investing, buying your first home, or developing a commercial property — Hindustan Buildwell is your end-to-end partner.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Link to="/contact"><Button variant="primary" className="px-10 py-4 text-xs">Get a Free Consultation</Button></Link>
            <a href="tel:+919810070711"><Button variant="outline" className="px-10 py-4 text-xs">Call: +91 98100 70711</Button></a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Services;
