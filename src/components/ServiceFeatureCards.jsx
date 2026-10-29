// src/components/ServiceFeatureCards.jsx
import React from 'react';
import './ServiceFeatureCards.css';

const featureData = [
  {
    id: 'bespoke',
    theme: 'bespoke',
    category: 'CUSTOM CRAFTSMANSHIP',
    title: 'YOUR KURTA, YOUR WAY',
    description:
      'Experience bespoke tailoring for men and women. Choose from handloom silks, khadi, and fine linen with customized collars, cuffs, and monogramming.',
    perks: [
      { id: 'swatches', icon: 'shield-check', text: '40+ Swatches' },
      { id: 'fit', icon: 'rotate-ccw', text: 'Perfect Fit Guarantee' },
    ],
    ctaText: 'EXPLORE BESPOKE SERVICE',
    ctaLink: '#bespoke',
  },
  {
    id: 'organics',
    theme: 'organics',
    category: 'FABINDIA ORGANICS',
    title: 'TASTE OF GOOD HEALTH',
    description:
      'Wholesome organic foods, cold-pressed mustard oils, forest honey, traditional desi ghee, and pure herbal teas sourced directly from verified farmer cooperatives.',
    perks: [
      { id: 'certified', icon: 'sparkle', text: '100% Certified Organic' },
      { id: 'delivery', icon: 'truck', text: 'Farm-to-Pantry' },
    ],
    ctaText: 'SHOP ORGANIC NATURALS',
    ctaLink: '#organics',
  },
];

function PerkIcon({ type }) {
  switch (type) {
    case 'shield-check':
      return (
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      );
    case 'rotate-ccw':
      return (
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
          <path d="M3 3v5h5" />
        </svg>
      );
    case 'sparkle':
      return (
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z" />
        </svg>
      );
    case 'truck':
      return (
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="1" y="3" width="15" height="13" />
          <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
          <circle cx="5.5" cy="18.5" r="2.5" />
          <circle cx="18.5" cy="18.5" r="2.5" />
        </svg>
      );
    default:
      return null;
  }
}

export default function ServiceFeatureCards() {
  return (
    <section className="service-cards-section" aria-label="Services and Organics">
      <div className="service-cards-container">
        {featureData.map((card) => (
          <article key={card.id} className={`service-card service-card--${card.theme}`}>
            <div className="service-card-body">
              <span className="service-card-category">{card.category}</span>
              <h2 className="service-card-title">{card.title}</h2>
              <p className="service-card-text">{card.description}</p>

              <div className="service-card-perks">
                {card.perks.map((perk) => (
                  <div key={perk.id} className="service-perk-item">
                    <PerkIcon type={perk.icon} />
                    <span>{perk.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="service-card-footer">
              <a href={card.ctaLink} className="service-card-btn">
                {card.ctaText}
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}