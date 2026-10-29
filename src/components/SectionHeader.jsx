import React from 'react';
import './SectionHeader.css';

const SectionHeader = ({ 
  subtitle = "HANDLOOM ELEGANCE", 
  title = "SIX YARDS OF GRACE", 
  description = "Our handpicked curation of artisanal saris spun in heritage weaver clusters across Varanasi, Chanderi & Bengal." 
}) => {
  return (
    <div className="section-header-container">
      <span className="section-subtitle">{subtitle}</span>
      <h2 className="section-title">{title}</h2>
      <p className="section-desc">{description}</p>
    </div>
  );
};

export default SectionHeader;