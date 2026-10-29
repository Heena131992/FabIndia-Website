import React from 'react';
import './FestiveCampaignBanner.css';

const FestiveCampaignBanner = () => {
  return (
    <section className="campaign-banner-wrapper">
      <div className="campaign-banner-card">
        {/* Subtle decorative glow & overlay */}
        <div className="campaign-banner-glow"></div>

        <div className="campaign-banner-content">
          {/* Tag Pill */}
          <span className="campaign-badge">ARTISANAL SILHOUETTES</span>

          {/* Main Title */}
          <h2 className="campaign-title">
            TYOHAAR INDIA KA, KURTA FABINDIA KA
          </h2>

          {/* Subtitle / Description */}
          <p className="campaign-desc">
            From short kurtas for festive card parties to embroidered bandhgalas and silk flared anarkalis, wear the authenticity of India's indigenous crafts.
          </p>

          {/* Action Buttons */}
          <div className="campaign-buttons">
            <a href="#womens-kurtas" className="btn-primary-gold">
              SHOP WOMEN'S KURTAS
            </a>
            <a href="#mens-kurtas" className="btn-outline-festive">
              SHOP MEN'S KURTAS
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FestiveCampaignBanner;