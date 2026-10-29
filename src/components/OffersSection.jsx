import React from 'react';
import './OffersSection.css';

const offersData = [
  {
    id: 'womenswear',
    cardType: 'women',
    badge: 'FANTASTIC FINDS',
    heading: 'ON WOMENSWEAR',
    highlight: 'UPTO 60%',
    subHighlight: 'OFF',
    description: 'Saris, Handloom Anarkalis, Palazzos & Tunics',
    buttonText: 'EXPLORE WOMENSWEAR',
    buttonLink: '#womenswear',
  },
  {
    id: 'menswear',
    cardType: 'men',
    badge: 'FESTIVE EDIT',
    heading: 'ON MENSWEAR',
    highlight: 'UPTO 60%',
    subHighlight: 'OFF',
    description: 'Linen Shirts, Raw Silk Kurtas & Bandis',
    buttonText: 'EXPLORE MENSWEAR',
    buttonLink: '#menswear',
  },
  {
    id: 'crimson',
    cardType: 'crimson',
    badge: 'COLOUR OF THE MONTH',
    heading: 'Crimson Hues',
    highlight: null,
    subHighlight: null,
    description: 'The royal color of Indian celebrations, sindoor, and auspicious ceremonies.',
    buttonText: 'SHOP CRIMSON',
    buttonLink: '#crimson-collection',
  },
];

export default function OffersSection() {
  return (
    <section className="offers-section" aria-label="Celebratory Savings">
      <div className="offers-header">
        <span className="offers-eyebrow">CELEBRATORY SAVINGS</span>
        <h2 className="offers-main-title">Offers For You</h2>
      </div>

      <div className="offers-grid">
        {offersData.map((item) => (
          <article key={item.id} className={`offer-card offer-card--${item.cardType}`}>
            <div className="offer-card-top">
              <span className="offer-card-badge">{item.badge}</span>
              <h3 className="offer-card-heading">{item.heading}</h3>

              {item.highlight && (
                <div className="offer-discount-block">
                  <span className="offer-discount-large">{item.highlight}</span>
                  <span className="offer-discount-small">{item.subHighlight}</span>
                </div>
              )}

              <p className="offer-card-description">{item.description}</p>
            </div>

            <div className="offer-card-bottom">
              <a href={item.buttonLink} className="offer-card-btn">
                {item.buttonText}
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}