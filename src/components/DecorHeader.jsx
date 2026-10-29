import React from 'react';
import './DecorHeader.css';

const DecorHeader = () => {
  return (
    <div className="decor-header-container">
      {/* Left side text */}
      <div className="decor-header-left">
        <span className="decor-subtitle">LIVING & PUJA DECOR</span>
        <h2 className="decor-title">ARTFUL DETAILS FOR FESTIVE DAYS</h2>
        <p className="decor-description">
          T-lite holders, hand-hammered brass vases, incense burners & artisanal festive living accents.
        </p>
      </div>

      {/* Right side CTA link */}
      <div className="decor-header-right">
        <a href="#brassware" className="decor-view-all">
          <span>VIEW ALL BRASSWARE</span>
          <span className="arrow-icon">→</span>
        </a>
      </div>
    </div>
  );
};

export default DecorHeader;