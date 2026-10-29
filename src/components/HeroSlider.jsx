import React, { useState, useEffect } from 'react';
import './HeroSlider.css';

const slidesData = [
  {
    id: 1,
    badge: 'HANDPICKED SAREES & DRAPES',
    title: 'SIX YARDS OF GRACE',
    description:
      'Chanderi, Maheshwari, and Tussar silks woven with pure zari borders, capturing the sacred essence of Indian craftsmanship.',
    btnText: 'SHOP ARTISANAL SARIS',
    link: '#saris',
    certifiedText: 'CERTIFIED HANDCRAFTED WEAVES',
    // Luxury dark festive saree visual background
    image:
      'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1920&q=80',
  },
  {
    id: 2,
    badge: 'LIVING & HOME DECOR',
    title: 'ARTFUL DETAILS FOR FESTIVE DAYS',
    description:
      'Brass diyas, hand-carved soapstone t-lite holders, and hand-block printed table linens to invite warmth into your home.',
    btnText: 'SHOP HOME & LIVING',
    link: '#home',
    certifiedText: 'CERTIFIED HANDCRAFTED WEAVES',
    // Elegant warm home decor / lighting visual
    image:
      'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=1920&q=80',
  },
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slidesData.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === slidesData.length - 1 ? 0 : prev + 1));
  };

  // Auto-play slider (5 seconds)
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [current, isPaused]);

  return (
    <div
      className="hero-slider-container"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slides */}
      {slidesData.map((slide, index) => (
        <div
          key={slide.id}
          className={`hero-slide ${index === current ? 'active' : ''}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          {/* Dark Overlay for rich contrast */}
          <div className="hero-overlay"></div>

          <div className="hero-content">
            {/* Tag Badge */}
            <div className="hero-badge">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L13.8 8.2L20 10L13.8 11.8L12 18L10.2 11.8L4 10L10.2 8.2L12 2Z" />
              </svg>
              <span>{slide.badge}</span>
            </div>

            {/* Title */}
            <h1 className="hero-title">{slide.title}</h1>

            {/* Description */}
            <p className="hero-description">{slide.description}</p>

            {/* CTA & Trust Badge */}
            <div className="hero-actions">
              <a href={slide.link} className="hero-btn">
                {slide.btnText}
              </a>
              <div className="hero-certified">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                <span>{slide.certifiedText}</span>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Left Arrow Button */}
      <button className="slider-arrow left-arrow" onClick={prevSlide} aria-label="Previous Slide">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </button>

      {/* Right Arrow Button */}
      <button className="slider-arrow right-arrow" onClick={nextSlide} aria-label="Next Slide">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </button>

      {/* Bottom Indicator Dots */}
      <div className="slider-dots">
        {slidesData.map((_, dotIndex) => (
          <button
            key={dotIndex}
            className={`slider-dot ${dotIndex === current ? 'active' : ''}`}
            onClick={() => setCurrent(dotIndex)}
            aria-label={`Go to slide ${dotIndex + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;