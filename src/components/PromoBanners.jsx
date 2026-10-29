import React from 'react';
import './PromoBanners.css';

const PromoBanners = () => {
  return (
    <section className="promo-banners-section">
      <div className="promo-banners-grid">
        
        {/* Banner 1: The Art of Gifting */}
        <div className="promo-banner-card gifting-card">
          <div className="promo-card-overlay"></div>
          <div className="promo-card-content">
            <span className="promo-tag">FESTIVE TRADITIONS</span>
            <h3 className="promo-heading">The Art of Gifting</h3>
            <p className="promo-description">
              Festive apparel gift sets, pure brass sweets platters & artisanal home hampers ready for celebration.
            </p>
            <a href="#gifting" className="promo-btn gold-btn">
              <span>SHOP NOW</span>
              <span className="btn-arrow">→</span>
            </a>
          </div>
        </div>

        {/* Banner 2: Complete Your Festive Look */}
        <div className="promo-banner-card look-card">
          <div className="promo-card-overlay"></div>
          <div className="promo-card-content">
            <span className="promo-tag">ACCESSORIES & POTLIS</span>
            <h3 className="promo-heading">Complete Your Festive Look</h3>
            <p className="promo-description">
              Vibrant kalamkari dupattas, embellished raw silk batuas, juttis, and silver-tone temple jewellery.
            </p>
            <a href="#accessories" className="promo-btn white-btn">
              <span>DISCOVER MORE</span>
              <span className="btn-arrow">→</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default PromoBanners;