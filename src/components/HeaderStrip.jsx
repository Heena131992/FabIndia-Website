import React from 'react';
import './HeaderStrip.css';

const SparkleIcon = ({ className = "" }) => (
  <svg 
    className={`strip-sparkle ${className}`} 
    viewBox="0 0 24 24" 
    fill="currentColor"
    width="16" 
    height="16"
  >
    <path d="M12 2L13.8 8.2L20 10L13.8 11.8L12 18L10.2 11.8L4 10L10.2 8.2L12 2Z" />
    <circle cx="19" cy="5" r="1.5" />
    <circle cx="5" cy="17" r="1.5" />
  </svg>
);

const HeaderStrip = () => {
  return (
    <div className="header-strip">
      <div className="header-strip-content">
        <SparkleIcon />
        <span className="strip-text">
          FESTIVE SPECIAL: COMPLIMENTARY ARTISANAL BRASS DIYA ON ORDERS ABOVE ₹4,999
        </span>
        <SparkleIcon className="strip-sparkle-right" />
      </div>
    </div>
  );
};

export default HeaderStrip;