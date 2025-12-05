import React, { useState, useRef } from 'react';
import Reveal from '../reveal';

// Import images
import posterCV from '../assets/poster/DESTER_CV.jpg';
import posterFirma from '../assets/poster/DESTER_FIRMA.jpg';
import posterIzinProperti from '../assets/poster/DESTER_IZIN_PROPERTI.jpg';
import posterIzinUsaha from '../assets/poster/DESTER_IZIN_USAHA.jpg';
import posterKooperasi from '../assets/poster/DESTER_KOOPERASI.jpg';
import posterPerkumpulan from '../assets/poster/DESTER_PERKUMPULAN.jpg';
import posterPTPerorangan from '../assets/poster/DESTER_PT_PERORANGAN.jpg';
import posterPTPMA from '../assets/poster/DESTER_PT_PMA.jpg';
import posterPTPMDN from '../assets/poster/DESTER_PTPMDN.jpg';
import posterYayasan from '../assets/poster/DESTER_YAYASAN.jpg';

const Pricing = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const scrollContainerRef = useRef(null);

  const plans = [
    {
      name: "CV",
      poster: posterCV,
      features: [
        "5 Halaman Website",
        "Domain .com Gratis",
        "SSL Certificate",
        "Responsive Design",
        "Support 3 Bulan"
      ],
      recommended: false
    },
    {
      name: "Firma",
      poster: posterFirma,
      features: [
        "10 Halaman Website",
        "Domain Premium Gratis",
        "SSL Certificate",
        "Responsive Design",
        "SEO Optimization",
        "Support 6 Bulan",
        "Email Profesional"
      ],
      recommended: true
    },
    {
      name: "Izin Properti",
      poster: posterIzinProperti,
      features: [
        "Unlimited Halaman",
        "Domain Premium Gratis",
        "SSL Certificate",
        "Responsive Design",
        "Advanced SEO",
        "Support 12 Bulan",
        "Email Profesional",
        "Maintenance Gratis"
      ],
      recommended: false
    },
    {
      name: "Izin Usaha",
      poster: posterIzinUsaha,
      features: [
        "5 Halaman Website",
        "Domain .com Gratis",
        "SSL Certificate",
        "Responsive Design",
        "Support 3 Bulan"
      ],
      recommended: false
    },
    {
      name: "Kooperasi",
      poster: posterKooperasi,
      features: [
        "10 Halaman Website",
        "Domain Premium Gratis",
        "SSL Certificate",
        "Responsive Design",
        "SEO Optimization",
        "Support 6 Bulan"
      ],
      recommended: false
    },
    {
      name: "Perkumpulan",
      poster: posterPerkumpulan,
      features: [
        "Unlimited Halaman",
        "Domain Premium Gratis",
        "SSL Certificate",
        "Responsive Design",
        "Advanced SEO"
      ],
      recommended: false
    },
    {
      name: "PT Perorangan",
      poster: posterPTPerorangan,
      features: [
        "5 Halaman Website",
        "Domain .com Gratis",
        "SSL Certificate",
        "Responsive Design",
        "Support 3 Bulan"
      ],
      recommended: false
    },
    {
      name: "PT PMA",
      poster: posterPTPMA,
      features: [
        "10 Halaman Website",
        "Domain Premium Gratis",
        "SSL Certificate",
        "Responsive Design",
        "SEO Optimization"
      ],
      recommended: false
    },
    {
      name: "PT PMDN",
      poster: posterPTPMDN,
      features: [
        "Unlimited Halaman",
        "Domain Premium Gratis",
        "SSL Certificate",
        "Responsive Design",
        "Advanced SEO"
      ],
      recommended: false
    },
    {
      name: "Yayasan",
      poster: posterYayasan,
      features: [
        "5 Halaman Website",
        "Domain .com Gratis",
        "SSL Certificate",
        "Responsive Design",
        "Support 3 Bulan"
      ],
      recommended: false
    }
  ];

  const openModal = (poster, name) => {
    setSelectedImage({ src: poster, title: name });
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -350,
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 350,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="pricing" id="harga">
      <div className="container">
        <div className="section-title">
          <h2>Paket Harga</h2>
          <p>Pilih paket yang sesuai dengan kebutuhan bisnis Anda</p>
        </div>

        {/* Pricing Slider Container */}
        <div className="pricing-slider-wrapper">
          {/* Left Navigation Button */}
          <button 
            className="slider-nav slider-nav-left" 
            onClick={scrollLeft}
            aria-label="Slide Left"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>

          {/* Right Navigation Button */}
          <button 
            className="slider-nav slider-nav-right" 
            onClick={scrollRight}
            aria-label="Slide Right"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>

          {/* Pricing Cards */}
          <div className="pricing-grid" ref={scrollContainerRef}>
            {plans.map((plan, index) => (
              <Reveal
                key={index}
                className={`card pricing-card ${plan.recommended ? 'recommended' : ''}`}
                delay={index * 50}
              >
                {plan.recommended && (
                  <div className="recommended-badge">Recommended</div>
                )}
                
                {/* Poster Image as Header */}
                <div 
                  className="pricing-poster"
                  onClick={() => openModal(plan.poster, plan.name)}
                >
                  <img 
                    src={plan.poster} 
                    alt={plan.name}
                    loading="lazy"
                  />
                  <div className="poster-click-hint">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>
                    </svg>
                    Klik untuk perbesar
                  </div>
                </div>

                {/* Features List */}
                <ul className="pricing-features">
                  {plan.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button className="btn-primary pricing-cta">Pilih Paket</button>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div className="image-modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>×</button>
            <img src={selectedImage.src} alt={selectedImage.title} />
            <p className="modal-title">{selectedImage.title}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Pricing;